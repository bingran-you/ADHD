export type MetricKey = 'attention' | 'mood' | 'transition' | 'parentCalm' | 'sleep';

export type MetricsState = Record<MetricKey, number>;

export type EventState = {
  type: 'good' | 'hard';
  triggers: string[];
  note: string;
};

export type DailyLog = {
  date: string;
  metrics: MetricsState;
  event: EventState;
  completedTasks: string[];
  createdAt: number;
};
