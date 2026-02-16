import React, { useMemo, useRef, useEffect, useState } from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import CoachButton from './components/CoachButton';
import CoachChip from './components/CoachChip';
import CoachScreen from './components/CoachScreen';
import CoachTabBar from './components/CoachTabBar';
import { concernOptions, strategyLibrary, taskBank, triggerOptions, type ConcernKey, type Task } from './data';
import { getAppState, getLogsSince, saveDailyLog, setAppState } from './storage';
import { coachTheme } from './theme';
import type { DailyLog, EventState, MetricKey, MetricsState } from './types';

type TabKey = 'today' | 'log' | 'coach' | 'library' | 'trend' | 'profile';

type Profile = {
  childName: string;
  ageRange: string;
  concerns: ConcernKey[];
  timeBudget: string;
  caregiver: string;
};

type TrendSummary = {
  date: string;
  average: number;
  hasData: boolean;
  completedCount: number;
  goodCount: number;
  hardCount: number;
};

const initialProfile: Profile = {
  childName: '孩子',
  ageRange: '',
  concerns: ['attention'],
  timeBudget: '10分钟',
  caregiver: '妈妈',
};

const createDefaultMetrics = (): MetricsState => ({
  attention: 3,
  mood: 3,
  transition: 3,
  parentCalm: 3,
  sleep: 3,
});

const createDefaultEventState = (): EventState => ({
  type: 'good',
  triggers: [],
  note: '',
});

type SavedTodayState = {
  date: string;
  metrics: MetricsState;
  event: EventState;
  completedTasks: string[];
};

const metricRows: Array<{ key: MetricKey; label: string; hint: string }> = [
  { key: 'attention', label: '注意力持续', hint: '完成任务时的专注程度' },
  { key: 'mood', label: '情绪稳定', hint: '当天情绪起伏情况' },
  { key: 'transition', label: '过渡顺畅', hint: '换任务的配合度' },
  { key: 'parentCalm', label: '家长冷静', hint: '自己情绪控制程度' },
  { key: 'sleep', label: '作息质量', hint: '入睡与夜间稳定' },
];

const ageOptions = ['3-5岁', '6-8岁', '9-12岁', '13岁以上'];
const timeOptions = ['5分钟', '10分钟', '20分钟', '30分钟'];
const caregiverOptions = ['妈妈', '爸爸', '祖辈', '其他照护者'];

const tabItems: Array<{ key: TabKey; label: string; icon: 'today' | 'log' | 'coach' | 'library' | 'trend' | 'profile' }> = [
  { key: 'today', label: '今日', icon: 'today' },
  { key: 'log', label: '记录', icon: 'log' },
  { key: 'coach', label: '教练', icon: 'coach' },
  { key: 'library', label: '方法', icon: 'library' },
  { key: 'trend', label: '趋势', icon: 'trend' },
  { key: 'profile', label: '我的', icon: 'profile' },
];

function useEntrance(delay = 0) {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(18)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 420,
        delay,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 420,
        delay,
        useNativeDriver: true,
      }),
    ]).start();
  }, [delay, opacity, translateY]);

  return { opacity, transform: [{ translateY }] };
}

function useStagger(count: number, baseDelay = 100) {
  const valuesRef = useRef<Animated.Value[]>([]);
  if (valuesRef.current.length !== count) {
    valuesRef.current = Array.from({ length: count }, () => new Animated.Value(0));
  }

  useEffect(() => {
    Animated.stagger(
      90,
      valuesRef.current.map((value, index) =>
        Animated.timing(value, {
          toValue: 1,
          duration: 360,
          delay: index === 0 ? baseDelay : 0,
          useNativeDriver: true,
        })
      )
    ).start();
  }, [baseDelay, count]);

  return valuesRef.current.map((value) => ({
    opacity: value,
    transform: [
      {
        translateY: value.interpolate({
          inputRange: [0, 1],
          outputRange: [16, 0],
        }),
      },
    ],
  }));
}

function useCountdown(initialSeconds: number) {
  const [remaining, setRemaining] = useState(initialSeconds);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return undefined;
    const timer = setInterval(() => {
      setRemaining((value) => (value > 0 ? value - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [running]);

  useEffect(() => {
    if (remaining === 0) {
      setRunning(false);
    }
  }, [remaining]);

  const reset = () => {
    setRemaining(initialSeconds);
    setRunning(false);
  };

  return {
    remaining,
    running,
    start: () => setRunning(true),
    pause: () => setRunning(false),
    reset,
  };
}

function formatDuration(seconds: number) {
  const mm = Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0');
  const ss = Math.floor(seconds % 60)
    .toString()
    .padStart(2, '0');
  return `${mm}:${ss}`;
}

function toDateKey(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, '0');
  const day = `${date.getDate()}`.padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function addDays(date: Date, offset: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + offset);
  return next;
}

function getWeekDateKeys(baseDate = new Date()) {
  const start = addDays(baseDate, -6);
  return Array.from({ length: 7 }, (_, index) => toDateKey(addDays(start, index)));
}

function buildTrendSummary(logs: DailyLog[], weekKeys: string[]): TrendSummary[] {
  const map = new Map(logs.map((log) => [log.date, log]));
  return weekKeys.map((date) => {
    const log = map.get(date);
    if (!log) {
      return {
        date,
        average: 0,
        hasData: false,
        completedCount: 0,
        goodCount: 0,
        hardCount: 0,
      };
    }
    const average =
      (log.metrics.attention +
        log.metrics.mood +
        log.metrics.transition +
        log.metrics.parentCalm +
        log.metrics.sleep) /
      5;
    return {
      date,
      average,
      hasData: true,
      completedCount: log.completedTasks.length,
      goodCount: log.event.type === 'good' ? 1 : 0,
      hardCount: log.event.type === 'hard' ? 1 : 0,
    };
  });
}

function buildTodayTasks(profile: Profile): Task[] {
  const selected: ConcernKey[] = profile.concerns.length ? profile.concerns : ['attention'];
  const tasks: Task[] = [];

  selected.forEach((concern) => {
    const options = taskBank[concern];
    if (options?.length) {
      tasks.push(options[0]);
    }
  });

  taskBank.core.forEach((task) => {
    if (!tasks.find((item) => item.id === task.id)) {
      tasks.push(task);
    }
  });

  return tasks.slice(0, 3);
}

function buildCoachSummary(metrics: MetricsState, completedCount: number, event: EventState) {
  const average =
    (metrics.attention + metrics.mood + metrics.transition + metrics.parentCalm + metrics.sleep) / 5;
  const moodLow = metrics.mood <= 2;
  const transitionLow = metrics.transition <= 2;
  const sleepLow = metrics.sleep <= 2;

  const headline =
    average >= 4
      ? '今天整体表现稳定，你们保持得很好。'
      : average >= 3
      ? '今天起伏正常，继续用小步策略推进。'
      : '今天比较辛苦，先稳住节奏，再逐步改善。';

  const insight = transitionLow
    ? '过渡环节仍是主要卡点，先把倒计时用稳。'
    : moodLow
    ? '情绪起伏较多，优先做安静时间与情绪词汇。'
    : sleepLow
    ? '作息对情绪影响明显，今晚先固定睡前流程。'
    : '孩子对结构化安排反应不错，可以小幅加难度。';

  const suggestions = [
    transitionLow ? '把“3-2-1 倒计时”固定为统一口令。' : '明天继续保持具体表扬。',
    moodLow ? '爆发前先降低刺激，带去安静角。' : '把短句指令写成提示卡。',
    completedCount < 2
      ? '任务只做 1-2 件也可以，先建立完成感。'
      : '完成任务后加入 5 分钟自由游戏奖励。',
  ];

  const triggerLine = event.triggers.length
    ? `高频触发：${event.triggers.slice(0, 2).join('、')}`
    : '高频触发：暂无明显集中项。';

  return { headline, insight, suggestions, triggerLine };
}

function getCoachReply(input: string) {
  if (input.includes('发脾气') || input.includes('情绪')) {
    return '先把环境降噪 + 安静时间。冷静后再用“我感到……”引导复盘。';
  }
  if (input.includes('不配合') || input.includes('不听') || input.includes('拖延')) {
    return '用短句指令 + 二选一，再配合 3-2-1 倒计时，减少拉扯。';
  }
  if (input.includes('作业') || input.includes('学习')) {
    return '把任务拆成小段，先完成最容易的一段，建立成功感。';
  }
  return '把目标缩小到当下的一步，再用具体表扬巩固。';
}

type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {subtitle ? <Text style={styles.sectionSubtitle}>{subtitle}</Text> : null}
    </View>
  );
}

type CardProps = {
  children: React.ReactNode;
  style?: object;
};

function Card({ children, style }: CardProps) {
  return <View style={[styles.card, style]}>{children}</View>;
}

type TaskCardProps = {
  task: Task;
  completed: boolean;
  onToggle: () => void;
  style?: object;
};

function TaskCard({ task, completed, onToggle, style }: TaskCardProps) {
  return (
    <Card style={style}>
      <View style={styles.taskHeader}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <Pressable onPress={onToggle} style={[styles.check, completed && styles.checkActive]}>
          <Text style={[styles.checkText, completed && styles.checkTextActive]}>
            {completed ? '✓' : ''}
          </Text>
        </Pressable>
      </View>
      <Text style={styles.taskSummary}>{task.summary}</Text>
      <View style={styles.taskSteps}>
        {task.steps.map((step) => (
          <Text key={step} style={styles.taskStepText}>
            · {step}
          </Text>
        ))}
      </View>
      {task.tags?.length ? (
        <View style={styles.tagRow}>
          {task.tags.map((tag) => (
            <CoachChip key={tag} label={tag} />
          ))}
        </View>
      ) : null}
    </Card>
  );
}

type MetricRowProps = {
  label: string;
  hint: string;
  value: number;
  onChange: (value: number) => void;
};

function MetricRow({ label, hint, value, onChange }: MetricRowProps) {
  return (
    <View style={styles.metricRow}>
      <View>
        <Text style={styles.metricLabel}>{label}</Text>
        <Text style={styles.metricHint}>{hint}</Text>
      </View>
      <View style={styles.metricScale}>
        {[1, 2, 3, 4, 5].map((score) => (
          <Pressable
            key={score}
            onPress={() => onChange(score)}
            style={[styles.metricDot, value === score && styles.metricDotActive]}
          >
            <Text style={[styles.metricDotText, value === score && styles.metricDotTextActive]}>
              {score}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default function CoachApp() {
  const [activeTab, setActiveTab] = useState<TabKey>('today');
  const [appLoading, setAppLoading] = useState(true);
  const [appLoadError, setAppLoadError] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);
  const [reloadToken, setReloadToken] = useState(0);
  const [onboarded, setOnboarded] = useState(false);
  const [profile, setProfile] = useState<Profile>(initialProfile);
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [weeklyLogs, setWeeklyLogs] = useState<DailyLog[]>([]);
  const [logsLoading, setLogsLoading] = useState(true);
  const [logsError, setLogsError] = useState<string | null>(null);
  const [metrics, setMetrics] = useState<MetricsState>(createDefaultMetrics);
  const [eventState, setEventState] = useState<EventState>(createDefaultEventState);

  const todayTasks = useMemo(() => buildTodayTasks(profile), [profile]);
  const weekKeys = useMemo(() => getWeekDateKeys(), []);

  useEffect(() => {
    let active = true;
    const hydrate = async () => {
      setAppLoading(true);
      setAppLoadError(null);
      try {
        const [savedProfile, savedOnboarded, savedToday] = await Promise.all([
          getAppState<Profile>('profile'),
          getAppState<boolean>('onboarded'),
          getAppState<SavedTodayState>('today_state'),
        ]);
        if (!active) return;
        if (savedProfile) setProfile(savedProfile);
        if (typeof savedOnboarded === 'boolean') setOnboarded(savedOnboarded);
        const todayKey = toDateKey(new Date());
        if (savedToday && savedToday.date === todayKey) {
          setMetrics(savedToday.metrics);
          setEventState(savedToday.event);
          setCompletedTasks(savedToday.completedTasks);
        } else {
          setMetrics(createDefaultMetrics());
          setEventState(createDefaultEventState());
          setCompletedTasks([]);
        }
        setHydrated(true);
      } catch (error) {
        console.warn('[CoachApp] Failed to hydrate app state', error);
        if (active) setAppLoadError('数据加载失败，请重试');
      } finally {
        if (active) setAppLoading(false);
      }
    };
    void hydrate();
    return () => {
      active = false;
    };
  }, [reloadToken]);

  const refreshWeeklyLogs = async () => {
    setLogsLoading(true);
    setLogsError(null);
    try {
      const logs = await getLogsSince(weekKeys[0]);
      setWeeklyLogs(logs);
    } catch (error) {
      console.warn('[CoachApp] Failed to load weekly logs', error);
      setLogsError('加载趋势数据失败，请稍后重试。');
    } finally {
      setLogsLoading(false);
    }
  };

  useEffect(() => {
    void refreshWeeklyLogs();
  }, [weekKeys]);

  useEffect(() => {
    if (!hydrated) return;
    void setAppState('profile', profile);
  }, [profile, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    void setAppState('onboarded', onboarded);
  }, [onboarded, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const payload: SavedTodayState = {
      date: toDateKey(new Date()),
      metrics,
      event: eventState,
      completedTasks,
    };
    void setAppState('today_state', payload);
  }, [completedTasks, eventState, hydrated, metrics]);

  const handleSaveLog = async () => {
    const log: DailyLog = {
      date: toDateKey(new Date()),
      metrics,
      event: eventState,
      completedTasks,
      createdAt: Date.now(),
    };
    await saveDailyLog(log);
    await refreshWeeklyLogs();
  };

  if (appLoading) {
    return (
      <CoachScreen>
        <View style={styles.loadingState}>
          <Text style={styles.loadingTitle}>正在加载数据...</Text>
          <Text style={styles.loadingHint}>请稍候，正在同步你的今日计划。</Text>
        </View>
      </CoachScreen>
    );
  }

  if (appLoadError) {
    return (
      <CoachScreen>
        <View style={styles.loadingState}>
          <Text style={styles.loadingTitle}>数据加载失败</Text>
          <Text style={styles.errorText}>{appLoadError}</Text>
          <CoachButton label="重试" onPress={() => setReloadToken((value) => value + 1)} />
        </View>
      </CoachScreen>
    );
  }

  if (!onboarded) {
    return <OnboardingScreen profile={profile} onComplete={(data) => {
      setProfile(data);
      setOnboarded(true);
    }} />;
  }

  return (
    <CoachScreen>
      <View style={styles.appShell}>
        <View style={styles.tabContent}>
          {activeTab === 'today' && (
            <TodayTab
              profile={profile}
              tasks={todayTasks}
              completedTasks={completedTasks}
              onToggleTask={(id) =>
                setCompletedTasks((current) =>
                  current.includes(id) ? current.filter((item) => item !== id) : [...current, id]
                )
              }
              onQuickLog={() => setActiveTab('log')}
              onAskCoach={() => setActiveTab('coach')}
            />
          )}
          {activeTab === 'log' && (
            <LogTab
              metrics={metrics}
              onMetricChange={(key, value) =>
                setMetrics((current) => ({ ...current, [key]: value }))
              }
              eventState={eventState}
              onEventChange={setEventState}
              completedTasks={completedTasks}
              onSave={handleSaveLog}
            />
          )}
          {activeTab === 'coach' && (
            <CoachTab
              metrics={metrics}
              completedCount={completedTasks.length}
              eventState={eventState}
            />
          )}
          {activeTab === 'library' && <LibraryTab />}
          {activeTab === 'trend' && (
            <TrendTab logs={weeklyLogs} weekKeys={weekKeys} loading={logsLoading} error={logsError} />
          )}
          {activeTab === 'profile' && <ProfileTab profile={profile} />}
        </View>
        <CoachTabBar
          items={tabItems}
          activeKey={activeTab}
          onChange={(key) => setActiveTab(key as TabKey)}
        />
      </View>
    </CoachScreen>
  );
}

type OnboardingScreenProps = {
  profile: Profile;
  onComplete: (profile: Profile) => void;
};

function OnboardingScreen({ profile, onComplete }: OnboardingScreenProps) {
  const entrance = useEntrance();
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState(profile);

  const canNext =
    (step === 0 && draft.ageRange.length > 0) ||
    (step === 1 && draft.concerns.length > 0) ||
    (step === 2 && draft.timeBudget.length > 0 && draft.caregiver.length > 0);

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    onComplete(draft);
  };

  return (
    <CoachScreen>
      <Animated.View style={[styles.onboarding, entrance]}>
        <View style={styles.onboardingHeader}>
          <Text style={styles.onboardingTitle}>先认识孩子</Text>
          <Text style={styles.onboardingSubtitle}>3 步生成起始计划，30 秒完成。</Text>
          <View style={styles.progressRow}>
            {[0, 1, 2].map((index) => (
              <View
                key={index}
                style={[styles.progressDot, step === index && styles.progressDotActive]}
              />
            ))}
          </View>
        </View>

        <ScrollView contentContainerStyle={styles.onboardingContent} showsVerticalScrollIndicator={false}>
          {step === 0 && (
            <View style={styles.stepCard}>
              <Text style={styles.stepTitle}>孩子怎么称呼？</Text>
              <TextInput
                value={draft.childName}
                onChangeText={(text) => setDraft((current) => ({ ...current, childName: text }))}
                placeholder="比如：小安"
                placeholderTextColor={coachTheme.colors.textMuted}
                style={styles.textInput}
                testID="onboarding-child-name"
              />
              <Text style={styles.stepTitle}>年龄段</Text>
              <View style={styles.optionGrid}>
                {ageOptions.map((option, index) => (
                  <CoachChip
                    key={option}
                    label={option}
                    selected={draft.ageRange === option}
                    onPress={() => setDraft((current) => ({ ...current, ageRange: option }))}
                    style={styles.optionChip}
                    testID={`onboarding-age-${index}`}
                  />
                ))}
              </View>
            </View>
          )}

          {step === 1 && (
            <View style={styles.stepCard}>
              <Text style={styles.stepTitle}>最想先改善 1-2 项</Text>
              <View style={styles.optionGrid}>
                {concernOptions.map((option) => {
                  const selected = draft.concerns.includes(option.key);
                  return (
                    <View key={option.key} style={styles.optionItem}>
                      <CoachChip
                        label={option.label}
                        selected={selected}
                        onPress={() =>
                          setDraft((current) => ({
                            ...current,
                            concerns: selected
                              ? current.concerns.filter((item) => item !== option.key)
                              : [...current.concerns, option.key],
                          }))
                        }
                        testID={`onboarding-concern-${option.key}`}
                      />
                      <Text style={styles.optionHint}>{option.hint}</Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

          {step === 2 && (
            <View style={styles.stepCard}>
              <Text style={styles.stepTitle}>每天可投入时间</Text>
              <View style={styles.optionGrid}>
                {timeOptions.map((option, index) => (
                  <CoachChip
                    key={option}
                    label={option}
                    selected={draft.timeBudget === option}
                    onPress={() => setDraft((current) => ({ ...current, timeBudget: option }))}
                    style={styles.optionChip}
                    testID={`onboarding-time-${index}`}
                  />
                ))}
              </View>
              <Text style={styles.stepTitle}>主要照护者</Text>
              <View style={styles.optionGrid}>
                {caregiverOptions.map((option, index) => (
                  <CoachChip
                    key={option}
                    label={option}
                    selected={draft.caregiver === option}
                    onPress={() => setDraft((current) => ({ ...current, caregiver: option }))}
                    style={styles.optionChip}
                    testID={`onboarding-caregiver-${index}`}
                  />
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        <View style={styles.onboardingFooter}>
          <CoachButton
            label={step < 2 ? '下一步' : '生成起始计划'}
            onPress={handleNext}
            disabled={!canNext}
            testID="onboarding-next"
          />
          {step > 0 ? (
            <Pressable onPress={() => setStep(step - 1)} style={styles.backLink} testID="onboarding-back">
              <Text style={styles.backLinkText}>返回上一步</Text>
            </Pressable>
          ) : null}
        </View>
      </Animated.View>
    </CoachScreen>
  );
}

type TodayTabProps = {
  profile: Profile;
  tasks: Task[];
  completedTasks: string[];
  onToggleTask: (id: string) => void;
  onQuickLog: () => void;
  onAskCoach: () => void;
};

function TodayTab({ profile, tasks, completedTasks, onToggleTask, onQuickLog, onAskCoach }: TodayTabProps) {
  const entrance = useEntrance(60);
  const taskAnimations = useStagger(tasks.length, 160);
  const timedTask = tasks.find((task) => task.durationSec);
  const timer = useCountdown(timedTask?.durationSec ?? 600);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      testID="log-scroll"
    >
      <Animated.View style={[entrance]}>
        <Text style={styles.greeting}>早上好，{profile.caregiver}</Text>
        <Text style={styles.heroTitle}>今天只做 3 件小事</Text>
        <Text style={styles.heroSubtitle}>
          {profile.childName}（{profile.ageRange}）的起始计划已生成，别求完美，先求完成。
        </Text>
      </Animated.View>

      {timedTask ? (
        <Animated.View style={[styles.timerCard, entrance]}>
          <Text style={styles.timerTitle}>{timedTask.title}</Text>
          <Text style={styles.timerHint}>{timedTask.summary}</Text>
          <View style={styles.timerRow}>
            <Text style={styles.timerValue}>{formatDuration(timer.remaining)}</Text>
            <View style={styles.timerActions}>
              <CoachButton
                label={timer.running ? '暂停' : '开始'}
                onPress={timer.running ? timer.pause : timer.start}
                style={styles.timerButton}
              />
              <CoachButton label="重置" variant="outline" onPress={timer.reset} />
            </View>
          </View>
          <Text style={styles.timerFootnote}>计时结束后，给孩子一个具体表扬。</Text>
        </Animated.View>
      ) : null}

      <SectionTitle title="今日任务" subtitle={`已完成 ${completedTasks.length}/${tasks.length}`} />
      <View style={styles.taskList}>
        {tasks.map((task, index) => (
          <Animated.View key={task.id} style={[taskAnimations[index]]}>
            <TaskCard
              task={task}
              completed={completedTasks.includes(task.id)}
              onToggle={() => onToggleTask(task.id)}
              style={styles.taskCard}
            />
          </Animated.View>
        ))}
      </View>

      <Card style={styles.quickActions}>
        <Text style={styles.quickTitle}>快速入口</Text>
        <Text style={styles.quickHint}>只要 30 秒，记录今天的关键时刻。</Text>
        <View style={styles.quickButtons}>
          <CoachButton
            label="去记录"
            onPress={onQuickLog}
            style={styles.quickButton}
            testID="quick-log"
          />
          <CoachButton label="求助教练" variant="outline" onPress={onAskCoach} />
        </View>
      </Card>
    </ScrollView>
  );
}

type LogTabProps = {
  metrics: MetricsState;
  onMetricChange: (key: MetricKey, value: number) => void;
  eventState: EventState;
  onEventChange: (state: EventState) => void;
  completedTasks: string[];
  onSave: () => Promise<void>;
};

function LogTab({ metrics, onMetricChange, eventState, onEventChange, completedTasks, onSave }: LogTabProps) {
  const entrance = useEntrance(80);
  const [savedAt, setSavedAt] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);

  const handleSave = async () => {
    setSaving(true);
    setSaveError(null);
    try {
      await onSave();
      const now = new Date();
      const stamp = `${now.getHours().toString().padStart(2, '0')}:${now
        .getMinutes()
        .toString()
        .padStart(2, '0')}`;
      setSavedAt(stamp);
    } catch (error) {
      console.warn('[LogTab] Failed to save log', error);
      setSaveError('保存失败，请稍后重试。');
    } finally {
      setSaving(false);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
      testID="today-scroll"
    >
      <Animated.View style={[entrance]}>
        <Text style={styles.heroTitle}>每日记录</Text>
        <Text style={styles.heroSubtitle}>越简化越容易坚持，今天先抓 5 个指标。</Text>
      </Animated.View>

      <Card>
        <SectionTitle title="每日评估" subtitle="1 很差 · 5 很好" />
        <Text style={styles.metricSummary}>今日任务完成：{completedTasks.length} 项</Text>
        <View style={styles.metricList}>
          {metricRows.map((row) => (
            <MetricRow
              key={row.key}
              label={row.label}
              hint={row.hint}
              value={metrics[row.key]}
              onChange={(value) => onMetricChange(row.key, value)}
            />
          ))}
        </View>
      </Card>

      <Card style={styles.eventCard}>
        <SectionTitle title="事件记录" subtitle="美好时光 / 艰难时光" />
        <View style={styles.toggleRow}>
          {[
            { key: 'good', label: '美好时光' },
            { key: 'hard', label: '艰难时光' },
          ].map((option) => {
            const active = eventState.type === option.key;
            return (
              <Pressable
                key={option.key}
                onPress={() => onEventChange({ ...eventState, type: option.key as 'good' | 'hard' })}
                style={[styles.toggleButton, active && styles.toggleButtonActive]}
              >
                <Text style={[styles.toggleText, active && styles.toggleTextActive]}>
                  {option.label}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text style={styles.stepTitle}>触发因素</Text>
        <View style={styles.tagRow}>
          {triggerOptions.map((trigger) => {
            const selected = eventState.triggers.includes(trigger);
            return (
              <CoachChip
                key={trigger}
                label={trigger}
                selected={selected}
                onPress={() =>
                  onEventChange({
                    ...eventState,
                    triggers: selected
                      ? eventState.triggers.filter((item) => item !== trigger)
                      : [...eventState.triggers, trigger],
                  })
                }
                style={styles.optionChip}
              />
            );
          })}
        </View>

        <Text style={styles.stepTitle}>简短记录</Text>
        <TextInput
          value={eventState.note}
          onChangeText={(text) => onEventChange({ ...eventState, note: text })}
          placeholder="发生了什么？你当时怎么处理的？"
          placeholderTextColor={coachTheme.colors.textMuted}
          style={[styles.textInput, styles.textArea]}
          multiline
        />

        <View style={styles.saveRow}>
          <CoachButton
            label={saving ? '保存中...' : '保存记录'}
            onPress={handleSave}
            style={styles.saveButton}
            disabled={saving}
            testID="log-save"
          />
          {savedAt ? (
            <Text style={styles.savedText} testID="log-saved-at">
              已保存 {savedAt}
            </Text>
          ) : null}
        </View>
        {saveError ? <Text style={styles.errorText}>{saveError}</Text> : null}
      </Card>
    </ScrollView>
  );
}

type CoachTabProps = {
  metrics: MetricsState;
  completedCount: number;
  eventState: EventState;
};

function CoachTab({ metrics, completedCount, eventState }: CoachTabProps) {
  const entrance = useEntrance(80);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Array<{ id: string; role: 'user' | 'assistant'; text: string }>>([
    {
      id: 'welcome',
      role: 'assistant',
      text: '我是你的家长教练，先完成记录，我再给你更精准的建议。',
    },
  ]);

  const summary = buildCoachSummary(metrics, completedCount, eventState);

  const handleSend = () => {
    if (!input.trim()) return;
    const id = Date.now().toString();
    const userMessage = { id: `${id}-u`, role: 'user' as const, text: input.trim() };
    const reply = { id: `${id}-a`, role: 'assistant' as const, text: getCoachReply(input.trim()) };
    setMessages((current) => [...current, userMessage, reply]);
    setInput('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Animated.View style={[entrance]}>
          <Text style={styles.heroTitle}>AI 教练复盘</Text>
          <Text style={styles.heroSubtitle}>基于今天的记录与任务完成度生成。</Text>
        </Animated.View>

        <Card style={styles.coachSummaryCard}>
          <Text style={styles.coachHeadline}>{summary.headline}</Text>
          <Text style={styles.coachInsight}>{summary.insight}</Text>
          <Text style={styles.coachTrigger}>{summary.triggerLine}</Text>
          <View style={styles.suggestionList}>
            {summary.suggestions.map((item) => (
              <Text key={item} style={styles.suggestionText}>
                · {item}
              </Text>
            ))}
          </View>
        </Card>

        <Card>
          <SectionTitle title="对话教练" subtitle="任何困惑都可以问我" />
          <View style={styles.chatList}>
            {messages.map((message) => (
              <View
                key={message.id}
                style={[
                  styles.chatBubble,
                  message.role === 'user' ? styles.chatBubbleUser : styles.chatBubbleCoach,
                ]}
              >
                <Text
                  style={
                    message.role === 'user' ? styles.chatTextUser : styles.chatTextCoach
                  }
                >
                  {message.text}
                </Text>
              </View>
            ))}
          </View>
          <View style={styles.chatInputRow}>
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="比如：孩子不肯收玩具怎么办？"
              placeholderTextColor={coachTheme.colors.textMuted}
              style={[styles.textInput, styles.chatInput]}
            />
            <Pressable onPress={handleSend} style={styles.sendButton}>
              <Text style={styles.sendButtonText}>发送</Text>
            </Pressable>
          </View>
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

function LibraryTab() {
  const entrance = useEntrance(80);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View style={[entrance]}>
        <Text style={styles.heroTitle}>方法库</Text>
        <Text style={styles.heroSubtitle}>来自“六步法 / Step by Step”核心技巧。</Text>
      </Animated.View>

      {strategyLibrary.map((item) => (
        <Card key={item.id} style={styles.libraryCard}>
          <Text style={styles.libraryTitle}>{item.title}</Text>
          <Text style={styles.libraryScene}>适用场景：{item.scene}</Text>
          <View style={styles.librarySteps}>
            {item.steps.map((step) => (
              <Text key={step} style={styles.libraryStepText}>
                · {step}
              </Text>
            ))}
          </View>
          <View style={styles.libraryScript}>
            <Text style={styles.libraryScriptLabel}>示例话术</Text>
            <Text style={styles.libraryScriptText}>{item.script}</Text>
          </View>
        </Card>
      ))}
    </ScrollView>
  );
}

type TrendTabProps = {
  logs: DailyLog[];
  weekKeys: string[];
  loading: boolean;
  error?: string | null;
};

function TrendTab({ logs, weekKeys, loading, error }: TrendTabProps) {
  const entrance = useEntrance(80);
  const summary = useMemo(() => buildTrendSummary(logs, weekKeys), [logs, weekKeys]);
  const dataPoints = summary.filter((item) => item.hasData);
  const averageScore =
    dataPoints.reduce((acc, item) => acc + item.average, 0) / (dataPoints.length || 1);
  const completedAverage =
    dataPoints.reduce((acc, item) => acc + item.completedCount, 0) / (dataPoints.length || 1);
  const goodCount = summary.reduce((acc, item) => acc + item.goodCount, 0);
  const hardCount = summary.reduce((acc, item) => acc + item.hardCount, 0);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View style={[entrance]}>
        <Text style={styles.heroTitle} testID="trend-title">
          周报 / 趋势
        </Text>
        <Text style={styles.heroSubtitle}>每周回顾 7 天的数据趋势。</Text>
      </Animated.View>

      {loading ? (
        <Card>
          <Text style={styles.trendEmpty}>正在加载数据...</Text>
        </Card>
      ) : error ? (
        <Card>
          <Text style={styles.errorText}>{error}</Text>
        </Card>
      ) : (
        <>
          <Card>
            <SectionTitle title="本周概览" subtitle="平均值基于已记录天数" />
            <View style={styles.trendSummaryRow}>
              <View style={styles.trendSummaryItem}>
                <Text style={styles.trendSummaryLabel}>稳定度</Text>
                <Text style={styles.trendSummaryValue}>{averageScore.toFixed(1)}</Text>
              </View>
              <View style={styles.trendSummaryItem}>
                <Text style={styles.trendSummaryLabel}>任务完成</Text>
                <Text style={styles.trendSummaryValue}>{completedAverage.toFixed(1)} / 天</Text>
              </View>
              <View style={styles.trendSummaryItem}>
                <Text style={styles.trendSummaryLabel}>美好时光</Text>
                <Text style={styles.trendSummaryValue}>{goodCount}</Text>
              </View>
              <View style={styles.trendSummaryItem}>
                <Text style={styles.trendSummaryLabel}>艰难时光</Text>
                <Text style={styles.trendSummaryValue}>{hardCount}</Text>
              </View>
            </View>
          </Card>

          <Card>
            <SectionTitle title="稳定度趋势" subtitle="每日平均 1-5 分" />
            {dataPoints.length === 0 ? (
              <Text style={styles.trendEmpty}>本周还没有记录，从今天开始吧。</Text>
            ) : (
              <View style={styles.trendChart}>
                {summary.map((item) => {
                  const height = item.hasData ? Math.max(8, (item.average / 5) * 90) : 6;
                  return (
                    <View key={item.date} style={styles.trendBarItem}>
                      <View style={[styles.trendBar, item.hasData && styles.trendBarActive, { height }]} />
                      <Text style={styles.trendBarLabel}>{item.date.slice(5)}</Text>
                    </View>
                  );
                })}
              </View>
            )}
          </Card>

          <Card>
            <SectionTitle title="建议" />
            <Text style={styles.trendHint}>
              若平均稳定度低于 3，优先保证“倒计时过渡 + 安静时间 + 短句指令”。稳定度连续 3 天高于 4，可适当增加任务难度。
            </Text>
          </Card>
        </>
      )}
    </ScrollView>
  );
}

type ProfileTabProps = {
  profile: Profile;
};

function ProfileTab({ profile }: ProfileTabProps) {
  const entrance = useEntrance(80);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
      <Animated.View style={[entrance]}>
        <Text style={styles.heroTitle}>我的</Text>
        <Text style={styles.heroSubtitle}>建立一致的家庭节奏，让努力被看见。</Text>
      </Animated.View>

      <Card>
        <SectionTitle title="孩子档案" />
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>称呼</Text>
          <Text style={styles.profileValue}>{profile.childName}</Text>
        </View>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>年龄段</Text>
          <Text style={styles.profileValue}>{profile.ageRange}</Text>
        </View>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>主要照护者</Text>
          <Text style={styles.profileValue}>{profile.caregiver}</Text>
        </View>
        <View style={styles.profileRow}>
          <Text style={styles.profileLabel}>每日投入</Text>
          <Text style={styles.profileValue}>{profile.timeBudget}</Text>
        </View>
      </Card>

      <Card style={styles.profileCard}>
        <SectionTitle title="家庭协作" subtitle="一致性是最重要的干预" />
        <Text style={styles.profileHint}>邀请其他照护者同步任务与记录。</Text>
        <CoachButton label="邀请共同照护者" variant="outline" />
      </Card>

      <Card style={styles.profileCard}>
        <SectionTitle title="信任与安全" />
        <Text style={styles.profileHint}>
          本应用提供育儿指导与自我管理建议，不替代专业诊断或治疗。
        </Text>
        <Text style={styles.profileHint}>如有严重情绪或行为风险，请及时寻求专业支持。</Text>
        <Text style={styles.profileSourceTitle}>内容来源</Text>
        <Text style={styles.profileHint}>《多动症儿童养育六步法》</Text>
        <Text style={styles.profileHint}>Step by Step Help for Children with ADHD</Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appShell: {
    flex: 1,
  },
  tabContent: {
    flex: 1,
  },
  loadingState: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: coachTheme.spacing.lg,
    gap: coachTheme.spacing.sm,
  },
  loadingTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  loadingHint: {
    fontSize: 13,
    color: coachTheme.colors.textMuted,
    textAlign: 'center',
    fontFamily: coachTheme.fonts.body,
    lineHeight: 18,
  },
  errorText: {
    fontSize: 13,
    color: coachTheme.colors.accentDeep,
    fontFamily: coachTheme.fonts.body,
    lineHeight: 18,
  },
  scrollContent: {
    padding: coachTheme.spacing.lg,
    paddingBottom: 120,
    gap: coachTheme.spacing.lg,
  },
  greeting: {
    fontSize: 15,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
    marginTop: 6,
  },
  heroSubtitle: {
    fontSize: 13,
    color: coachTheme.colors.textMuted,
    lineHeight: 18,
    marginTop: 6,
    fontFamily: coachTheme.fonts.body,
  },
  sectionHeader: {
    marginBottom: coachTheme.spacing.sm,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    marginTop: 2,
    fontFamily: coachTheme.fonts.body,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: coachTheme.radius.lg,
    padding: coachTheme.spacing.md,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    gap: coachTheme.spacing.sm,
    shadowColor: '#2b2723',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
  },
  timerCard: {
    backgroundColor: coachTheme.colors.surfaceWarm,
    borderRadius: coachTheme.radius.lg,
    padding: coachTheme.spacing.md,
    borderWidth: 1,
    borderColor: coachTheme.colors.accentSoft,
    gap: coachTheme.spacing.sm,
  },
  timerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  timerHint: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  timerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  timerValue: {
    fontSize: 28,
    fontWeight: '700',
    color: coachTheme.colors.teal,
    fontFamily: coachTheme.fonts.heading,
  },
  timerActions: {
    flexDirection: 'row',
    gap: coachTheme.spacing.sm,
  },
  timerButton: {
    minWidth: 92,
  },
  timerFootnote: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  taskList: {
    gap: coachTheme.spacing.md,
  },
  taskCard: {
    gap: coachTheme.spacing.sm,
  },
  taskHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  taskTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  taskSummary: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
  },
  taskSteps: {
    gap: 4,
  },
  taskStepText: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  tagRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  check: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: coachTheme.colors.surface,
  },
  checkActive: {
    backgroundColor: coachTheme.colors.teal,
    borderColor: coachTheme.colors.teal,
  },
  checkText: {
    color: coachTheme.colors.textMuted,
    fontSize: 16,
    fontWeight: '700',
    fontFamily: coachTheme.fonts.heading,
  },
  checkTextActive: {
    color: '#ffffff',
  },
  quickActions: {
    gap: coachTheme.spacing.sm,
  },
  quickTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  quickHint: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  quickButtons: {
    flexDirection: 'row',
    gap: coachTheme.spacing.sm,
  },
  quickButton: {
    flex: 1,
  },
  metricList: {
    gap: coachTheme.spacing.md,
  },
  metricSummary: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    marginBottom: 6,
    fontFamily: coachTheme.fonts.body,
  },
  metricRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  metricLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  metricHint: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    marginTop: 2,
    fontFamily: coachTheme.fonts.body,
  },
  metricScale: {
    flexDirection: 'row',
    gap: 6,
  },
  metricDot: {
    width: 28,
    height: 28,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: coachTheme.colors.surface,
  },
  metricDotActive: {
    backgroundColor: coachTheme.colors.teal,
    borderColor: coachTheme.colors.teal,
  },
  metricDotText: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  metricDotTextActive: {
    color: '#ffffff',
    fontWeight: '700',
  },
  eventCard: {
    gap: coachTheme.spacing.sm,
  },
  toggleRow: {
    flexDirection: 'row',
    gap: 10,
  },
  toggleButton: {
    flex: 1,
    borderRadius: coachTheme.radius.pill,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: coachTheme.colors.surface,
  },
  toggleButtonActive: {
    backgroundColor: coachTheme.colors.accent,
    borderColor: coachTheme.colors.accentDeep,
  },
  toggleText: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
    fontWeight: '600',
  },
  toggleTextActive: {
    color: '#fffdfb',
  },
  stepTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  textInput: {
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    borderRadius: coachTheme.radius.md,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.body,
    backgroundColor: coachTheme.colors.surface,
  },
  textArea: {
    minHeight: 90,
    textAlignVertical: 'top',
  },
  saveRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: coachTheme.spacing.sm,
  },
  saveButton: {
    flex: 1,
  },
  savedText: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  coachSummaryCard: {
    gap: coachTheme.spacing.sm,
  },
  coachHeadline: {
    fontSize: 16,
    fontWeight: '700',
    color: coachTheme.colors.teal,
    fontFamily: coachTheme.fonts.heading,
  },
  coachInsight: {
    fontSize: 13,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
  },
  coachTrigger: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  suggestionList: {
    gap: 4,
  },
  suggestionText: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
  },
  chatList: {
    gap: 10,
  },
  chatBubble: {
    padding: 12,
    borderRadius: coachTheme.radius.md,
    maxWidth: '85%',
  },
  chatBubbleUser: {
    alignSelf: 'flex-end',
    backgroundColor: coachTheme.colors.accentSoft,
  },
  chatBubbleCoach: {
    alignSelf: 'flex-start',
    backgroundColor: coachTheme.colors.surfaceCool,
  },
  chatTextUser: {
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.body,
    fontSize: 12,
  },
  chatTextCoach: {
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
    fontSize: 12,
  },
  chatInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  chatInput: {
    flex: 1,
  },
  sendButton: {
    backgroundColor: coachTheme.colors.teal,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: coachTheme.radius.pill,
  },
  sendButtonText: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '700',
    fontFamily: coachTheme.fonts.heading,
  },
  libraryCard: {
    gap: coachTheme.spacing.sm,
  },
  libraryTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  libraryScene: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  librarySteps: {
    gap: 4,
  },
  libraryStepText: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
  },
  libraryScript: {
    backgroundColor: coachTheme.colors.surfaceWarm,
    borderRadius: coachTheme.radius.md,
    padding: 10,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
  },
  libraryScriptLabel: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  libraryScriptText: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
    marginTop: 4,
  },
  trendSummaryRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  trendSummaryItem: {
    width: '45%',
    backgroundColor: coachTheme.colors.surfaceCool,
    borderRadius: coachTheme.radius.md,
    padding: 10,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
  },
  trendSummaryLabel: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  trendSummaryValue: {
    fontSize: 16,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
    marginTop: 4,
  },
  trendChart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginTop: 12,
  },
  trendBarItem: {
    alignItems: 'center',
    width: 36,
    gap: 6,
  },
  trendBar: {
    width: 12,
    borderRadius: 6,
    backgroundColor: coachTheme.colors.border,
  },
  trendBarActive: {
    backgroundColor: coachTheme.colors.accent,
  },
  trendBarLabel: {
    fontSize: 10,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  trendEmpty: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  trendHint: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
    lineHeight: 18,
  },
  profileCard: {
    gap: coachTheme.spacing.sm,
  },
  profileRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  profileLabel: {
    fontSize: 12,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  profileValue: {
    fontSize: 13,
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  profileHint: {
    fontSize: 12,
    color: coachTheme.colors.textSecondary,
    fontFamily: coachTheme.fonts.body,
    lineHeight: 18,
  },
  profileSourceTitle: {
    fontSize: 13,
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
    marginTop: 6,
  },
  onboarding: {
    flex: 1,
    padding: coachTheme.spacing.lg,
  },
  onboardingHeader: {
    marginBottom: coachTheme.spacing.md,
  },
  onboardingTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: coachTheme.colors.textPrimary,
    fontFamily: coachTheme.fonts.heading,
  },
  onboardingSubtitle: {
    fontSize: 13,
    color: coachTheme.colors.textMuted,
    marginTop: 6,
    fontFamily: coachTheme.fonts.body,
  },
  progressRow: {
    flexDirection: 'row',
    gap: 6,
    marginTop: coachTheme.spacing.sm,
  },
  progressDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: coachTheme.colors.border,
  },
  progressDotActive: {
    backgroundColor: coachTheme.colors.accent,
  },
  onboardingContent: {
    gap: coachTheme.spacing.lg,
    paddingBottom: coachTheme.spacing.lg,
  },
  stepCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: coachTheme.radius.lg,
    padding: coachTheme.spacing.md,
    borderWidth: 1,
    borderColor: coachTheme.colors.border,
    gap: coachTheme.spacing.sm,
  },
  optionGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  optionItem: {
    width: '48%',
    gap: 4,
  },
  optionHint: {
    fontSize: 11,
    color: coachTheme.colors.textMuted,
    fontFamily: coachTheme.fonts.body,
  },
  optionChip: {
    alignSelf: 'flex-start',
  },
  onboardingFooter: {
    marginTop: 'auto',
    gap: 8,
  },
  backLink: {
    alignSelf: 'center',
    paddingVertical: 4,
  },
  backLinkText: {
    color: coachTheme.colors.textSecondary,
    fontSize: 12,
    fontFamily: coachTheme.fonts.body,
  },
});
