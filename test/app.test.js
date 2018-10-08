const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
    it('gets penguins', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });
});
