import Sequelize from 'sequelize';
import connection from '../config/db.js';
import User from '../models/User.js';
import Company from './Company.js';

const Model = connection.define(
    'model',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        idCompany: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'companies',
                key: 'id'
            }
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        age: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

Model.belongsTo(Company, {
    foreignKey: 'idCompany'
  });
Model.belongsTo(User, {
    foreignKey: 'idUser'
  });

export default Model;