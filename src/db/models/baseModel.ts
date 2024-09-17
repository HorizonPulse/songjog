import { DataTypes } from "sequelize";
import { Column, Model } from "sequelize-typescript";

class BaseModel<
  TModelAttributes extends {} = any,
  TCreationAttributes extends {} = TModelAttributes
> extends Model<TModelAttributes, TCreationAttributes> {
  @Column({
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
  })
  declare id: number;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  })
  declare created_at: Date;

  @Column({
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: new Date(),
  })
  declare updated_at: Date;
}

export default BaseModel;
