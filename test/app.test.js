const request = require('supertest');
const app = require('../lib/app');

it('gets two penguins', () => {
    const expected = ['bernice', 'bernard'];
    return request(app).get('/penguins')
        .then(res => {
            expect(res.text).toEqual(JSON.stringify(expected));
        });
});

it('gets simple penguin', () => {
    const expected = { name: 'bernice' };
    return request(app).get('/api/penguin/king?format=simple')
        .then(results => {
            expect(results.text).toEqual(JSON.stringify(expected));
        });
});

it('gets full penguin', () => {
    const expected = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    };
    return request(app).get('/api/penguin/king?format=full')
        .then(results => {
            expect(results.text).toEqual(JSON.stringify(expected));
        });
});

it('deletes as described', () => {
    const expected = { deleted: true };
    return request(app).delete('/mistake')
        .then(results => {
            expect(results.text).toEqual(JSON.stringify(expected));
        });
});

it('errors when path not recognized', () => {
    return request(app).delete('/doesNotExist')
        .then(results => {
            expect(results.statusCode).toEqual(404);
        });
});

