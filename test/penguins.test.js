const request = require('supertest');
const app = require('../lib/penguins');

describe('Penguins', () => {
    
    it('responds with penguin names in array', () => {
        return request(app).get('/').then(res => {
            expect(res.text).toEqual(['bernice', 'bernard']);
        });
    });

    it('responds with name, description, age', () => {
        return request(app).get('/api/penguin/king?format=<simple|full>').then(res => {
            expect(res.text).toEqual(`${ name, description, age }`);
        });
    });   

    it('returns 404', () => {
        return request(app)
            .patch('/penguins')
            .send('')
            .then(res => {
                expect(res.statusCode).toEqual(404);
            });
    });
});
