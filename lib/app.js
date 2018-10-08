const { parse } = require('url');

module.exports = (req, res) => {
    
    const url = parse(req.url);
    const parts = url.pathname.split('/').slice(1);

    if(parts[0] === 'api' && req.method === 'POST') {
        let penguin = { name: 'bernice', description: 'What a penguin!', age: 7 };
        res.end(penguin);
    }


    // if(parts[1] === 'penguin' && req.method === 'GET') {
    //     let penguin = { name: 'bernice', description: 'What a penguin!', age: 7 };
    //     res.send(penguin);
    // }


};
