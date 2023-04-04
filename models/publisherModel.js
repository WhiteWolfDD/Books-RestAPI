const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Publisher = sequelize.dbConnect.define('Publisher', {
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
    tableName: 'publishers',
    timestamps: false
});

module.exports = Publisher;