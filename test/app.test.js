const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('should respond with an array of penguins with GET', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.text).toEqual(['bernice', 'bernard']);
            });  
    });
});
