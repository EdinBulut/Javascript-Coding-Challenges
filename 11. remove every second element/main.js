/* 
Take an array and remove every second element out of that array.
  Always keep the first element out of that array and start removing with the next element
  */

const fruits = ['Banana', 'Kiwi', 'Orange', 'Apple', 'Peach', 'Mango']

function removeEveryOther(arr) {

  arr = arr.filter((el,index) => index %2 === 0 )

  console.log(arr);
}

removeEveryOther(fruits);