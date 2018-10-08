const request = require('supertest');
const app = require('../lib/app');

it('gets two penguins', () => {
    const expected = ['bernice', 'bernard'];
    return request(app).get('/penguins').then(res => {
        expect(res.text).toEqual(expected);
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

it.skip('gets full penguin', () => {
    return request(app).get('/api/penguin/king?format=full')
        .then(results => {
            expect(results).toEqual({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            });
        });
});

it.skip('deletes as described', () => {
    return request(app).delete('/mistake')
        .then(results => {
            expect(results).toEqual({ deleted: true });
        });
});

