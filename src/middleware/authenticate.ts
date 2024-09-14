import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import configs from '../config';
import { sequelize } from '../db';

interface DecodedToken {
  id: string;
}

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<any> => {
  const token = req.headers['x-access-token'] as string | undefined;

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    });
  }

  jwt.verify(
    token,
    configs.get('jwt.secret'),
    async (err: any, decoded: any) => {
      if (err) {
        return res.status(401).send({
          message: 'Unauthorized!'
        });
      }
      const isBlackListed = await sequelize.models.TokenBlackList.findOne({
        where: { token }
      });
      if (isBlackListed?.dataValues) {
        return res.status(401).send({
          message: 'Imvalid token!'
        });
      }
      const decodedToken = decoded as DecodedToken;
      req.user = { id: Number(decodedToken.id) };
      return next();
    }
  );
};
