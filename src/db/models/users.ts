import { Column, DataType, Table } from 'sequelize-typescript';
import BaseModel from './baseModel';

@Table({ tableName: 'users', underscored: true })
export class Users extends BaseModel {
  @Column({ type: DataType.STRING, allowNull: false })
  first_name!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.TEXT, allowNull: false, unique: true })
  hash!: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  salt!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  username!: string;

  @Column({ type: DataType.STRING, allowNull: false, defaultValue: 'active' })
  status!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  gender!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  dob!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  phone_number!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  country_code!: string;
}

export default Users;
