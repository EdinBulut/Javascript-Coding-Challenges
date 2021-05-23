/*
Vowel harmony is a phenomenon in some languages. It means that "A vowel or vowels in a word are changed to sound the same (thus "in harmony.")" (wikipedia). This kata is based on vowel harmony in Hungarian.

Task:
Your goal is to create a function dative() (Dative() in C#) which returns the valid form of a valid Hungarian word w in dative case i. e. append the correct suffix nek or nak to the word w based on vowel harmony rules.

Vowel Harmony Rules (simplified)
When the last vowel in the word is

a front vowel (e, é, i, í, ö, ő, ü, ű) the suffix is -nek
a back vowel (a, á, o, ó, u, ú) the suffix is -nak
Examples:
dative("ablak") == "ablaknak"
dative("szék") == "széknek"
dative("otthon") == "otthonnak"

Preconditions:
To keep it simple: All words end with a consonant :)
All strings are unicode strings.
There are no grammatical exceptions in the tests.
*/

function dative(word) {

  frontVowels = [ 'é', 'i', 'í', 'ö', 'ő', 'ü', 'ű']
  backVowels = ['e','a', 'á', 'o', 'ó', 'u', 'ú']
  suff = ''

  frontVowels.forEach(l => {
    if (l === word.split('').reverse()[1] || l === word.split('').reverse()[2]) {
      suff = 'nek'
    }
  });

  if (suff === '') suff = 'nak'
  word = `${word}${suff}`

  // let str = word;
  // for(let i=str.length-1;i>=0;i--){
  //   if(frontVowels.indexOf(str[i])!==-1) return str + "nek";
  //   if(backVowels.indexOf(str[i])!==-1) return str + "nak";
  // }

  console.log(word, vowel);
}

dative('ablak')
dative('otthon')