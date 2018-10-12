const { parse } = require('url');

module.exports = (req, res) => {
    const url = parse(req.url, true);
    // const names = url.pathname.split('/').slice(1);
    const penguins = [
        {
            name: 'bernice',
            description:'What a penguin!',
            age: 7
        },
        {
            name: 'bernard',
            description:'What a penguin!',
            age: 8
        }
    ];
    
    if(req.method === 'GET' &&  names [0] === 'bernice') {
        const info = penguins[0] && penguins[1] && penguins[2]; 
        res.end(`${ 
            name: 'bernice',
            description: 'What a penguin!',
            age: 7
        }`);
    }
    //add in 404 function 
};