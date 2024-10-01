import { Model, Transaction } from 'sequelize';
import { UserInterface } from './types';
import { sequelize } from '../../db';

export const fetchUserByEmail = async (
  email: string,
  transaction?: Transaction
) => {
  const user: Model<{
    id: number;
    hash: string;
    salt: string;
  }> | null = await sequelize.models.Users.findOne({
    where: {
      email
    },
    transaction
  });
  return user?.dataValues;
};

export const fetchUserByUserName = async (
  username: string,
  transaction?: Transaction
) => {
  const data = await sequelize.models.Users.findOne({
    where: {
      username
    },
    raw: true,
    transaction
  });
  return data;
};

export const fetchUserByUserId = async (
  userId: number,
  transaction?: Transaction
) => {
  const data = await sequelize.models.Users.findOne({
    where: {
      id: userId
    },
    transaction
  });
  return data?.dataValues;
};

export const createUser = async (
  data: UserInterface,
  transaction: Transaction
) => {
  const user = await sequelize.models.Users.create(
    {
      FIRST_NAME: data.firstName,
      LAST_NAME: data.lastName,
      EMAIL: data.email,
      HASH: data.hash,
      SALT: data.salt,
      DOB: data.dob,
      GENDER: data.gender,
      PHONE_NUMBER: data.phoneNumber,
      COUNTRY_CODE: data.countryCode
    },
    { transaction }
  );
  return user.dataValues;
};
