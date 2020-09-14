/*
Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
The binary number returned should be a string.
*/

function addBinary(a, b) {
  let binaryString = (a + b).toString(2); // 2 u zagradi pretvara decimalni broj u binarni 
  console.log(binaryString);
}

addBinary(3, 8);