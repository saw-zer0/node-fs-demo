const fs = require('fs');
const path = require('path');


function writeFile(pathToFile,fileName, text){
    console.log('helloworkd')
    fs.writeFile(path.join(pathToFile,fileName), text,(err)=>{
        if(err) throw err;
        console.log('file written');
    })    
}

function appendToFile(path, fileName, text){
    fs.appendFile(path.join(pathToFile, fileName), text,(err)=>{
        if(err) throw err;
        console.log('file appended')
    })
}

function reaadFile(pathToFile, fileName, text){
    fs.readFile(path.join(path, fileName),{encoding: utf-8},(err, data)=>{
        if(err) throw err;
        console.log(data);
    })
}

function deleteFile(pathToFile, fileName){
    fs.unlink(path.join(path, fileName), (err) => {
        if(err) throw err;
        console.log('file deleted');
    })
}

module.exports = {writeFile, appendToFile, reaadFile, deleteFile};