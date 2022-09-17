import {Router} from 'express';
// ======================
import bookControllers from '../controllers/bookControllers';

const booRouter = new Router();

booRouter.route('/')
.get(bookControllers.getBooks)
.post(bookControllers.createBook)
.put(bookControllers.updateBook)

booRouter.route('/:id')
.get(bookControllers.getOneBook)
.patch(bookControllers.changeBook)
.delete(bookControllers.deleteBook)


export default booRouter;