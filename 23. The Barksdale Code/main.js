/*
Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

Here's a keypad for visualization.

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

Write a funciton called decode(). Given an encoded string, return the actual phone number in string form. Don't worry about input validation, parenthesies, or hyphens.
*/


// function decode(string) {
//   let numbers = string.split('')
//   let decoded = [];

//   for (let i = 0; i < numbers.length; i++) {
//     let n = numbers[i];

//     switch (n) {
//       case '0':
//         decoded.push('5')
//         break;
//       case '1':
//         decoded.push('9')
//         break;
//       case '2':
//         decoded.push('8')
//         break;
//       case '3':
//         decoded.push('7')
//         break;
//       case '4':
//         decoded.push('6')
//         break;
//       case '5':
//         decoded.push('0')
//         break;
//       case '6':
//         decoded.push('4')
//         break;
//       case '7':
//         decoded.push('3')
//         break;
//       case '8':
//         decoded.push('2')
//         break;
//       case '9':
//         decoded.push('1')
//         break;
    
//       default:
//         decoded.push(n)
//         break;
//     }
    
//   }

//   console.log(decoded)
//   return decoded.join('')
// }

function decode(string) {
  let arr = [...string];
  let newArr = arr.map((item) => {
    switch(item) {
        case '0': return item = '5';
        case '1': return item = '9';
        case '2': return item = '8';
        case '3': return item = '7';
        case '4': return item = '6';
        case '5': return item = '0';
        case '6': return item = '4';
        case '7': return item = '3';
        case '8': return item = '2';
        case '9': return item = '1';
    }
  });
  console.log(newArr);
  return newArr.join('');
}



decode('0123456789');
