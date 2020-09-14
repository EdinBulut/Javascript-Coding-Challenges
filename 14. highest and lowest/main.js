/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Example:
Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"
Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/


function highAndLow(numbers){
  numbers = numbers.split(' ').map(n => n = parseInt(n, 10)).sort((a,b)=>a-b)
  max = numbers.reduce((a,b)=>Math.max(a,b));
  min = numbers.reduce((a,b)=>Math.min(a,b));
  maxmin=[].concat(max,min).join(' ')
  console.log(numbers);
  console.log(max);
  console.log(min);
  console.log(maxmin);

}

highAndLow('85 56 85 12 38')