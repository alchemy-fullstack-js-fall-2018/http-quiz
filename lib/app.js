const { parse } = require('url');

module.exports = (req, res) => {

  const url = parse(req.url, true);
  const urlParts = url.pathname.split('/').slice(1);
  const penguins = ['bernice', 'bernard']
  if(req.method === 'GET' && urlParts[1] === 'penguins') {
    res.end(JSON.stringify(penguins));
  }

  res.end("time to write the app!");
};


