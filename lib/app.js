const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);  
    const parts = url.pathname.split('/').slice(1);
    const path = url.pathname;
    

    if(req.method === 'GET' && parts[0] === 'hello') {
        res.end('hi there');

    } else if(req.method === 'GET' && path === '/api/penguins') {
        res.setHeader('content-type', 'application/JSON');
        let response = ['bernice', 'bernard'];
        res.end(JSON.stringify(response));
    }
    
    else if(req.method === 'GET' && path === '/api/penguins/king') {
        if(url.query.format === 'full') {
            res.end({ 
                name: 'bernice',
                description: 'What a penguin!',
                age: 7
            });
        }
        else res.end({ name: 'bernice' });
    }

    else {
        res.statusCode = 404;
        res.end();
    }
};
