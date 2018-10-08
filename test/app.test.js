const request = require('supertest');
const app = require('../lib/app');

describe('penguins', () => {
    it('returns a list of penguins', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard']);
            });     
    });
    it('returns a full format penguin', () => {
        return request(app).get('/api/penguin/king?format=full')
            .then(res => {
                expect(res.body).toEqual({ 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });   
    });
    it('returns a simple format penguin', () => {
        return request(app).get('/api/penguin/king?format=simple')
            .then(res => {
                expect(res.body).toEqual({ 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                });
            });   
    });
    it('returns a simple format penguin', () => {
        return request(app).get('/mistake')
            .then(res => {
                expect(res.body).toEqual({ 
                    name: 'bernice'
                });
            });   
    });
    it('delete', () => {
        return request(app).get('/mistake')
            .then(res => {
                expect(res.body).toEqual({ deleted: true });
            });   
    });
});


