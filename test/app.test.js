const request = require('supertest');
const app = require('../lib/app');

describe('Penguins API', () => {
  
  it('getALL penguins should return array of penguins in JSON', () => {  
      return request(app).get('/api/penguins').then(res => {
        expect(res.text).toEqual(JSON.stringify(['bernice', 'bernard']));
      });
  });

  describe('should respond to two format choices', () => {

    it('should respond to simple format', () => {

      return request(app).get('/api/penguin/king?format=simple').then(res => {
        expect(res.text).toEqual(JSON.stringify({ name: 'bernice'}));
      });


    });

    it('should default to simple format', () => {

      return request(app).get('/api/penguin/king').then(res => {
        expect(res.text).toEqual(JSON.stringify({ name: 'bernice'}));
      });

    });

    it('should respond to full format', () => {

      return request(app).get('/api/penguin/king?format=full').then(res => {
        expect(res.text).toEqual(JSON.stringify({
          name: 'bernice',
          description: 'What a penguin!',
          age: 7
        }));
      });

    });

  });


});
