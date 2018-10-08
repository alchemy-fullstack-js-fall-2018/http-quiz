const { parse } = require('url');

module.exports = (req, res) => {

  const url = parse(req.url, true);
  const urlParts = url.pathname.split('/').slice(1);
  const penguins = ['bernice', 'bernard']



  if(req.method === 'GET' && urlParts[1] === 'penguin') {
    if(url.query.format === 'full') {
      res.end(JSON.stringify({
        name: 'bernice',
        description: 'What a penguin!',
        age: 7
      }));
    }
    else {
      res.end(JSON.stringify({name: 'bernice'}));
    }
  }
  else if(req.method === 'GET' && urlParts[1] === 'penguins') {
    res.end(JSON.stringify(penguins));
  }

};


