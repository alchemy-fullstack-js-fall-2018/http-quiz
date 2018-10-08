const request = require("supertest");
const app = require("../lib/app");

describe("Pirates API", () => {

  it('gets penguin', () => {
    return request(app).post('/api/penguins')
        .send(['bernice', 'bernard'])
        .then(createResponse => {   
            const { id } = JSON.parse(createResponse.text);
            return request(app).get(`/api/penguins/${id}`);
        })
        .then(getResponse => {
            const penguin = JSON.parse(getResponse.text);
            expect(penguin.id).toEqual(expect.any(String));
            expect(penguin.name).toEqual('bernice');
            expect(penguin.petType).toEqual('bernard);
            expect(true);
        });
});
