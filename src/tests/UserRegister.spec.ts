import request from 'supertest';
import app from '../app';

describe('User registration', () => {
	it('returns 200 OK when signup request is valid', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'p4ssword',
			})
			.then((response) => {
				expect(response.status).toBe(200);
				done();
			});
		// .expect(200, done);
	});
	it('returns success message when signup request is valid', (done) => {
		request(app)
			.post('/api/1.0/users')
			.send({
				username: 'user1',
				email: 'user1@mail.com',
				password: 'p4ssword',
			})
			.then((response) => {
				expect(response.body.message).toBe('User created');
				done();
			});
		// .expect(200, done);
	});
});
