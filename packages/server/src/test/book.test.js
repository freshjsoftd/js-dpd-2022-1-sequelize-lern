const request = require('supertest');
const { assert } = require('chai');

const { app } = require('../app');

describe('BookRouters Tests', () => {
	it('should get limited books', (done) => {
		const limit = 5;
		request(app)
			.get(`/api/books?page=1&result=${limit}`)
			.expect((res) => {
				assert.isAtMost(res.body.length, 3);
			})
			.end(done);
	});
});
