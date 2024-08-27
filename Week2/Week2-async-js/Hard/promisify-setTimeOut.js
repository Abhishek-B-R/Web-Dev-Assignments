/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function setTimeoutPromisified(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
}

function wait(n) {
    setTimeoutPromisified(1000).then(printData)
}

function printData(){
    console.log('Promise resolved');
}

wait()
module.exports = wait;