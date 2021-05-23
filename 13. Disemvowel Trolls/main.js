/*
Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.
*/


// function disemVowel(str) {
//   str = str.split('').filter(el => el !== 'a').filter(el => el.toLowerCase() !== 'e')
//   .filter(el => el.toLowerCase() !== 'i').filter(el => el.toLowerCase() !== 'o')
//   .filter(el => el.toLowerCase() !== 'u').join('')
//   console.log(str);
// }

// function disemVowel(str) {
  // str = str.replace(/[aeiou]/ig,'');
//   console.log(str);
// }


function disemVowel(str) {
  let vowels = 'aeiou'
  str = str.split('').filter(l => !vowels.includes(l.toLowerCase())).join('')
  console.log(str);
}



disemVowel('There are no vowels here')

