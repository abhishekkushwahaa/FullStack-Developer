const fs = require('fs');

// Sync........
fs.writeFileSync('./hello.txt', 'Abhishek');

// Async.......
fs.writeFile('./hello.txt', 'Abhishek Async', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File Created');
});

// Read File........
const phone = fs.readFileSync('./contact.txt', 'utf-8')
console.log(phone);

// Read File Async........
fs.readFile('./contact.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
});

// Difference between readFileSync and readFile
// readFileSync will block the code until it reads the file and throws error if any.
// readFile will not block the code and will execute the code after the file is read and we need to pass callback function to handle the error.

// Append File........
fs.appendFileSync('./hello.txt', `${Date.now()} Balji\n`);

// Copy File........
fs.copyFileSync('./hello.txt', './hello-copy.txt');

// Delete File........
fs.unlinkSync('./hello-copy.txt');

// Stat........
// What is Stat? Stat is a method which gives us the information about the file.
const stats = fs.statSync('./hello.txt');
console.log(stats);

// Create Directory........
// fs.mkdirSync('./newDir'); 

// Delete Directory........
fs.rmdirSync('./newDir'); 