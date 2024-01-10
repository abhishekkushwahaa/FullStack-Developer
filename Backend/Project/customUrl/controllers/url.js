const shortid = require('shortid');
const Url = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if(!body.url){
        res.status(400).json({message: 'URL is required'});
    }
    const shortID = shortid;
    await Url.create({
        shortId: shortID, 
        redirectUrl: body.url,
    });
    res.json({shortId: shortID});
};

module.exports = {
    handleGenerateNewShortUrl,
}