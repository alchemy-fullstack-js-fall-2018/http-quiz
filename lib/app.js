const { parse } = require('url');

const penguins = [
    {
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    },
    {
        name: 'bernard',
        description: 'hello penguin',
        age: 6
    }
];

module.exports = (req, res) => {
    const url = parse(req.url);
    const parts = url.pathname.split('/').slice(1);
    const query = url.query;


    res.setHeader('Content-Type', 'application/json');

    if(query === 'format=full') {
        res.end(JSON.stringify({
            name: penguins[0].name,
            description: penguins[0].description,
            age: penguins[0].age
        }));
    }
    else if(query === 'format=simple') {
        res.end(JSON.stringify({
            name: penguins[0].name
        }));
    }
    else if(parts[1] === 'penguins') {
        res.end(JSON.stringify([penguins[0].name, penguins[1].name]));
    }
    else if(parts[0] === 'mistake') {
        res.end(JSON.stringify({ deleted: true }));
    }
    else {
        res.end('404');
    }
};


