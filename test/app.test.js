const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {

    it('posts a penguin', () => {
        return request(app).post('/api/penguins')
            .send({ name: 'bernice', description: 'What a penguin!', age: 7 })
            .then(res => {
                const json = res.body;
                expect(json.name).toEqual('bernice');
                expect(json.description).toEqual('What a penguin!');
                expect(json.age).toEqual(7);
            });
    });


    // it('gets a penguin', () => {
    //     return request(app).get('/api/penguins')
    //         .then(res => {
    //             expect(res.body).toEqual(['bernice', 'bernard']);
    //         });
    // });
});
