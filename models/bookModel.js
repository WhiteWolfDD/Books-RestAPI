const { DataTypes } = require('sequelize');
const sequelize = require('../sequelize');
const Category = require("./categoryModel");
const Language = require("./languageModel");
const Publisher = require("./publisherModel");
const Author = require("./authorModel");
const ApiException = require("../exceptions/error");

const Book = sequelize.dbConnect.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    publicationDate: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    edition: {
        type: DataTypes.SMALLINT,
        allowNull: true
    },
    languageId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Language,
            key: 'id'
        },
        validate: {
            notEmpty: true
        }
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Category,
            key: 'id'
        },
        validate: {
            notEmpty: true
        }
    },
    length: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    width: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    height: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    pages: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    publisherId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: Publisher,
            key: 'id'
        }
    },
    weight: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
    tableName: 'books',
    timestamps: false
});

Book.belongsTo(Language, { foreignKey: 'languageId', as: 'language' });
Book.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });
Book.belongsTo(Publisher, { foreignKey: 'publisherId', as: 'publisher' });
Book.belongsToMany(Author, { through: 'bookauthors', as: 'authors' });

module.exports = Book;