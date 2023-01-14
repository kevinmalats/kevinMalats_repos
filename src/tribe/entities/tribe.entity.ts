import { DataTypes, Model } from "sequelize";
import { PostgresSql } from "src/db/database";
const _postgres: PostgresSql = new PostgresSql();

export class Tribe extends Model  {
  otherPublicField: string;
}
Tribe.init({
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
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id_organization: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {        
          model: 'Organizations',
          key: 'id'
        }
      }
  }, {
    // Other model options go here
    sequelize: _postgres.sequelize, // We need to pass the connection instance
    modelName: 'Tribe' // We need to choose the model name
  });
