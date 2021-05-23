/*
For this kata you will have to forget how to add two numbers.
It can be best explained using the following meme:
https://i.ibb.co/Y01rMJR/caf.png
Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
  c = ''

  num1 = num1.toString().split('').map(el => parseInt(el, 10)).reverse()
  num2 = num2.toString().split('').map(el => parseInt(el, 10)).reverse()

  if (num1.length >= num2.length) {
    for (let i = 0; i < num2.length; i++) {
      c = `${(num1[i]+num2[i]).toString()}${c}`
    }
    num1 = num1.slice(num2.length).join('').toString()
    return parseInt(`${num1}${c}`, 10)

  } else {
    for (let i = 0; i < num1.length; i++) {
      c = `${(num1[i]+num2[i]).toString()}${c}`
    }
    num2 = num2.slice(num1.length).join('').toString()
    console.log(parseInt(`${num2}${c}`, 10));
    return parseInt(`${num2}${c}`, 10)
  }
}

add(16, 18)
add(122, 81)