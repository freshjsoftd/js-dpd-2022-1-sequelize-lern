// import express from 'express';
const { Op } = require('sequelize');
const db = require('./models');

(async function () {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}

	/* try {
		const biography = await db.Genre.findOne({where:{
		title: ['Adventures']
	}});
	console.log(JSON.stringify(biography, null, 2));
	console.log(await biography.getBooks({raw: true}));

	} catch (error) {
		console.log('Something went wrong:', error.message);
	} */
	
	try {
		const customer = await db.Customer.create({
			name: 'Mike Tyson',
			password: 'iron_mike',
			email: 'iron_mike@gmail.com',
			birthday: '1966-06-30'
		})
		console.log(JSON.stringify(customer, null, 2));
	} catch (error) {
		console.log('Something went wrong:', error.message);
	}
	
})();
