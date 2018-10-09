const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 

    const urlParts = url.pathname.split('/');
    const command = urlParts[1];
    const penguinType = url.query.format;

    let toReturn;

    if(command === 'penguins') {
        toReturn = ['bernice', 'bernard'];
        res.setHeader('content-type', 'text/html');
        res.end(toReturn);
    }

    if(command === 'api' && penguinType === 'simple') {
        toReturn = { name: 'bernice' };
        res.setHeader('content-type', 'application/json');
        res.end (JSON.stringify(toReturn));
    }

    if(command === 'api' && penguinType === 'full') {
        toReturn = { 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        };
        res.setHeader('content-type', 'application/json');
        res.end (JSON.stringify(toReturn));
    }

    if(command === 'mistake') {
        res.end (JSON.stringify({ deleted: true }));
    }

    res.statusCode = 404;
    res.end();

};
