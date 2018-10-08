const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);

    const parts = url.pathname.split('/').slice(1);

    if(req.method === 'GET' && parts[0] === 'api') {
        res.end(['bernice', 'bernard']);
    }
      
};
