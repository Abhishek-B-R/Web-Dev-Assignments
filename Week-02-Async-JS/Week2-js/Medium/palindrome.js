/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
function isAlpha(char){
  return /^[a-zA-Z]+$/.test(char)
}
function isPalindrome(str) {
    let lo=0
    let hi=str.length-1
    str=str.toLowerCase();
    while(lo<hi){
      if(isAlpha(str[lo]) && isAlpha(str[hi])){
        if(str[lo]!==str[hi]){
          return false;
        }
      }
      else if(!isAlpha(str[lo])){
        lo++;
        continue;
      }
      else if(!isAlpha(str[hi])){
        hi--;
        continue;
      }
        lo++;
        hi--;
    }
    return true;
  }
module.exports = isPalindrome;