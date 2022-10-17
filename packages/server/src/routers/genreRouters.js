const { Router } = require ('express');

const genreCtrl = require ('../controllers/genreControllers');
const {validate} = require ('../middleware');

const genreRouter = new Router();

genreRouter.route('/')
.get(genreCtrl.getGenres)
.post(validate.validateNewGenre, genreCtrl.createGenre)
.put(validate.validateNewGenre, genreCtrl.updateGenre)

genreRouter.route('/:id')
.get(genreCtrl.getOneGenre)
.patch(genreCtrl.changeGenre)
.delete(genreCtrl.deleteGenre)

module.exports = genreRouter;
