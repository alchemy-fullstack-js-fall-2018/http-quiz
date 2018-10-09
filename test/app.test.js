const request = require('supertest');
const app = require('../lib/app');

describe('penguins API', () => {
    
    it('gets all penguins', () => {
                 
        return  request(app).get('/penguins')
            .then(res => {
                
                expect(JSON.parse(res.text)).toEqual(['bernice', 'bernard']);
            });
    });

    
});
