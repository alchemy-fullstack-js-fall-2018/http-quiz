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

    it('gets custom simple format queries', () => {
        return request(app).get('/penguin/king?format=simple')
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ 
                    name: 'bernice'
                });
            });
    });

    it('returns deleted message with DELETE request', () => {
        return request(app).delete('/mistake')
            .then(res => {
                expect(JSON.parse(res.text)).toEqual({ deleted: true });
            });
    });

    it('returns 404 status code if any other response is sent', () => {
        return request(app).post('/blowza')
            .then(res => {
                expect(res.statusCode).toEqual(404);
            });
    });
    
});
