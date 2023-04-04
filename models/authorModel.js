const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Author = sequelize.dbConnect.define('Author', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'authors',
    timestamps: false
});

module.exports = Author;