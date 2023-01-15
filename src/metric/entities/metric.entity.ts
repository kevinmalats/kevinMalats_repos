
import { DataTypes, Model } from "sequelize";
import { PostgresSql } from "src/db/database";
import { Repository } from "src/repository/entities/repository.entity";
const _postgres: PostgresSql = new PostgresSql();

export class Metric extends Model  {
  otherPublicField: string;
}
Metric.init({
    // Model attributes are defined here
    id_repository: {
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
            model: 'Repositories',
            key: 'id'
          },
        primaryKey: true
      },
    coverage: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    bugs: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      vulnerabilities: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      hotspot: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    code_smells: {
      type: DataTypes.INTEGER,
       allowNull: false
    }
  }, {
    // Other model options go here
    sequelize: _postgres.sequelize, // We need to pass the connection instance
    modelName: 'Metric' // We need to choose the model name
  });

  Metric.belongsTo(Repository,{foreignKey: 'id_repository', targetKey: 'id'})
  Repository.hasOne(Metric,{foreignKey: 'id_repository', sourceKey: 'id'})
