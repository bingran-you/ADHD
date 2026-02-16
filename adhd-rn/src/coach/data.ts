export type ConcernKey = 'attention' | 'transition' | 'emotion' | 'sleep' | 'school' | 'social';

export type Task = {
  id: string;
  title: string;
  summary: string;
  steps: string[];
  durationSec?: number;
  tags?: string[];
};

export const concernOptions: Array<{ key: ConcernKey; label: string; hint: string }> = [
  { key: 'attention', label: '注意力短', hint: '做事难持续、频繁分心' },
  { key: 'transition', label: '过渡困难', hint: '换任务容易抗拒' },
  { key: 'emotion', label: '情绪爆发', hint: '哭闹、争执升级' },
  { key: 'sleep', label: '作息混乱', hint: '入睡难、睡前拖延' },
  { key: 'school', label: '学习组织', hint: '作业启动难、顺序混乱' },
  { key: 'social', label: '社交冲突', hint: '轮流等待、分享困难' },
];

export const triggerOptions = [
  '饥饿',
  '疲劳',
  '被打断',
  '规则冲突',
  '人多嘈杂',
  '改变计划',
  '同伴冲突',
  '期待落空',
];

export const taskBank: Record<ConcernKey | 'core', Task[]> = {
  core: [
    {
      id: 'praise',
      title: '具体表扬 3 次',
      summary: '把孩子做对的事说清楚，让他听到你的肯定。',
      steps: ['说出具体行为', '用眼神/微笑', '强调你为此感到骄傲'],
      tags: ['听得到的表扬'],
    },
    {
      id: 'short-instruction',
      title: '短句指令 + 复述',
      summary: '一次只说一件事，请孩子复述。',
      steps: ['走近并叫名', '短句说出任务', '请孩子复述再开始'],
      tags: ['清晰指令'],
    },
  ],
  attention: [
    {
      id: 'play-10',
      title: '10 分钟高质量游戏',
      summary: '跟随孩子节奏，强化注意力与亲子关系。',
      steps: ['计时 10 分钟', '不纠错、不讲道理', '结束时正向回顾'],
      durationSec: 600,
      tags: ['高质量时间'],
    },
    {
      id: 'focus-game',
      title: '注意力小游戏',
      summary: '配对/西蒙说/我去了超市任选其一。',
      steps: ['选择一个游戏', '设定小目标', '成功立即表扬'],
      tags: ['注意力训练'],
    },
  ],
  transition: [
    {
      id: 'countdown',
      title: '倒计时过渡',
      summary: '提前预告 + 3-2-1 倒计时。',
      steps: ['提前 5 分钟提醒', '倒计时 3-2-1', '过渡后立刻表扬'],
      tags: ['倒计时'],
    },
    {
      id: 'schedule',
      title: '今日 3 段日程',
      summary: '把一天拆成 3 段，简单清晰。',
      steps: ['早/中/晚各一件', '告知可能变化', '完成后打钩'],
      tags: ['连贯日程'],
    },
  ],
  emotion: [
    {
      id: 'calm-space',
      title: '准备安静时间',
      summary: '设定安静角，帮助恢复情绪。',
      steps: ['固定位置与物品', '情绪上来先安静', '冷静后再讨论'],
      tags: ['帮助孩子冷静'],
    },
    {
      id: 'emotion-words',
      title: '情绪词汇练习',
      summary: '用“我感到……”表达。',
      steps: ['父母示范表达', '孩子跟读', '认可情绪再给选择'],
      tags: ['情绪表达'],
    },
  ],
  sleep: [
    {
      id: 'bedtime',
      title: '睡前流程 3 步',
      summary: '固定的顺序让孩子更安心。',
      steps: ['洗漱', '阅读 5 分钟', '关灯回顾好事'],
      tags: ['连贯日程'],
    },
  ],
  school: [
    {
      id: 'scaffold',
      title: '任务分段 + 支架',
      summary: '把作业分成小段，逐步完成。',
      steps: ['先做最容易的一段', '完成就休息 2 分钟', '再做下一段'],
      tags: ['支架式教学'],
    },
  ],
  social: [
    {
      id: 'turn-taking',
      title: '轮流等待小游戏',
      summary: '训练等待与轮流。',
      steps: ['设定轮流规则', '成功等待就表扬', '失败时重来'],
      tags: ['轮流训练'],
    },
  ],
};

export const strategyLibrary = [
  {
    id: 'scaffold',
    title: '支架式教学',
    scene: '孩子容易失败或放弃的任务',
    steps: ['界定能力范围', '从能做到的开始', '一点点加难度', '反复巩固'],
    script: '“我们先做最简单的一步，我在旁边帮你。”',
  },
  {
    id: 'teachable',
    title: '教育时机',
    scene: '日常生活中练习新技能',
    steps: ['在不同场景重复练习', '任务短而清晰', '成功立即表扬'],
    script: '“等会儿在超市我们也练一下刚才的规则。”',
  },
  {
    id: 'earshot',
    title: '听得到的表扬',
    scene: '强化孩子的积极行为',
    steps: ['说出具体行为', '让孩子听见', '配合眼神与微笑'],
    script: '“我刚和爸爸说你今天很有礼貌，我很骄傲。”',
  },
  {
    id: 'schedule',
    title: '连贯日程',
    scene: '减少对变化的焦虑',
    steps: ['提前告知当天安排', '变化要提前提醒', '避免过多信息'],
    script: '“今天就三件事：早上公园，中午午睡，晚上回家。”',
  },
  {
    id: 'rules',
    title: '清晰规则与界限',
    scene: '行为容易越界时',
    steps: ['规则数量少而明确', '张贴可见', '照护者一致执行'],
    script: '“在客厅我们只做两件事：轻声说话、玩具收好。”',
  },
  {
    id: 'countdown',
    title: '倒计时与延迟消退',
    scene: '过渡/等待场景',
    steps: ['提前 5 分钟提醒', '3-2-1 倒计时', '等待时间逐步延长'],
    script: '“还有三分钟，我们马上要收玩具了。”',
  },
  {
    id: 'clear',
    title: '明确指令 + 眼神',
    scene: '孩子听不进指令',
    steps: ['走近并叫名', '保持眼神交流', '简短肯定句'],
    script: '“看着我，现在把鞋子放进柜子。”',
  },
  {
    id: 'short',
    title: '短句指令',
    scene: '指令容易被遗忘',
    steps: ['一次只说一件事', '语速慢一点', '请孩子复述'],
    script: '“请把杯子放在桌上。重复一遍。”',
  },
  {
    id: 'choice',
    title: '二选一策略',
    scene: '抗拒指令时',
    steps: ['提供两种可接受选择', '语气坚定', '选择后立即执行'],
    script: '“你要先刷牙还是先洗脸？”',
  },
  {
    id: 'avoid-conflict',
    title: '避免争吵升级',
    scene: '情绪对抗发生时',
    steps: ['暂停对话', '保持冷静语气', '稍后再讨论'],
    script: '“我需要先冷静一下，等会儿我们再谈。”',
  },
  {
    id: 'parent-calm',
    title: '家长冷静',
    scene: '父母情绪被触发时',
    steps: ['深呼吸 3 次', '降低声音', '先稳定自己'],
    script: '“我现在先慢慢呼吸，让我们都安静下来。”',
  },
  {
    id: 'child-calm',
    title: '帮助孩子冷静',
    scene: '孩子情绪爆发时',
    steps: ['带去安静角', '简短安抚', '冷静后再复盘'],
    script: '“我们先去安静角，等你准备好了再说。”',
  },
];
