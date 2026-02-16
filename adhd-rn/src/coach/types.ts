export type MetricKey = 'attention' | 'mood' | 'transition' | 'parentCalm' | 'sleep';

export type MetricsState = Record<MetricKey, number>;

export type EventDraft = {
  type: 'good' | 'hard';
  triggers: string[];
  note: string;
};

export type EventEntry = EventDraft & {
  id: string;
  createdAt: number;
};

export type DailyLog = {
  date: string;
  metrics: MetricsState;
  events: EventEntry[];
  completedTasks: string[];
  createdAt: number;
};
