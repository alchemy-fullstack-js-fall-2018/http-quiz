const { parse } = require('url');

module.exports = (req, res) => {

    const url = parse(req.url, true); 

    const urlParts = url.pathname.split('/');
    const command = urlParts[1];
    const penguinType = url.query.format;

    //res.setHeader('content-type', 'application/json');

    console.log (command, penguinType);

    if(command === 'penguins') {
        res.setHeader('content-type', 'text/html');
        res.end(['bernice', 'bernard']);
    }

    if(command === 'api' && penguinType === 'simple') {

    }

};
