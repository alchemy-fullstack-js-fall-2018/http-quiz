const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
    it('should respond with an array of penguins with GET', () => {
        return request(app).get('/api/penguins')
            .then(res => {
                console.log(res.text);
                expect(res.text).toEqual('something');
            });  
    });

    it('should return a penguin as an object with props', () => {
        return request(app).get('')
    });
});
