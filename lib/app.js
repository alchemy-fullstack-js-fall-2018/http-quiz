module.exports = (req, res) => {
    const { parse } = require('url');

    const url = parse(req.url, true);
    const path = url.pathname;
    const method = req.method;
    res.setHeader('Content-Type', 'application/json');
  
    res.send = data => res.end(JSON.stringify(data));
  
    if(method === 'GET' && path === '/api/penguins') {
        res.send(['bernice', 'bernard']);
    } 

    else if(method === 'GET' && path === 'api/penguins/king') {
        if(url.query.format === 'full') {
            res.send({
                name: 'bernice',
                description: 'What a penguin',
                age: 7
            });
        }
        else {
            res.send({ name: 'bernice' });
        }
    }

    else if(method === 'DELETE' && path === '/mistake') {
        res.send({ deleted: true });
    }

};
