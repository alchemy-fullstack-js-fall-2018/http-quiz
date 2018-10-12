const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const splitUrl = url.pathname.split('/').slice(1);

    let format = url.query.format;

    const penguin = { 
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
    };

    const deleted = { deleted: true };
    
    if(splitUrl[0] === 'penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    } else if(format === 'full') {
        res.end(JSON.stringify(penguin));
    } else if(format === 'simple') {
        res.end(JSON.stringify({ name: penguin.name }));
    } else if(req.method === 'DELETE' && splitUrl[0] === 'mistake') {
        res.end(JSON.stringify(deleted));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify(res.statusCode));
    }
    res.end();

};
