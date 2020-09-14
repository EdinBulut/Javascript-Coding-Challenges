/*
Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:
["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:
["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.
*/

const fruits = ['Banana', 'Kiwi', 'Orange', 'Apple', 'Peach', 'Mango']


function sortByLength(array) {
  // array = array.sort((a,b) => a.length > b.length ? 1 : -1)
  array = array.sort((a,b) => a.length - b.length)
  console.log(array);
}

sortByLength(fruits)