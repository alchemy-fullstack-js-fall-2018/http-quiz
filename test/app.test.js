const request = require('supertest');
const app = require('../lib/app');

describe('penguins', () => {
    it('returns a list of penguins', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });     
    });
});
