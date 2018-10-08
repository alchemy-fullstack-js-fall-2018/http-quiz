const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('gets a penguin', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });
});
