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
                JSON.parse(res.text);
                expect(res.text).toEqual(['bernice', 'bernard']);
            });
    });
});
