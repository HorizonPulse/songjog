import { Column, DataType, Table } from 'sequelize-typescript';
import BaseModel from './baseModel';

@Table({ tableName: 'employee_profiles' })
export class Employees extends BaseModel {
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  USER_ID!: number;

  @Column({ type: DataType.INTEGER, allowNull: true })
  JOB_PREFER_DISTRICT_ID!: number;

  @Column({ type: DataType.TEXT, allowNull: true })
  JOB_INTEREST!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  EDUCATION_DEGREE!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  EDUCATION_INSTITUTION!: string;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  TOTAL_REVIEWS!: number;

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0.0 })
  AVERAGE_RATING!: number;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  BIRTH_CERTIFICATE!: string;

  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  IS_VERIFIED!: boolean;
}

export default Employees;
