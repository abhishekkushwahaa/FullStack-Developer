const http = require('http');
const fs = require('fs');
const url = require('url');

const myServer = http.createServer((req, res) => {
    if (req.url === '/favicon.ico') {
        return res.end();
    }
    const log = `${Date.now()}: ${req.method} ${req.url} New Request Rec.\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    // appendFile is used to append the data to the file: Append Means add the data to the file
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case '/':
                res.end('Home page!');
                break;
            case '/about':
                const username = myUrl.query.username;
                res.end(`Hello ${username}!`);
                break;
            case '/signup':
                if(req.method === 'GET') res.end('SignUp page!'); 
                else if(req.method === 'POST'){
                    // DB Query
                    res.end('SignUp Successfully!');
                }
            default:
                res.end('404 Page not found!');
                break;
        }
    });
});

myServer.listen(8000, () => {
    console.log('Server is listening on port 3000...');
});