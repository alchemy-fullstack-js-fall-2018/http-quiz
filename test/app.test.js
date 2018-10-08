const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {
    it('gets penguins', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });
    });

    it('gets a single penguin with format=full', () => {
        return request(app).get('//api/penguin/king?format=full')
            .then(res => {
                const expected = { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                };
                expect(res.body).toEqual(expected);
            });
    });

    it('deletes mistake', () => {
        return request(app).delete('/mistake')
            .then(res => {
                expect(res.body).toEqual({ deleted: true });
            });
    });
});
