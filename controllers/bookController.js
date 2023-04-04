const {QueryTypes, Op} = require('sequelize');
const {sequelize} = require('../sequelize');
const Book = require('../models/bookModel');
const Author = require('../models/authorModel');
const BookDto = require("../dto/bookDto");
const Category = require("../models/categoryModel");
const Language = require("../models/languageModel");
const Publisher = require("../models/publisherModel");
const ApiException = require("../exceptions/error");

async function keysError(categoryId, languageId, publisherId) {
    const category = await Category.findByPk(categoryId);
    const language = await Language.findByPk(languageId);
    const publisher = await Publisher.findByPk(publisherId);

    if (!category) {
        throw ApiException.notFound('Category not found');
    }
    if (!language) {
        throw ApiException.notFound('Language not found');
    }
    if (!publisher) {
        throw ApiException.notFound('Publisher not found');
    }
}

// Find all books
const getBooks = async (req, res, next) => {
    try {
        const books = await Book.findAll({include: ['category', 'language', 'publisher', 'authors']});
        res.status(200).json(books.map(book => new BookDto(book)));
    } catch (err) {
        next(err);
    }
}

// Find books by category
const getBooksByCategoryId = async (req, res, next) => {
    try {
        const books = await Book.findAll({
            include: ['category', 'language', 'publisher', 'authors'],
            where: {
                'categoryId': req.params.categoryId
            }
        });
        res.status(200).json(books.map(book => new BookDto(book)));
    } catch (err) {
        next(err);
    }
}

const getBooksByAuthorId = async (req, res, next) => {
    try {
        const books = await Book.findAll({
            include: ['category', 'language', 'publisher', {
                model: Author,
                as: 'authors',
                where: {id: req.params.authorId}
            }],

        });
        res.status(200).json(books.map(book => new BookDto(book)));
    } catch (err) {
        next(err);
    }
}

const addBook = async (req, res, next) => {
    try {
        await keysError(req.body.categoryId, req.body.languageId, req.body.publisherId);
        const book = await Book.create(req.body);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
}

const removeBook = async (req, res, next) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({message: 'Book not found'});
        }
        await book.destroy();
        res.status(204).json();
    } catch (err) {
        next(err);
    }
}

const updateBook = async (req, res, next) => {
    try {
        await keysError(req.body.categoryId, req.body.languageId, req.body.publisherId);
        const book = await Book.findByPk(req.params.id);
        if (book === null) {
            return res.status(404).json({message: 'Book not found'});
        }
        await book.update(req.body);
        res.status(200).json(book);
    } catch (err) {
        next(err);
    }
}

module.exports = {
    getBooks,
    getBooksByCategoryId,
    getBooksByAuthorId,
    addBook,
    removeBook,
    updateBook
}