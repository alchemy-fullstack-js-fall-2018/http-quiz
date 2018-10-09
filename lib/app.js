const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    const splitUrl = url.pathname.split('/').slice(1);

    if(splitUrl[0] === 'penguins') {
        res.end(JSON.stringify(['bernice', 'bernard']));
    }
    res.end();

};
