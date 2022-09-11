// import express from 'express';
const {Op} = require('sequelize')
const db = require('./models');

(async function () {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}

	/* try {
		await db.sequelize.drop({cascade:true})
	} catch (error) {
		console.log('Something went wrong:', error.message);
	} */

	/* try {
		await db.sequelize.sync({alter:true});
	} catch (error) {
		console.log('Something went wrong:', error.message);
	} */


		/* const genres = await db.Genre.findAll({
			raw: true,
			attributes: {
				include: [[db.sequelize.fn('count', db.sequelize.col('title')), 'summ']],
				exclude: ['createdAt', 'updatedAt']},
			// attributes: ['title', 'id'],
			where: {
				id: {[Op.gt]: 15}
			},
			order: [['title', 'DESC']],
			group: ['id']

		});
		console.log(JSON.stringify(genres, null, 2)); */
		/* try {
			const customer = await db.Customer.create({
			name: 'John Doe',
			birthday: '1995-01-20',
			email: 'john.doe@gmail.com',
		},
		// {validate: false}
		)
		console.log(JSON.stringify(customer, null, 2));
		} catch (error) {
			console.log('Something went wrong', error.message);
		} */
	
})();

