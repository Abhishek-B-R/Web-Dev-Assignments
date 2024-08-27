/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function promisifySettimeout(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

function wait1(t) {
    promisifySettimeout(t).then(function(){
        console.log("Done 1")
    })
}

function wait2(t) {
    promisifySettimeout(t).then(function(){
        console.log("Done 2")
    })
}

function wait3(t) {
    promisifySettimeout(t).then(function(){
        console.log("Done 3")
    })
}

function calculateTime(t1, t2, t3) {
    let start=Date.now()
    wait1(t1)
    wait2(t2)
    wait3(t3)
    let total=Date.now()-start
    console.log("Done")
    console.log("Total time taken "+total)
}
calculateTime(5000,5000,5000)
module.exports = calculateTime;