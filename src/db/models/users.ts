import { Column, DataType, Table } from 'sequelize-typescript';
import BaseModel from './baseModel';

@Table({ tableName: 'users' })
export class Users extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  PHONE_NUMBER!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  COUNTRY_CODE!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  USER_TYPE!: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'active' })
  STATUS!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  FIRST_NAME!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  LAST_NAME!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  EMAIL!: string;

  @Column({ type: DataType.TEXT, allowNull: false, unique: true })
  HASH!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  SALT!: string;

  @Column({ type: DataType.TEXT, allowNull: true, unique: true })
  PHOTO!: string;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  LOCATION!: string;

  @Column({ type: DataType.INTEGER, allowNull: true, unique: true })
  THANA_ID!: number;

  @Column({ type: DataType.STRING, allowNull: true, unique: true })
  NID!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  DATE_OF_BIRTH!: Date;

  @Column({ type: DataType.STRING, allowNull: false })
  GENDER!: string;
}

export default Users;
