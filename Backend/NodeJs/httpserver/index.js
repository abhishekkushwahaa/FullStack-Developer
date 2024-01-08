const http = require('http');
const fs = require('fs');

// const myServer = http.createServer((req, res) => {
//     // headers are the information about the request
//     console.log(req.headers);

//     // url is the path of the request
//     console.log(req.url);

//     console.log('New Request received!');
//     res.end('Hello world from the server!');
// });

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Request Rec.\n`;
    // appendFile is used to append the data to the file: Append Means add the data to the file
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case '/':
                res.end('Home page!');
                break;
            case '/about':
                res.end('Hello I am abhishek!');
                break;
            default:
                res.end('404 Page not found!');
                break;
        }
    });
});

myServer.listen(3000, () => {
    console.log('Server is listening on port 3000...');
});
