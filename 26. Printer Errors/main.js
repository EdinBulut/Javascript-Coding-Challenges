/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/


function printerError(s) {
  // m = 'm'.charCodeAt() - 96
  // console.log(m)

  let err = 0
  arr= s.split('')
  arr.forEach(a=> {if(a.charCodeAt() - 96 > 13) err++})
  console.log(`${err}/${arr.length}`);
  return `${err}/${arr.length}`;
}

printerError("aaaxbbbbyyhwawiwjjjwwm")