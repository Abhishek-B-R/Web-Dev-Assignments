/*Create a counter in JavaScript
We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second*/

//Solution1
let j=0;
setInterval(function(){
    console.log(j)
    j++;
},1000)

//Solution2
for(let i=0;i<1000;i++){
    setTimeout(function(){
        console.log(i);
    },i*1000);
}

//Solution3
for(var i=0;i<=1000;i++){
    function close(i){
        setTimeout(function(){
            console.log(i);
        },i*1000);
    }
    close(i);
}