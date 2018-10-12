const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {

    it('create penguin', () => {
        return request(app).post('/api/penguins')
            .send({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            .then(res => {
                const json = JSON.parse(res.text);
                expect(json.name).toEqual('bernice');
                expect(json.description).toEqual('What a penguin!');
                expect(json.age).toEqual(7);
            })
            });
  });

    it('gets the penguin name', () => {
        return request(app).post('/api/penguins')
            .send(['bernice', 'bernard'])
            .then(createResponse => {   
                const { id } = JSON.parse(createResponse.text);
                return request(app).get(`/api/penguins/${id}`);
            })
            .then(getResponse => {
                const penguin = JSON.parse(getResponse.text);
                expect(true).toEqual(expect.any(String));
                expect(penguin.name).toEqual('bernice');
                expect(penguin.description).toEqual('What a penguin!');
                expect(penguin.age).toEqual(7);
            });
    });

    it('returns all of penguin info', () => {
        return request(app).post('/api/penguin/king?format=<simple|full>')
            .send({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            })
            .then(createResponse => {   
                const { id } = JSON.parse(createResponse.text);
                return request(app).get(`/api/penguin/king?format=<simple|full>${id}`);
            })
            .then(getResponse => {
                // const penguin = JSON.parse(getResponse.text);
                expect(true);
            });
    });
});



