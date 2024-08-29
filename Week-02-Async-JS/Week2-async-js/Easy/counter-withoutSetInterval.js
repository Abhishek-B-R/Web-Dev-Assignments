/*Counter without setInterval
Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

(Hint: setTimeout)*/

//Solution1
for(let i=0;i<1000;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

//Solution2
for(var i=0;i<=1000;i++){
    function close(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    close(i);
}