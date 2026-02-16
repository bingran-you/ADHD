import * as SQLite from 'expo-sqlite';
import type { DailyLog, EventEntry } from './types';

let databasePromise: Promise<SQLite.SQLiteDatabase> | null = null;
let initialized = false;

async function getDatabase() {
  if (!databasePromise) {
    databasePromise = SQLite.openDatabaseAsync('coach.db');
  }
  const db = await databasePromise;
  if (!initialized) {
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS daily_logs (
        date TEXT PRIMARY KEY NOT NULL,
        metrics TEXT NOT NULL,
        event TEXT,
        events TEXT,
        completed TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS app_state (
        key TEXT PRIMARY KEY NOT NULL,
        value TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);
    const columns = await db.getAllAsync<{ name: string }>('PRAGMA table_info(daily_logs);');
    const names = columns.map((column) => column.name);
    if (!names.includes('events')) {
      await db.execAsync('ALTER TABLE daily_logs ADD COLUMN events TEXT;');
    }
    if (!names.includes('event')) {
      await db.execAsync('ALTER TABLE daily_logs ADD COLUMN event TEXT;');
    }
    initialized = true;
  }
  return db;
}

export async function saveDailyLog(log: DailyLog) {
  const db = await getDatabase();
  const eventsPayload = JSON.stringify(log.events ?? []);
  const fallbackEvent = log.events?.[0] ?? { type: 'good', triggers: [], note: '' };
  const eventPayload = JSON.stringify(fallbackEvent);
  await db.runAsync(
    `INSERT INTO daily_logs (date, metrics, event, events, completed, created_at)
     VALUES (?, ?, ?, ?, ?, ?)
     ON CONFLICT(date) DO UPDATE SET
       metrics=excluded.metrics,
       event=excluded.event,
       events=excluded.events,
       completed=excluded.completed,
       created_at=excluded.created_at;`,
    [
      log.date,
      JSON.stringify(log.metrics),
      eventPayload,
      eventsPayload,
      JSON.stringify(log.completedTasks),
      log.createdAt,
    ]
  );
}

type DailyLogRow = {
  date: string;
  metrics: string;
  event?: string | null;
  events?: string | null;
  completed: string;
  created_at: number;
};

export async function getLogsSince(startDate: string): Promise<DailyLog[]> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<DailyLogRow>(
    'SELECT date, metrics, event, events, completed, created_at FROM daily_logs WHERE date >= ? ORDER BY date ASC',
    [startDate]
  );
  return rows.map((row) => ({
    date: row.date,
    metrics: JSON.parse(row.metrics) as DailyLog['metrics'],
    events: parseEvents(row.events, row.event),
    completedTasks: JSON.parse(row.completed) as string[],
    createdAt: row.created_at,
  }));
}

export async function getDailyLog(date: string): Promise<DailyLog | null> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<DailyLogRow>(
    'SELECT date, metrics, event, events, completed, created_at FROM daily_logs WHERE date = ? LIMIT 1',
    [date]
  );
  if (!rows.length) return null;
  const row = rows[0];
  return {
    date: row.date,
    metrics: JSON.parse(row.metrics) as DailyLog['metrics'],
    events: parseEvents(row.events, row.event),
    completedTasks: JSON.parse(row.completed) as string[],
    createdAt: row.created_at,
  };
}

function parseEvents(events: string | null | undefined, event: string | null | undefined): EventEntry[] {
  if (events) {
    try {
      const parsed = JSON.parse(events) as Array<Partial<EventEntry>>;
      if (!Array.isArray(parsed)) return [];
      return parsed.map((item, index) => ({
        id: item.id ?? `imported-${index}`,
        createdAt: item.createdAt ?? Date.now(),
        type: item.type === 'hard' ? 'hard' : 'good',
        triggers: Array.isArray(item.triggers) ? item.triggers : [],
        note: item.note ?? '',
      }));
    } catch {
      return [];
    }
  }
  if (event) {
    try {
      const parsed = JSON.parse(event) as Omit<EventEntry, 'id' | 'createdAt'>;
      return [
        {
          id: 'legacy',
          createdAt: Date.now(),
          type: parsed.type === 'hard' ? 'hard' : 'good',
          triggers: Array.isArray(parsed.triggers) ? parsed.triggers : [],
          note: parsed.note ?? '',
        },
      ];
    } catch {
      return [];
    }
  }
  return [];
}

export async function setAppState<T>(key: string, value: T): Promise<void> {
  const db = await getDatabase();
  await db.runAsync(
    `INSERT INTO app_state (key, value, updated_at)
     VALUES (?, ?, ?)
     ON CONFLICT(key) DO UPDATE SET
       value=excluded.value,
       updated_at=excluded.updated_at;`,
    [key, JSON.stringify(value), Date.now()]
  );
}

export async function getAppState<T>(key: string): Promise<T | null> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<{ value: string }>('SELECT value FROM app_state WHERE key = ? LIMIT 1', [key]);
  if (!rows.length) return null;
  try {
    return JSON.parse(rows[0].value) as T;
  } catch {
    return null;
  }
}
