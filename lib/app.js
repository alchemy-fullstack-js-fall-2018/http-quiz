
module.exports = (req, res) => {

    const parsedReq = JSON.parse(req.url);
    const splitUrl = parsedReq.split('/').slice(1);

    if(splitUrl === 'api/penguins') {
        res.end(['bernice', 'bernard']);
    }
   

};
