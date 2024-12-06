import { Router } from 'express';
import { createBook, readBooks, readBook, updateBook, deleteBook } from '../controllers/book.controller.js';
import { authRequired } from '../middlewares/ValidateToken.js';
import { validateBook } from '../middlewares/ValidateBook.js'; 

const router = Router();

router.post('/books',validateBook, createBook);
router.get('/books', readBooks); 
router.get('/books/:id', readBook); 
router.put('/books/:id', validateBook, updateBook); 
router.delete('/books/:id', deleteBook); 

export default router;