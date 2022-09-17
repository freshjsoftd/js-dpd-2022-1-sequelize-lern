import {Book, sequelize} from '../db/models';

class BookController {
  async getBooks(req, res, next){
    try {
      const allBooks = await Book.findAll({raw: true});
      if(allBooks){
        console.log(`Result is: ${JSON.stringify(allBooks, null, 2)}`);
        res.status(200).json(allBooks);
      }else{
        res.status(404).send(`Any books hasn't been found`)
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  async getOneBook(req, res, next){
    try {
      const id = req.params.id
      const bookByPk = await Book.findByPk(id, {raw: true});
      if(bookByPk){
        console.log(`Result is: ${JSON.stringify(bookByPk, null, 2)}`);
        res.status(200).json(bookByPk);
      }else{
        res.status(404).send(`Book not found`)
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  
  async createBook(req, res, next){
    try {
      
    } catch (error) {
      console.log(error.message);
    }
  }
  async updateBook(req, res, next){
    try {
      
    } catch (error) {
      console.log(error.message);
    }
  }
  async changeBook(req, res, next){
    try {
      
    } catch (error) {
      console.log(error.message);
    }
  }
  async deleteBook(req, res, next){
    try {
      
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default new BookController