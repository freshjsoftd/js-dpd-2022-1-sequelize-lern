import { Router } from 'express';

import genreCtrl from '../controllers/genreControllers';
import {validate} from '../middleware';

const genreRouter = new Router();

genreRouter.route('/')
.get(genreCtrl.getGenres)
.post(validate.validateNewGenre, genreCtrl.createGenre)
.put(validate.validateNewGenre, genreCtrl.updateGenre)

genreRouter.route('/:id')
.get(genreCtrl.getOneGenre)
.patch(genreCtrl.changeGenre)
.delete(genreCtrl.deleteGenre)

export default genreRouter;
