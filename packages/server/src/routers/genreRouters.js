import { Router } from 'express';

import genreCtrl from '../controllers/genreControllers';

const genreRouter = new Router();

genreRouter.route('/')
.get(genreCtrl.getGenres)
.post(genreCtrl.createGenre)
.put(genreCtrl.updateGenre)

genreRouter.route('/:id')
.get(genreCtrl.getOneGenre)
.patch(genreCtrl.changeGenre)
.delete(genreCtrl.deleteGenre)

export default genreRouter;
