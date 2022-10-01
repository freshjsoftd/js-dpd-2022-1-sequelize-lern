import {Router} from 'express';
// ======================
import bookControllers from '../controllers/bookControllers';
import {validate, pagination, upload} from '../middleware';

const booRouter = new Router();

booRouter.route('/')
.get(pagination.paginationBooks, bookControllers.getBooks)
.post(validate.validateNewBook, bookControllers.createBook)
.put(validate.validateNewBook, bookControllers.updateBook)

booRouter.route('/:id')
.get(bookControllers.getOneBook)
.patch(validate.validateChangedBook, bookControllers.changeBook)
.delete(bookControllers.deleteBook)

booRouter.route('/:id/images')
.patch(upload.uploadBookImage.single('bookImage'), bookControllers.addImage)


export default booRouter;