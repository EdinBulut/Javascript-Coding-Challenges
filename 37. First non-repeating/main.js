/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/


function firstNonRepeatingLetter(str) {
  str = str.split('')
  
  for (let i=0; i<str.length; i++) {
    let arr = []
    
    for (let n=0; n<str.length; n++) {
      if (i !== n) {
        if (str[i].toLowerCase() === str[n].toLowerCase()) {
          arr.push(str[n])
        }
      }
    }
    
//     console.log(str[i], ' / ',arr)
    if (arr.length === 0) {
      return str[i]
    } 
  }
  
  return ''
}


console.log(firstNonRepeatingLetter('brko'))
console.log(firstNonRepeatingLetter('sTreSS'))