const {Router} = require('express');
// ======================
const bookControllers = require('../controllers/bookControllers');
const {validate, pagination, upload} = require('../middleware');

const bookRouter = new Router();
clearImmediate
bookRouter.route('/')
.get(pagination.paginationBooks, bookControllers.getBooks)
.post(validate.validateNewBook, bookControllers.createBook)
.put(validate.validateNewBook, bookControllers.updateBook)

bookRouter.route('/:id')
.get(bookControllers.getOneBook)
.patch(validate.validateChangedBook, bookControllers.changeBook)
.delete(bookControllers.deleteBook)

bookRouter.route('/:id/images')
.patch(upload.uploadBookImage.single('bookImage'), bookControllers.addImage)


module.exports = bookRouter;