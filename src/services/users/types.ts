import { Transaction } from 'sequelize';

export enum Sex {
  MALE = 'male',
  FEMALE = 'female',
  DIVERSE = 'diverse'
}

export enum userType {
  ADMIN = 'admin',
  EMPLOYER = 'employer',
  EMPLOYEE = 'employee'
}

export interface SignupInterface {
  FIRST_NAME: string;
  LAST_NAME: string;
  EMAIL: string;
  PASSWORD: string;
  COUNTRY_CODE: string;
  DOB: string;
  GENDER: Sex;
  PHONE_NUMBER: string;
  LOCATION: string;
  THANA_ID: number;
  USER_TYPE: userType;
  tx?: Transaction;
}

export interface UserInterface {
  ID?: number;
  FIRST_NAME: string;
  LAST_NAME: string;
  EMAIL: string;
  COUNTRY_CODE: string;
  PHONE_NUMBER: string;
  HASH: string;
  SALT: string;
  DOB: string;
  GENDER: string;
  LOCATION: string;
  THANA_ID: number;
  USER_TYPE: userType;
  STATUS?: 'active' | 'inactive';
}
