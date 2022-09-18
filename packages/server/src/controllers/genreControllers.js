import createError from 'http-errors';

import {Genre, sequelize} from '../db/models';

class GenreController {
  async getGenres(req, res, next) {
    try {
      const allGenres = await Genre.findAll({raw: true});
      if(allGenres){
        res.status(200).json(allGenres);
      }else{
        next(createError(404, 'Any genres Not Found'))
      }
    } catch (error) {
      next(error);
    }
  }

  async getOneGenre(req, res, next) {
    try {
      const id = req.params.id;
      const genre = await Genre.findByPk(id, {raw: true});
      if(genre){
        res.status(200).json(genre);
      }else{
        next(createError(404, 'Genre Not Found'))
      }
    } catch (error) {
      next(error);
    }
  }
  async createGenre(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const body = req.body;
      const createdGenre = await Genre.create(body, {
        raw: true,
        transaction: t
      });
      if(createdGenre){
        res.status(200).json(createdGenre);
      }else{
        next(createError(404, 'Genre Not Found'))
      }
      t.commit();
    } catch (error) {
      t.rollback();
      next(error);
    }
  }
  async updateGenre(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const body = req.body;
      const updatedGenre = await Genre.update(body, {
        raw: true,
        transaction: t,
        returning: ['title'],
        where: {
          id: body.id
        }
      });
      if(updatedGenre){
        res.status(200).json(updatedGenre[1]);
      }else{
        next(createError(404, 'Genre Not Found'))
      }
      t.commit();
    } catch (error) {
      t.rollback();
      next(error);
    }
  }
  async changeGenre(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const {
        params: {id},
        body
      } = req;
      const [rowsCount, [changedGenre]] = await Genre.update(body,{
        raw: true,
        transaction: t,
        returning: ['title'],
        where: {
          id
        }
      });
      if(rowsCount > 0){
        res.status(200).json(changedGenre);
      }else{
        next(createError(404, 'Genre Not Found'))
      }
      t.commit();
    } catch (error) {
      t.rollback();
      next(error);
    }
  }
  async deleteGenre(req, res, next) {
    const t = await sequelize.transaction();
    try {
      const id = req.params.id;
      const deletedGenre = await Genre.destroy({
        where: {
          id
        },
        transaction: t,
        cascade: true
      });
      if(deletedGenre){
        res.send(res.statusCode);
      }else{
        next(createError(404, 'Any genres Not Found'))
      }
      t.commit();
    } catch (error) {
      t.rollback();
      next(error);
    }
  }




}

export default new GenreController();