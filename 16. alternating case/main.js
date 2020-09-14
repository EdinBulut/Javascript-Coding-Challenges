/*
each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 
For example:
  "hello world".toAlternatingCase() === "HELLO WORLD"
  "HELLO WORLD".toAlternatingCase() === "hello world"
  "hello WORLD".toAlternatingCase() === "HELLO world"
  "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
  "12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
  "1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
  "String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
As usual, your function/method should be pure, i.e. it should not mutate the original string.
*/

function alternatingCase(text) {
  text = text.split('').map(changeText).join('');

  function changeText(char) {
    // if (char.toLowerCase() === char) {
    //   return char = char.toUpperCase();
    // } else {
    //   return char = char.toLowerCase();
    // }
    return char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase();
  }
  console.log(text);
}

alternatingCase('Hello World');
alternatingCase('HELLO WORLD');
alternatingCase('hello world');