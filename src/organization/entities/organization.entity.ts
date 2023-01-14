import { DataTypes, Model } from "sequelize";
import { PostgresSql } from "src/repository/database";
const _postgres: PostgresSql = new PostgresSql();

export class Organization extends Model  {
  otherPublicField: string;
}
Organization.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
    sequelize: _postgres.sequelize, // We need to pass the connection instance
    modelName: 'Organization' // We need to choose the model name
  });
