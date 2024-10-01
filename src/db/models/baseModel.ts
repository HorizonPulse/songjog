import { DataTypes } from 'sequelize';
import { Column, Model } from 'sequelize-typescript';

class BaseModel<
  TModelAttributes extends {} = any,
  TCreationAttributes extends {} = TModelAttributes
> extends Model<TModelAttributes, TCreationAttributes> {
  @Column({
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false
  })
  declare ID: number;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  })
  declare CREATED_AT: Date;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date()
  })
  declare UPDATED_AT: Date;
}

export default BaseModel;
