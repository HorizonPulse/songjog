import { Sequelize } from 'sequelize-typescript';
import configs from '../config';
import User from './models/users';

const pgConfigs = configs.get('postgres');

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: pgConfigs.host,
  port: pgConfigs.port,
  username: pgConfigs.user,
  password: pgConfigs.password,
  database: pgConfigs.database,
  models: [User]
});
