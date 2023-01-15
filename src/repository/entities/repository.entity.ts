import { DataTypes, Model } from "sequelize";
import { Tribe } from "src/tribe/entities/tribe.entity";
import { PostgresSql } from "src/db/database";
const _postgres: PostgresSql = new PostgresSql();

export class Repository extends Model  {
  otherPublicField: string;
}
Repository.init({
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
    state: {
      type: DataTypes.CHAR,
      allowNull: false
    },
    status: {
        type: DataTypes.CHAR,
        allowNull: false
      },
    id_tribe: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {       
          model: 'Tribes',
          key: 'id'
        }
      }
  }, {
    // Other model options go here
    sequelize: _postgres.sequelize, // We need to pass the connection instance
    modelName: 'Repository' // We need to choose the model name
  },
  );
 
  Tribe.hasMany(Repository,{foreignKey: 'id_tribe', sourceKey: 'id'})
  Repository.belongsTo(Tribe,{foreignKey: 'id_tribe', targetKey: 'id'})