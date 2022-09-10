const {Op} = require('sequelize')
const db = require('./models');

(async function () {
	try {
		await db.sequelize.authenticate();
		console.log('Connection has been established successively');
	} catch (error) {
		console.error('Unable to connect to the database:', error.message);
	}



	/* const firstEmployee = {
		name: 'Vasya Pupkin',
		birthday: '1995-01-20',
		email: 'Johndoe@gmail.com',
		phone: '111-555-4444',
		dep: 'analitica',
		salary: 3000,
		gender: 'male',
	};
	const secondEmployee = {
		name: 'Petya Pup',
		birthday: '1995-01-20',
		email: 'Johndoe@gmail.com',
		phone: '111-555-4444',
		dep: 'analitica',
		salary: 4000,
		gender: 'male',
	};
	const employees = [firstEmployee, secondEmployee]; */
	// Create
	/* const createdEmpl = 
  await db.Employee.create(newEmployee,
    {raw: true,
    fields: ['name', 'birthday', 'email'],
    returning: ['name', 'birthday', 'email']
  })
  console.log(createdEmpl.dataValues) */
	/* const createdEmpls = await db.Employee.bulkCreate(employees, {
		raw: true,
		// fields: ['name', 'birthday', 'email'],
		// returning: ['name', 'birthday']
	});
  // console.log(createdEmpls.dataValues);
  createdEmpls.forEach((item) => console.log(item.dataValues)) */
// DELETE
/* const deleteEmpls = await db.Employee.destroy({
  where: {
    salary: {[Op.lt]: 4000}
  }
})
console.log(deleteEmpls) */
/* const updatedEmployee = {
  name: 'Jhon Doe',
  birthday: '1995-01-20',
  email: 'john_pup@gmail.com',
  phone: '111-555-4444',
  dep: 'dev',
  salary: 8000,
  gender: 'male',
} */
// UPDATE
/* const updatedEmpls = 
  await db.Employee.update(updatedEmployee,
    {
      where: {
        dep: 'seils',
      },
      returning: ['name', 'birthday', 'salary']
    }
    );
    console.log(updatedEmpls); */
		// READ
		// SELECT name, birthday FROM employees
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
		try {
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
		}
		



	// ========================================
	// await db.Employee.sync()
})();

// IIFE
