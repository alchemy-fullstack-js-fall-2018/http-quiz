const request = require('supertest');
const app = require('../lib/app');

it('gets two penguins', () => {
    return request(app).get('/penguins')
        .then(results => {
            expect(results).toEqual(['bernice', 'bernard']);
        });
});

it('gets simple penguin', () => {
    return request(app).get('/api/penguin/king?format=simple')
        .then(results => {
            expect(results).toEqual({ 
                name: 'bernice' 
            });
        });
});

it('gets full penguin', () => {
    return request(app).get('/api/penguin/king?format=full')
        .then(results => {
            expect(results).toEqual({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            });
        });
});

it('deletes as described', () => {
    return request(app).delete('/mistake')
        .then(results => {
            expect(results).toEqual({ deleted: true });
        });
});

it('gets simple penguin', () => {
    return request(app).get('/api/penguin/king?format=simple')
        .then(results => {
            expect(results).toEqual({ 
                name: 'bernice' 
            });
        });
});
