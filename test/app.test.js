const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {


    it('responds with hi there when path is /hello', () => {
        return request(app).get('/hello')
            .then(res => {
                expect(res.text).toEqual('hi there');
            });
    });

    it('gets penguins', () => {
        return request(app)
            .get('/api/penguins')
            .then(res => {
                expect(res.text).toEqual(['bernice', 'bernard']);
            });
    });

    it('gets a single penguin with query format=full', () => {
        return request(app)
            .get('/api/penguins/king?format=full')
            .then(body => {
                const expected = { 
                    name: 'bernice',
                    description: 'What a penguin!',
                    age: 7
                };
                expect(body).toEqual(expected);
            });
    });

});
