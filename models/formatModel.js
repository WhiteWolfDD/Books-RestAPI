const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Format = sequelize.dbConnect.define('Format', {
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
    tableName: 'formats',
    timestamps: false
});

module.exports = Format;