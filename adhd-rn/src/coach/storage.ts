import * as SQLite from 'expo-sqlite';
import type { DailyLog } from './types';

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
        event TEXT NOT NULL,
        completed TEXT NOT NULL,
        created_at INTEGER NOT NULL
      );
      CREATE TABLE IF NOT EXISTS app_state (
        key TEXT PRIMARY KEY NOT NULL,
        value TEXT NOT NULL,
        updated_at INTEGER NOT NULL
      );
    `);
    initialized = true;
  }
  return db;
}

export async function saveDailyLog(log: DailyLog) {
  const db = await getDatabase();
  await db.runAsync(
    `INSERT INTO daily_logs (date, metrics, event, completed, created_at)
     VALUES (?, ?, ?, ?, ?)
     ON CONFLICT(date) DO UPDATE SET
       metrics=excluded.metrics,
       event=excluded.event,
       completed=excluded.completed,
       created_at=excluded.created_at;`,
    [
      log.date,
      JSON.stringify(log.metrics),
      JSON.stringify(log.event),
      JSON.stringify(log.completedTasks),
      log.createdAt,
    ]
  );
}

type DailyLogRow = {
  date: string;
  metrics: string;
  event: string;
  completed: string;
  created_at: number;
};

export async function getLogsSince(startDate: string): Promise<DailyLog[]> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<DailyLogRow>(
    'SELECT date, metrics, event, completed, created_at FROM daily_logs WHERE date >= ? ORDER BY date ASC',
    [startDate]
  );
  return rows.map((row) => ({
    date: row.date,
    metrics: JSON.parse(row.metrics) as DailyLog['metrics'],
    event: JSON.parse(row.event) as DailyLog['event'],
    completedTasks: JSON.parse(row.completed) as string[],
    createdAt: row.created_at,
  }));
}

type AppStateRow = {
  value: string;
};

export async function setAppState<T>(key: string, value: T) {
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
  const row = await db.getFirstAsync<AppStateRow>('SELECT value FROM app_state WHERE key = ? LIMIT 1', [
    key,
  ]);
  if (!row?.value) return null;
  try {
    return JSON.parse(row.value) as T;
  } catch (error) {
    console.warn('[storage] Failed to parse app_state', key, error);
    return null;
  }
}
