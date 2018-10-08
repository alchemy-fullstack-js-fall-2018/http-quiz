const request = require("supertest");
const app = require("../lib/app");

describe("penguins API", () => {
 
    it('gets all penguins', () => {
        return  request(app).get('/api/penguins')
            .then(res => {
                expect(res.body).toEqual(['bernice', 'bernard'])
            });
    });
});
