"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../app"));
describe('User registration', () => {
    it('returns 200 OK when signup request is valid', (done) => {
        supertest_1.default(app_1.default)
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
        supertest_1.default(app_1.default)
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
