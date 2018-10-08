const request = require("supertest");
const app = require("../lib/app");

describe("Penguins API", () => {
  
  it("getALL penguins should return array of penguins in JSON", () => {  
      return request(app).get('/penguins').then(res => {
        expect(res.text).toEqual(`['bernice', 'bernard']`);
      });


  });
});
