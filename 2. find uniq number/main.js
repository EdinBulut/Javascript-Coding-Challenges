/* 
There is an array with some numbers. All numbers are equal except for one. Try to find it!
findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/




array1 = [ 1, 1, 1, 2, 1, 1 ]
array2 = [ 0, 0, 0.55, 0, 0 ]

function findUniq(arr) {

  same = 0
  diff = 0
  first = arr[0]

  for (let i = 0; i < arr.length; i++) {
    first === arr[i] ? same++ : diff++
  }

  if (diff === 1) {
    uniq = arr.filter(el => el !== first)[0]
  } else {
    uniq = arr.filter(el => el === first)[0]
  }

  console.log(arr);
  console.log(same);
  console.log(uniq);
}

findUniq(array1)