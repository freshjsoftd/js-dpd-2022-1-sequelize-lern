import { Router } from 'express';
import bookRouter from './bookRoters';


const router  = new Router();

router.use('/books', bookRouter);

export default router;