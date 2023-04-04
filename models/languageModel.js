const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Language = sequelize.dbConnect.define('Language', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    language: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'languages',
    timestamps: false
});

module.exports = Language;