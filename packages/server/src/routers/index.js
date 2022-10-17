const { Router } = require('express');
const bookRouter = require('./bookRouters');
const genreRouter = require('./genreRouters');


const router  = new Router();

router.use('/books', bookRouter);
router.use('/genres', genreRouter);

module.exports = router;