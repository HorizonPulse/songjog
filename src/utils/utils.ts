import { Transaction } from 'sequelize';
import { sequelize } from '../databases/db';

export async function createOrReturnTransaction<T>(
  transaction: Transaction | null | undefined,
  callback: (transaction: Transaction) => Promise<T>
): Promise<T> {
  if (transaction) {
    return callback(transaction);
  }
  return sequelize.transaction((tx) => callback(tx));
}

export function getExpTimestamp(seconds: number) {
  const currentTimeMillis = Date.now();
  const secondsIntoMillis = seconds * 1000;
  const expirationTimeMillis = currentTimeMillis + secondsIntoMillis;

  return Math.floor(expirationTimeMillis / 1000);
}

export function createSequelizeFilter(obj: Record<string, any>) {
  const filter = Object.keys(obj).reduce((acc: Record<string, any>, key) => {
    if (obj[key] !== null && obj[key] !== undefined) {
      if (typeof obj[key] === 'object') {
        if (
          Object.values(obj[key]).every((v) => v !== null && v !== undefined)
        ) {
          acc[key] = obj[key];
          return acc;
        }
        return acc;
      }
      acc[key] = obj[key];
    }
    return acc;
  }, {});

  if (!Object.values(filter).length) {
    return {};
  }

  return filter;
}

export function uniqueBulkId(uniqueId: string | number) {
  const uniqueTime = new Date().getTime().toString(36);
  return uniqueId ? uniqueTime.concat('-', uniqueId.toString(36)) : uniqueTime;
}
