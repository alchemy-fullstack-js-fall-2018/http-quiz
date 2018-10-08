const request = require('supertest');
const app = require('../lib/app');

describe('Pirates API', () => {

    it('gets penguin', () => {
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
                expect(penguin.petType).toEqual('bernard');
                expect(true);
            });
    });

    it('penguin info', () => {
        return request(app).post('/api/penguin/king?format=<simple|full>')
            .send({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
              });
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



// GET` `/api/penguin/king?format=<simple|full>` should return the following `json` response:
//     * If `format=full`, then return:
//         ```json
//         { 
//             name: 'bernice',
//             description: 'What a penguin!',
//             age: 7
//         }
//         ```
