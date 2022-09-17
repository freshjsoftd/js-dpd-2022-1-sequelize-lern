import express from 'express';
import cors from 'cors';
require('dotenv').config();
// ===========================
const db = require('./db/models');
import router from './routers';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use('/api', router);


const checkDB = async () => {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}
}

checkDB();

app.listen(PORT, () => console.log(`Server has been started at http://localhost:${PORT}`));
	

	
