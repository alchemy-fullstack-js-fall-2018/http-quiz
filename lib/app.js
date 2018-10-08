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

    res.setHeader('Content-Type', 'application/json');

    if(parts[2] === 'king?format=full') {
        res.end(JSON.stringify({
            name: penguins[0].name,
            description: penguins[0].description,
            age: penguins[0].age
        }));
    }
    else if(parts[2]) {
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
        res.end('error');
    }


    // res.send = data => res.end(JSON.stringify(data));
};


