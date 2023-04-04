const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Condition = sequelize.dbConnect.define('Condition', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'conditions',
    timestamps: false
});

module.exports = Condition;