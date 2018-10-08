const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 

    const urlParts = url.pathname.split('/');
    const command = urlParts[1];
    const penguinType = url.query.format;

    if(command === 'penguins') {
        res.setHeader('content-type', 'text/html');
        res.end(['bernice', 'bernard']);
    }

    if(command === 'api' && penguinType === 'simple') {
        res.setHeader('content-type', 'application/json');
        res.end (JSON.stringify({ 
            name: 'bernice' 
        }));
    }

    if(command === 'api' && penguinType === 'full') {
        res.setHeader('content-type', 'application/json');
        res.end ({ 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        });
    }

    if(command === 'mistake') {
        res.end ({ deleted: true });
    }

    res.statusCode = 404;

};
