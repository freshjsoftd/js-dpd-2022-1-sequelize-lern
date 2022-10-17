const express = require('express');
const cors = require('cors');
// ===============================
const router = require('./routers');
const { errorHandlers } = require('./middleware');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorHandlers.validationErrorHandler,
				errorHandlers.sequelizeErrorHandler,
				errorHandlers.errorHandler);

module.exports.app = app;