/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function setTimeoutPromisified(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function wait(n) {
    // Convert seconds to milliseconds
    return setTimeoutPromisified(n * 1000);
  }
  
  module.exports = wait;
  