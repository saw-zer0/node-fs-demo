const fs = require('./filesystem');
const path = require('path')

fs.writeFile('./','text.txt', 'Hello World');
fs.appendToFile(__dirname, 'text.txt', '!!! \n hello again');
fs.readFile(__dirname, 'text.txt');
fs.writeFile(__dirname, 'fileToDelete', 'hello once more');
fs.deleteFile(__dirname, 'fileToDelete')