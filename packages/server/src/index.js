const http = require('http');
require('dotenv').config();
// ===========================
const { app } = require('./app');
const db = require('./db/models');

const PORT = process.env.PORT || 5000;
const DB = process.env.DB_NAME

const httpServer = http.createServer(app);

const checkDB = async () => {
	try {
		await db.sequelize.authenticate();
		console.log(`Connection has been established successively to ${DB}`);
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}
}

checkDB();

httpServer.listen(PORT, () => console.log(`Server has been started at http://localhost:${PORT}`));
	

	
