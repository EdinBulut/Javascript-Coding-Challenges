/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

Example:

Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

Output:
'alpha beta gamma delta'
*/

let sentence1 = 'alpha betta betta gamma gamma delta gamma gamma delta epsilon'

function removeDuplicateWords(sentence) {
  sentence = sentence.split(' ')
  let obj = {}
  words = []

  for (let i = 0; i < sentence.length; i++) {
    obj[sentence[i]] = obj[sentence[i]] + 1 || 1;
  }

  for (let key of Object.keys(obj)) {
      words = words.concat(key)
  }

  words = words.join(' ')

  console.log(words);
}

removeDuplicateWords(sentence1)