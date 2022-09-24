import {Router} from 'express';
// ======================
import bookControllers from '../controllers/bookControllers';
import {validate} from '../middleware';

const booRouter = new Router();

booRouter.route('/')
.get(bookControllers.getBooks)
.post(validate.validateNewBook, bookControllers.createBook)
.put(validate.validateNewBook, bookControllers.updateBook)

booRouter.route('/:id')
.get(bookControllers.getOneBook)
.patch(validate.validateChangedBook, bookControllers.changeBook)
.delete(bookControllers.deleteBook)


export default booRouter;