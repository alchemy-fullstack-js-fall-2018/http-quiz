
module.exports = (req, res) => {
    const splitUrl = req.url.pathname.split('/').slice(1);
    console.log(splitUrl);
   

    res.end();
};
