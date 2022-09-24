import express from 'express';
import cors from 'cors';
require('dotenv').config();
// ===========================
const db = require('./db/models');
import router from './routers';
import { errorHandlers } from './middleware';

const app = express();
const PORT = process.env.PORT || 5000;
const DB = process.env.DB_NAME

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use(errorHandlers.validationErrorHandler,
				errorHandlers.sequelizeErrorHandler,
				errorHandlers.errorHandler);


const checkDB = async () => {
	try {
		await db.sequelize.authenticate();
		console.log(`Connection has been established successively to ${DB}`);
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}
}

checkDB();

app.listen(PORT, () => console.log(`Server has been started at http://localhost:${PORT}`));
	

	
