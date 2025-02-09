import { Model, Transaction } from 'sequelize';
import { UserInterface } from './types';
import { sequelize } from '../../db';

export const fetchUserByEmail = async (
  email: string,
  transaction?: Transaction
) => {
  const user: Model<
    UserInterface
  > | null = await sequelize.models.Users.findOne({
    where: {
      EMAIL: email
    },
    transaction
  });
  return user?.dataValues;
};

export const fetchUserByUserId = async (
  userId: number,
  transaction?: Transaction
) => {
  const data = await sequelize.models.Users.findOne({
    where: {
      ID: userId
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
      FIRST_NAME: data.FIRST_NAME,
      LAST_NAME: data.LAST_NAME,
      EMAIL: data.EMAIL,
      HASH: data.HASH,
      SALT: data.SALT,
      DOB: data.DOB,
      GENDER: data.GENDER,
      PHONE_NUMBER: data.PHONE_NUMBER,
      COUNTRY_CODE: data.COUNTRY_CODE,
      USER_TYPE: data.USER_TYPE
    },
    { transaction }
  );
  return user.dataValues;
};
