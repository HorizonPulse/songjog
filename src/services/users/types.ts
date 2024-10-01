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
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  countryCode: string;
  dob: string;
  gender: Sex;
  phoneNumber: string;
  location: string;
  thanaId: number;
  userType: userType;
  tx?: Transaction;
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  countryCode: string;
  dob: string;
  gender: Sex;
  phoneNumber: string;
  hash: string;
  salt: string;
  location: string;
  thanaId: number;
  userType: userType;
  status?: 'active' | 'inactive';
}
