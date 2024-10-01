import { Column, DataType, Table } from 'sequelize-typescript';
import BaseModel from './baseModel';

@Table({ tableName: 'employee_profiles', underscored: true })
export class Employers extends BaseModel {
  @Column({ type: DataType.INTEGER, allowNull: false, unique: true })
  USER_ID!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  EMPLOYER_TYPE!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  BUSINESS_NAME!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  BUSINESS_LOCATION!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  CONTACT_POINT_NAME!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  CONTACT_POINT_PHONE!: string;

  @Column({ type: DataType.STRING, allowNull: true })
  BIN_NUMBER!: number;

  @Column({ type: DataType.STRING, allowNull: true })
  BUSINESS_CATEGORY!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  BUSINESS_LOGO!: string;

  @Column({ type: DataType.BOOLEAN, allowNull: true })
  VERIFIED_BUSINESS!: boolean;

  @Column({ type: DataType.INTEGER, allowNull: true, defaultValue: 0 })
  TOTAL_REVIEWS!: number;

  @Column({ type: DataType.FLOAT, allowNull: true, defaultValue: 0.0 })
  AVERAGE_RATING!: number;
}

export default Employers;
