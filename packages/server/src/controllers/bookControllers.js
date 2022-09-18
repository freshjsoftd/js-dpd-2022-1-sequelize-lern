import createError from 'http-errors';
import { Book, sequelize } from '../db/models';

class BookController {
	async getBooks(req, res, next) {
		try {
			const allBooks = await Book.findAll({ raw: true });
			if (allBooks) {
				console.log(`Result is: ${JSON.stringify(allBooks, null, 2)}`);
				res.status(200).json(allBooks);
			} else {
				// res.status(404).send(`Any books hasn't been found`)
				next(createError(404, `Any books hasn't been found`));
			}
		} catch (error) {
			next(error);
			console.log(error.message);
		}
	}

	async getOneBook(req, res, next) {
		try {
			const id = req.params.id;
			const bookByPk = await Book.findByPk(id, { raw: true });
			if (bookByPk) {
				console.log(`Result is: ${JSON.stringify(bookByPk, null, 2)}`);
				res.status(200).json(bookByPk);
			} else {
				// res.status(404).send(`Book not found`)
				next(createError(404, `Book not found`));
			}
		} catch (error) {
			console.log(error.message);
			next(error);
		}
	}

	async createBook(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const createdBook = await Book.create(body, { transaction: t });
			if (createdBook) {
				console.log(JSON.stringify(createdBook, null, 2));
				res.status(200).json(createdBook);
			} else {
				// res.status(404).send(`Book not found`);
				next(createError(404, `Book not found`));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			console.log(error.message);
			next(error);
		}
	}
	async updateBook(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const body = req.body;
			const updatedBook = await Book.update(body, {
				transaction: t,
				where: {
					id: body.id,
				},
				returning: ['title'],
				raw: true,
				// fields: ['description']
			});
			if (updatedBook) {
				console.log(JSON.stringify(updatedBook, null, 2));
				res.status(200).json(updatedBook);
			} else {
				next(createError(404, 'Not Found'));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			console.log(error.message);
			next(error);
		}
	}
	async changeBook(req, res, next) {
		const t = await sequelize.transaction();
		try {
			const {
				params: { id },
				body,
			} = req;
			const [rowsCount, [updatedBook]] = await Book.update(body, {
				where: {
					id,
				},
				raw: true,
				returning: true,
				transaction: t,
			});
			if (rowsCount > 0) {
				console.log(updatedBook);
				res.status(200).json(updatedBook);
			} else {
				console.log('Not Found');
				next(createError(404, 'Not Found'));
			}
			t.commit();
		} catch (error) {
			t.rollback();
			console.log(error.message);
			next(error);
		}
	}
	async deleteBook(req, res, next) {
		const t = await sequelize.transaction();
		try {
      const id = req.params.id;
      const deleteBook = await Book.destroy({
        where: {
          id
        }
      });
      if(deleteBook){
        res.send(res.statusCode)
      }else{
        next(createError(404, 'Book not found'))
      }
			t.commit();
		} catch (error) {
			t.rollback();
			console.log(error.message);
			next(error);
		}
	}
}

export default new BookController();
