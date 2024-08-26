const fs=require('fs');

//Method1
function readAFile(){
    fs.readFile("a.txt","utf-8",function(err,contents){
        console.log(contents);
    });
}
readAFile();

//Method2
function readAFile(){
    fs.readFile("a.txt","utf-8",function(err,contents){
        console.log(contents);
    });
}
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
setTimeoutPromisified(3000).then(readAFile);