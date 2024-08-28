/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function sort(str){
    str=str.toLowerCase();
    let arr=str.split('')
    for(let i=0;i<arr.length;i++){
        for(let j=i;j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp=arr[i]
                arr[i]=arr[j]
                arr[j]=temp
            }
        }
    }
    str=arr.join('')    
    console.log(str)
    return str;
}

function isAnagram(str1, str2) {
    return sort(str1)===sort(str2)
}
module.exports = isAnagram;