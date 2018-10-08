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
  
    if(parts[1] === 'penguins') {
        res.end(JSON.stringify([penguins[0].name, penguins[1].name]));
    }

    // res.send = data => res.end(JSON.stringify(data));
};

