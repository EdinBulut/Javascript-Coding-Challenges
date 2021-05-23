/* 
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3] 
*/



arr1 = [3, 4, 5, 6, 7, 8, 9]
arr2 = [3, 6, 9]


function arrayDiff(a, b) {
  let c = [];
  
  a.forEach(n => {
    if (!b.includes(n)) {
      c.push(n)
    }
  });

  console.log(c);

}

arrayDiff(arr1, arr2)
