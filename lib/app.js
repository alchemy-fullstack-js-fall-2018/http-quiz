module.exports = (req, res) => {
    res.end("time to write the app!");

    const url = parse(req.url);
    const parts = url.pathname.split('/').slice(1);

    res.setHeader('Content-Type', 'application/json');

    const resource = parts[0];

    const route = routes[resource] || errorRoute;

    res.send = data => res.end(JSON.stringify(data));
    
    bodyParser(req)
        .then(body => {
            req.body = body;
            route(req, res);
        });
};
