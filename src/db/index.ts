import { Sequelize } from 'sequelize-typescript';
import configs from '../config';
import Users from './models/users';
import Employees from './models/employeeProfiles';
import Employers from './models/employerProfile';

const pgConfigs = configs.get('postgres');

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: pgConfigs.host,
  port: pgConfigs.port,
  username: pgConfigs.user,
  password: pgConfigs.password,
  database: pgConfigs.database,
  models: [Users, Employees, Employers]
});
