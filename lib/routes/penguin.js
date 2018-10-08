const penguin = require('../models/penguin');
const errorRoute = require('./error');

const get = (req, res) => {
    const { id } = req;
    if(id) {
        const message = penguin.get(id);
        res.send(message);
    } else {
        const messages = penguin.getAll();
        res.send(messages);
    }
};


const remove = (req, res) => {
    const { id } = req;
    penguin.delete(id);
    res.send({ deleted: true });
};

const methods = {
    get,
    delete: remove
};

module.exports = (req, res) => {
    // GET -> get
    const method = methods[req.method.toLowerCase()] || errorRoute;
    method(req, res);
};

