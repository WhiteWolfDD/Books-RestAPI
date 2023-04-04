const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

const Discount = sequelize.dbConnect.define('Discount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    percentage: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    bookId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    endsAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: 'discounts',
    timestamps: false
});

module.exports = Discount;