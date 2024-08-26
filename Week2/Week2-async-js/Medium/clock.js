/*
Using 1-counter.md or 2-counter.md from the easy section, can you create a clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats -

HH:MM::SS (Eg. 13:45:23)

HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

let datetime= new Date()

let sec=datetime.getSeconds()
let min=datetime.getMinutes()
let hr=datetime.getHours()
setInterval(function(){
    console.log(hr+":"+min+":"+sec);
    if(sec<60)  sec++;
    if(sec===60){
        sec=0;
        min++;
    }
    if(min==60){
        min=0;
        hr++;
    }
},1000);