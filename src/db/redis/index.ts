import { createClient } from 'redis';

export const redisClient = createClient();

redisClient.on('error', (err) => {
  console.error('Redis Client Error', err);
});

export async function connectRedis() {
  await redisClient.connect();
}

export async function disconnectRedis() {
  await redisClient.disconnect();
}

export async function addToCache(
  key: string,
  value: string | number,
  durationInSeconds?: number
): Promise<boolean> {
  if (key && value) {
    await redisClient.set(key, value);
    if (durationInSeconds) {
      redisClient.expire(key, durationInSeconds);
    }
    return true;
  } else {
    throw new Error(`Insufficient information! Key can't be null or undefined`);
  }
}

export async function getFromCache(key: string) {
  if (key) {
    const value = await redisClient.get(key);
    return value;
  } else {
    throw new Error('Insufficient information!');
  }
}

export async function removeFromCache(key: string) {
  await redisClient.del(key);
}
