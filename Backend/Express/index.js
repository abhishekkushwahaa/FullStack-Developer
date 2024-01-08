const http = require('http');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello Home Page');
});

app.get('/about', (req, res) => {
    res.send('Hello About Page');
});

const myServer = http.createServer(app);
myServer.listen(3000, () => {
    console.log('Server Started');
});