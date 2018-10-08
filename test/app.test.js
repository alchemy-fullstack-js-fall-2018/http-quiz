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
            const pet = JSON.parse(getResponse.text);
            expect(pet.id).toEqual(expect.any(String));
            expect(pet.name).toEqual('porky');
            expect(pet.petType).toEqual('little piglet');
            expect(true);
        });
});
['bernice', 'bernard']
  it("write a test...", () => {
    
  });

  'bernice', 'bernard']
  /api/penguins
});
