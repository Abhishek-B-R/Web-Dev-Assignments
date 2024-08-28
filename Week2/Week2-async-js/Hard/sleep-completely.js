const { resolve } = require("path");

function sleep(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("done");
            resolve();
        },ms)
    });
}
module.exports = sleep;