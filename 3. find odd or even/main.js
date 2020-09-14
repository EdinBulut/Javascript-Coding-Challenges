/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

##Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
*/


numbers1 = '2 4 7 8 10'
numbers2 = '3 5 7 8 13 19'

function iqTest(numbers) {
  odd = 0
  even = 0

  numbers = numbers.split(' ').map(el => parseInt(el, 10))
  numbers.forEach(n => n % 2 === 0 ? even++ : odd++);

  even === 1 ? different = numbers.filter(n => n % 2 === 0)[0] : different = numbers.filter(n => n % 2 !== 0)[0]
  

  idx = numbers.indexOf(different) + 1

  console.log(numbers);
  // console.log(odd);
  // console.log(even);
  console.log(different);
  console.log(idx);

}

iqTest(numbers1)
iqTest(numbers2)