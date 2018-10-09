const request = require('supertest');
const app = require('../lib/app');

describe('penguins API', () => {
    
    it('gets all penguins', () => {
                 
        return request(app).get('/penguins')
            .then(res => {
                expect(JSON.parse(res.text)).toEqual(['bernice', 'bernard']);
            });
    });

    it('gets custom full format queries', () => {
        return request(app).get('/penguin/king?format=full')
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });
    });

    
});
