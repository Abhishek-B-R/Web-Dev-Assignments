/*File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
hello     world    my    name   is       raman

After the program runs, the output should be
hello world my name is raman
*/

const fs=require('fs')

//Read a file, remove all the extra spaces and write it back to the same file.
function manipulate(){
    fs.readFile("a.txt","utf-8",function(err,contents){
        let x="";
        for(let i=0;i<contents.length;i++){
            if(!(contents[i] === ' '))
                x+=contents[i];
            else if(contents[i] === ' ') {
                x += contents[i];
                while(i < contents.length && contents[i+1] === ' ') i++;
            }            
        }
        fs.writeFile("a.txt",x,function(err,contents){});
    });
}
function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}
function readAFile(){
    fs.readFile("a.txt","utf-8",function(err,contents){
        console.log(contents);
    });
}
setTimeoutPromisified(1000).then(manipulate);
setTimeoutPromisified(1500).then(readAFile);