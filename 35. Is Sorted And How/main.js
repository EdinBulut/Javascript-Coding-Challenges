/*
For this kata you will have to forget how to add two numbers.
It can be best explained using the following meme:
https://i.ibb.co/Y01rMJR/caf.png
Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function isSortedAndHow(array) {

  let arr1 = [].concat(array).sort((a,b)=> a-b).join()
  let arr2 = [].concat(array).sort((a,b)=> b-a).join()
  array = array.join()
  // console.log(arr1);
  // console.log(arr2);
  // console.log(array);

  if (array === arr1) {
    console.log('yes, ascending');
    return 'yes, ascending'
  } else if (array === arr2) {
    console.log('yes, descending');
    return 'yes, descending'
  } else {
    console.log('no');
    return 'no'
  }

}

isSortedAndHow([1, 4, 30])