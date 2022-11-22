import Sequelize from 'sequelize';
import connection from '../config/db.js';

const Company = connection.define(
    'company',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        cnpj: {
            type: Sequelize.STRING,
            allowNull: false
        },
        address: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

export default Company;