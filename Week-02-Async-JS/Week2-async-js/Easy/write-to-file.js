const fs=require('fs')

//Method1
function writeAFile(){
    fs.writeFile("a.txt","Changing data in file","utf-8",function(err,data){})
}
writeAFile();

//Method2
function writeAFile(){
    fs.writeFile("a.txt","Changing data in file","utf-8",function(err,data){})
}
function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
setTimeoutPromisified(3000).then(writeAFile);