const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Category = sequelize.dbConnect.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    parentId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    tableName: 'categories',
    timestamps: false
});

module.exports = Category;