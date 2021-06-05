/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/


function generateHashtag (str) {
  hashtag = []
  str = str.trim()
  if (str.length === 0) return false
  if (str.length > 1) {
  str = str.trim().split(' ')
  str = str.filter(s => s !== '')
    
  for (s of str ) {
    s = s.split('')
    console.log(s)
    s[0] = s[0].toUpperCase()
    s = s.join('')
    hashtag.push(s)
  }
  hashtag = `#${hashtag.join('')}`
  }

  return (hashtag.length > 140)? false : hashtag
}


console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))