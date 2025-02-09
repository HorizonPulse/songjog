import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import configs from '../config';
import { getFromCache } from '../db/redis';
import { cacheKeys } from '../db/redis/cacheKeys';

export function extractAuthorizationToken(req: Request) {
  const authorizationHeader =
    req.get('Authorization') || req.get('X-Access-Token');
  // @ts-ignore
  // console.log('extractAuthorizationToken-auth-header-found', req.id, req.url);
  if (authorizationHeader) {
    return authorizationHeader.replace(/Bearer +/i, '');
  }

  return null;
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = extractAuthorizationToken(req);

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(token, configs.get('jwt.secret'), async (err: any) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      });
    }
    const key = cacheKeys.generateTokenKeys(token);
    const tokenFromRedis = await getFromCache(key);
    if (!tokenFromRedis) {
      return res.status(401).send({
        message: 'Invalid token!'
      });
    }
    req.user = JSON.parse(tokenFromRedis);
    return next();
  });
};
