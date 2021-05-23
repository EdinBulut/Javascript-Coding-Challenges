/*
You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

You can assume all values in the array are numbers.
*/


function smallEnough(a, limit){
  console.log(a, limit)
  return a.sort((a,b)=>b-a)[0]<=limit ? true:false
}

smallEnough([10, 14, 2, 23, 19],27)