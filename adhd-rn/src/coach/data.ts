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
  '疲惫',
  '情绪变化',
  '日程安排改变',
  '改变任务',
  '和朋友玩太久',
  '游戏太吵',
  '觉得不公平',
];

export const intakeAOptions: IntakeOption[] = [
  { id: 'A01', label: '注意力持续时长', hint: '单一活动能持续专注多久（不离开、不明显分心）' },
  { id: 'A02', label: '分心次数', hint: '活动中被外界刺激打断次数' },
  { id: 'A03', label: '任务中断/跳转', hint: '从一项活动转到另一项且未完成' },
  { id: 'A04', label: '任务启动延迟', hint: '从指令到开始行动的时间' },
  { id: 'A05', label: '任务完成率', hint: '指定任务完成情况' },
  { id: 'A06', label: '需要提示次数', hint: '完成任务中提醒次数' },
  { id: 'A07', label: '短时记忆/指令容量', hint: '能记住并执行的指令数量' },
  { id: 'A08', label: '听后执行一致性', hint: '被叫名/被说话时是否能回应' },
  { id: 'A09', label: '冲动插话', hint: '他人说话时打断次数' },
  { id: 'A10', label: '冲动动作/跑开', hint: '抢东西、离座、冲出等' },
  { id: 'A11', label: '多动/坐立不安', hint: '需要安静场合的扭动/起立' },
  { id: 'A12', label: '说话过多/吵闹', hint: '从早到晚不停说/噪音多' },
  { id: 'A13', label: '等待耐受时长', hint: '在提示下能等待的最长时间' },
  { id: 'A14', label: '轮流等待成功率', hint: '游戏或对话中轮流情况' },
  { id: 'A15', label: '过渡适应', hint: '有倒计时提示时过渡成功率' },
  { id: 'A16', label: '时间知觉/估时', hint: '估计完成时间与实际差' },
  { id: 'A17', label: '组织/顺序执行', hint: '早晚流程/任务顺序完成度' },
  { id: 'A18', label: '规则抑制能力', hint: '被要求停止时能否停止' },
];

export const intakeBOptions: IntakeOption[] = [
  { id: 'B01', label: '情绪波动幅度', hint: '一天/一周内情绪起伏大小' },
  { id: 'B02', label: '发脾气/崩溃次数', hint: '情绪失控（哭闹、尖叫等）次数' },
  { id: 'B03', label: '单次持续时长', hint: '每次情绪爆发持续多久' },
  { id: 'B04', label: '强度等级', hint: '情绪爆发强度' },
  { id: 'B05', label: '主要触发源', hint: '饥饿/疲劳/改变/被打断等' },
  { id: 'B06', label: '冷静恢复时间', hint: '从爆发到恢复平稳的时间' },
  { id: 'B07', label: 'Quiet time 有效性', hint: '使用后是否明显缓和' },
  { id: 'B08', label: 'Time out 使用次数', hint: '作为最后手段的使用频率' },
  { id: 'B09', label: '攻击/破坏行为', hint: '打人、咬人、踢、砸物等' },
  { id: 'B10', label: '对抗/争吵升级', hint: '与父母争执升级次数' },
  { id: 'B11', label: '低自尊/自责', hint: '常哭、说“没人喜欢我”等' },
  { id: 'B12', label: '情绪表达方式', hint: '能否用语言表达情绪' },
  { id: 'B13', label: '情绪成熟度', hint: '与同龄相比的情绪成熟' },
  { id: 'B14', label: '焦虑/担心表现', hint: '担心、紧张、退缩等' },
  { id: 'B15', label: '敏感度/易怒', hint: '被小事激惹且反应强烈' },
  { id: 'B16', label: '自我冷静意识', hint: '是否能主动要求安静时间/冷静' },
  { id: 'B17', label: '抱怨/哀鸣频率', hint: '不断抱怨、想要更多' },
];

export const intakeCOptions: IntakeOption[] = [
  { id: 'C01', label: '眼神交流稳定性', hint: '被要求时能维持眼神交流' },
  { id: 'C02', label: '指令复述正确率', hint: '让孩子复述指令的准确度' },
  { id: 'C03', label: '语言理解难度', hint: '是否常需要重复/解释' },
  { id: 'C04', label: '语言表达长度', hint: '能否用完整句子表达需求/感受' },
  { id: 'C05', label: '情绪词汇', hint: '能使用的情绪词数量' },
  { id: 'C06', label: '语气与音量', hint: '说话是否过大/过小/合适' },
  { id: 'C07', label: '礼貌表达', hint: '请、谢谢、道歉的使用频率' },
  { id: 'C08', label: '分享与借用', hint: '是否愿意共享或借玩具' },
  { id: 'C09', label: '个人空间', hint: '是否经常侵犯他人空间' },
  { id: 'C10', label: '同伴互动质量', hint: '正向互动次数 vs 冲突次数' },
  { id: 'C11', label: '朋友维持情况', hint: '是否被邀请/能维持友谊' },
  { id: 'C12', label: '“我”表达', hint: '是否能用“我感到……”表达' },
];

export const intakeDOptions: IntakeOption[] = [
  { id: 'D01', label: '作息规律度', hint: '按计划完成早晚流程比例' },
  { id: 'D02', label: '入睡时间', hint: '上床到入睡的时间' },
  { id: 'D03', label: '夜醒/早醒次数', hint: '夜间醒来或过早醒来次数' },
  { id: 'D04', label: '早晚流程完成', hint: '起床/睡前流程完成度' },
  { id: 'D05', label: '用餐结构化', hint: '是否按餐次进食而非频繁零食' },
  { id: 'D06', label: '偏食/挑食', hint: '对食物的挑剔程度' },
  { id: 'D07', label: '吃饭坐稳时长', hint: '用餐时能坐着的时间' },
  { id: 'D08', label: '自理任务', hint: '穿衣、刷牙、收拾等完成度' },
  { id: 'D09', label: '放松/安静活动', hint: '音乐、阅读、泡澡、按摩等' },
  { id: 'D10', label: '对变化的反应', hint: '计划改变时的情绪反应' },
];

export const intakeEOptions: IntakeOption[] = [
  { id: 'E01', label: '亲子高质量时间', hint: '每日一起玩/阅读/交流的时间' },
  { id: 'E02', label: '游戏专注时长', hint: '在游戏中保持参与的时长' },
  { id: 'E03', label: '轮流等待', hint: '游戏中轮流等待情况' },
  { id: 'E04', label: '视觉记忆表现', hint: '配对/百宝袋等游戏表现' },
  { id: 'E05', label: '听觉记忆表现', hint: '“我去了超市/动物园”等' },
  { id: 'E06', label: '规则遵守', hint: '游戏过程中遵守规则情况' },
  { id: 'E07', label: '输赢情绪', hint: '输赢后的情绪反应强度' },
  { id: 'E08', label: '阅读互动', hint: '讲故事时能回答“发生了什么”' },
  { id: 'E09', label: '语言扩展', hint: '描述画面/情节并延续对话' },
  { id: 'E10', label: '注意力游戏覆盖', hint: '本周进行的游戏种类' },
  { id: 'E11', label: '学习困难提示', hint: '阅读/写字/数学学习的困难程度' },
  { id: 'E12', label: '任务持续时长', hint: '拼图/绘画/涂色等持续时间' },
  { id: 'E13', label: '角色扮演/想象游戏', hint: '角色扮演/假装游戏参与度' },
];

export const intakeFOptions: IntakeOption[] = [
  { id: 'F01', label: '外出准备配合', hint: '提前告知后是否配合收拾出门' },
  { id: 'F02', label: '公共场合规则', hint: '外出是否遵守规则（不乱跑/不吵闹）' },
  { id: 'F03', label: '排队等待', hint: '排队等候时的耐受情况' },
  { id: 'F04', label: '嘈杂环境耐受', hint: '超市/商场等环境情绪稳定度' },
  { id: 'F05', label: '外出爆发次数', hint: '外出时情绪失控次数' },
  { id: 'F06', label: '外出奖励响应', hint: '有奖励预告时的配合度' },
  { id: 'F07', label: '公共场合冷静', hint: '是否使用放松/安静方法' },
  { id: 'F08', label: '学校坐定时长', hint: '能坐着完成课堂/作业的时间' },
  { id: 'F09', label: '课堂规则遵守', hint: '学校规则执行情况' },
  { id: 'F10', label: '同伴冲突', hint: '学校/外出与同伴冲突次数' },
  { id: 'F11', label: '过渡焦虑', hint: '上学/转学/换班时焦虑程度' },
  { id: 'F12', label: '上学准备清单', hint: '安静坐、正确请求玩具、接送人记忆、提示条使用' },
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
