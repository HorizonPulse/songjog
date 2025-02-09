import { Transaction } from 'sequelize';
import { sequelize } from '../../db';

export const fetchEmployeeByUserId = async (
  userId: number,
  transaction?: Transaction
) => {
  const data = await sequelize.models.Employees.findOne({
    where: {
      USER_ID: userId
    },
    raw: true,
    transaction
  });
  return data;
};
