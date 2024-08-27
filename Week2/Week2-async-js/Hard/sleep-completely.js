function sleep(ms){
    let start=Date.now()
    while(Date.now()-start<ms)  ;
    console.log("done")
}

console.log("start")
sleep(5000)
console.log("end")

module.exports = sleep;