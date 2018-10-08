const request = require('supertest');
const app = require('../lib/app');

it('gets two penguins', () => {
    return request(app).get('/penguins')
        .then(results => {
            expect(results).toEqual(['bernice', 'bernard']);
        });
});

it('gets two penguins', () => {
    return request(app).get('/penguins')
        .then(results => {
            expect(results).toEqual(['bernice', 'bernard']);
        });
});
