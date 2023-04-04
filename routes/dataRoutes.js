const express = require('express');
const dataController = require('../controllers/bookController');
const router = express.Router();

router.get('/books', dataController.getBooks);
router.get('/books/category/:categoryId', dataController.getBooksByCategoryId);
router.get('/books/author/:authorId', dataController.getBooksByAuthorId);
router.post('/books', dataController.addBook);
router.put('/books/:id', dataController.updateBook);
router.delete('/books/:id', dataController.removeBook);

module.exports = router;