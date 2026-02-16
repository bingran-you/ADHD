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
