const fs = require('fs');
const path = require('path');


function writeFile(pathToFile,fileName, text){
    fs.writeFile(path.join(pathToFile,fileName), text,(err)=>{
        if(err) throw err;
        console.log('file written');
    })    
}

function appendToFile(pathToFile, fileName, text){
    fs.appendFile(path.join(pathToFile, fileName), text,(err)=>{
        if(err) throw err;
        console.log('file appended')
    })
}

function readFile(pathToFile, fileName){
    fs.readFile(path.join(pathToFile, fileName),{encoding: 'utf-8'},(err, data)=>{
        if(err) throw err;
        console.log(data);
    })
}

function deleteFile(pathToFile, fileName){
    fs.unlink(path.join(pathToFile, fileName), (err) => {
        if(err) throw err;
        console.log('file deleted');
    })
}

module.exports = {writeFile, appendToFile, readFile, deleteFile};