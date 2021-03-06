/*
  In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

  For example:
  dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
  dup(["kelless","keenness"]) = ["keles","kenes"].

  Strings will be alphabet characters only. Don't worry about lower and upper case. See test cases for more examples.
*/

let words1 = ["abracadabra", "allotteeeee", "assessee"]

function dup(s) {
  
  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split('')

    helper = () => {
      s[i].forEach((el, idx, arr) => {
        if (arr[idx] === arr[idx - 1]) {
          s[i].splice(idx, 1)
          helper()
        }
      })
    }
    helper()
    s[i] = s[i].join('')

  }
  
  console.log(s);
};

dup(words1)