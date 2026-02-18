export type ConcernKey = 'attention' | 'transition' | 'emotion' | 'sleep' | 'school' | 'social';

export type IntakeOption = {
  id: string;
  label: string;
  hint: string;
};

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

export const positiveFactorOptions = [
  '眼神交流',
  '听得到的夸奖',
  '高质量时间',
  '连贯的日程',
  '倒计时',
  '使用短句',
  '两个选项',
  '安静时间',
];

export const triggerOptions = [
  '饥饿',
  '疲惫/困倦',
  '无聊',
  '过度刺激/噪音大',
  '日程改变/计划变动',
  '被打断/突然换任务',
  '同伴/手足玩久后争抢',
  '玩具被拿走/分配不公平',
];

export const intakeAOptions: IntakeOption[] = [
  { id: 'A01', label: '注意力难持续', hint: '做事容易走神、半途而废' },
  { id: 'A02', label: '任务中断/频繁跳转', hint: '一项没做完就换另一项' },
  { id: 'A03', label: '启动困难', hint: '被要求后迟迟不开始' },
  { id: 'A04', label: '完成困难', hint: '需要多次提醒才能完成' },
  { id: 'A05', label: '多步指令记不住', hint: '两步以上容易忘或做漏' },
  { id: 'A06', label: '听到不执行', hint: '叫名或说话后反应慢/不回应' },
  { id: 'A07', label: '冲动打断', hint: '抢话、插话、打断别人' },
  { id: 'A08', label: '冲动动作', hint: '抢东西、离座、突然冲动' },
  { id: 'A09', label: '坐立不安/多动', hint: '需要安静时仍不停动' },
  { id: 'A10', label: '等待困难', hint: '排队/轮流时明显不耐烦' },
  { id: 'A11', label: '规则抑制困难', hint: '被要求停下仍继续' },
  { id: 'A12', label: '组织与顺序混乱', hint: '早晚流程常丢三落四' },
];

export const intakeBOptions: IntakeOption[] = [
  { id: 'B01', label: '情绪起伏大', hint: '一天内情绪变化明显' },
  { id: 'B02', label: '发脾气/哭闹频繁', hint: '经常情绪失控' },
  { id: 'B03', label: '情绪持续时间长', hint: '爆发后很久才能平复' },
  { id: 'B04', label: '反应强烈', hint: '对小事反应过激' },
  { id: 'B05', label: '对改变/被打断敏感', hint: '计划改变容易爆发' },
  { id: 'B06', label: '冷静恢复慢', hint: '需要很久或多次安抚' },
  { id: 'B07', label: '对抗/争执升级', hint: '顶嘴、拉扯升级' },
  { id: 'B08', label: '攻击/破坏行为', hint: '打人、踢人、砸物等' },
  { id: 'B09', label: '低落/自责', hint: '说消极话或情绪低落' },
  { id: 'B10', label: '需要成人帮助冷静', hint: '很难自行平复' },
];

export const intakeCOptions: IntakeOption[] = [
  { id: 'C01', label: '眼神交流少', hint: '对话时难维持眼神' },
  { id: 'C02', label: '指令理解慢/需重复', hint: '常需要再说一遍' },
  { id: 'C03', label: '表达需求困难', hint: '不太会用完整句子表达' },
  { id: 'C04', label: '情绪表达困难', hint: '说不清自己感受' },
  { id: 'C05', label: '轮流等待/分享困难', hint: '游戏或对话中不易轮流' },
  { id: 'C06', label: '侵入他人空间', hint: '靠太近、打扰他人' },
  { id: 'C07', label: '同伴冲突多', hint: '朋友关系容易紧张' },
  { id: 'C08', label: '说话音量大/打断', hint: '常插话或声音过大' },
];

export const intakeDOptions: IntakeOption[] = [
  { id: 'D01', label: '入睡困难/睡前拖延', hint: '上床后很久睡不着' },
  { id: 'D02', label: '夜醒/早醒频繁', hint: '夜间不稳定' },
  { id: 'D03', label: '早晚流程拖拉', hint: '起床/睡前需要反复催促' },
  { id: 'D04', label: '吃饭坐不住', hint: '用餐中频繁离座' },
  { id: 'D05', label: '偏食/挑食', hint: '只吃少数食物或零食' },
  { id: 'D06', label: '自理任务困难', hint: '穿衣刷牙收拾需要帮助' },
  { id: 'D07', label: '对日程变化敏感', hint: '计划改变容易不安' },
  { id: 'D08', label: '需要放松活动才能安静', hint: '音乐/阅读/安静角有帮助' },
];

export const intakeEOptions: IntakeOption[] = [
  { id: 'E01', label: '游戏难持续', hint: '很快就换活动' },
  { id: 'E02', label: '游戏轮流/等待困难', hint: '轮到他时难以等待' },
  { id: 'E03', label: '游戏规则难遵守', hint: '容易改规则或中断' },
  { id: 'E04', label: '输赢反应强烈', hint: '输赢后情绪波动大' },
  { id: 'E05', label: '阅读/讲故事注意力短', hint: '读书时很快分心' },
  { id: 'E06', label: '记忆类游戏吃力', hint: '配对/“我去了超市”等困难' },
  { id: 'E07', label: '学习组织困难', hint: '作业启动难、顺序混乱' },
  { id: 'E08', label: '想象/角色扮演较少', hint: '参与度低或很快中断' },
];

export const intakeFOptions: IntakeOption[] = [
  { id: 'F01', label: '出门准备拖延/抗拒', hint: '提前告知仍不配合' },
  { id: 'F02', label: '排队等待困难', hint: '排队时明显不耐烦' },
  { id: 'F03', label: '公共场合易失控', hint: '在外更容易吵闹或发作' },
  { id: 'F04', label: '嘈杂环境易烦躁', hint: '超市/商场更容易崩溃' },
  { id: 'F05', label: '外出爆发情绪', hint: '外出时哭闹/发脾气' },
  { id: 'F06', label: '奖励预告仍难配合', hint: '提前说奖励也不容易完成' },
  { id: 'F07', label: '学校坐定困难', hint: '课堂上难以安坐' },
  { id: 'F08', label: '课堂规则执行差', hint: '学校规则容易违反' },
  { id: 'F09', label: '同伴冲突多', hint: '与同伴冲突频繁' },
  { id: 'F10', label: '过渡焦虑明显', hint: '上学/换班/转场焦虑' },
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
