import { Transaction } from 'sequelize';

export interface SignupInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  username: string;
  countryCode: string;
  dob: string;
  gender: 'male' | 'female' | 'diverse';
  phoneNumber: string;
  tx?: Transaction;
}

export interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  countryCode: string;
  dob: string;
  gender: 'male' | 'female' | 'diverse';
  phoneNumber: string;
  hash: string;
  salt: string;
  status?: 'active' | 'inactive';
}
