import { Router } from 'express';
import bookRouter from './bookRoters';
import genreRouter from './genreRouters';


const router  = new Router();

router.use('/books', bookRouter);
router.use('/genres', genreRouter);

export default router;