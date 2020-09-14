/* 
  Our football team finished the championship. The result of each match look like "x:y".
  Results of all matches are recorded in the collection. For example: ['3:1', '0:1', '0:0', ...]
  Write a function that takes such collection and counts the points of our team in the championship
  Rules for counting points for each match:
  if x > y -> 3 points
  if x = y -> 1 points
  if x < y -> 0 points
*/



games1 =['3:1', '0:1', '0:0', '2:1', '2:2', '1:0', '3:2', '0:2', '2:1', '0:1']

function points(games) {
  goals = []
  sum = 0
  
  // for (let i = 0; i < games.length; i++) {
  //   helper.push(games[i].split('').filter(el => el !== ':') )
  // }

  games.forEach(g => goals.push(g.split('').filter(el => el !== ':')));

  goals.forEach(el => {
    if ( parseInt(el[0], 10) > parseInt(el[1], 10)) {
      sum += 3
    } else if ( parseInt(el[0], 10) === parseInt(el[1], 10)) {
      sum += 1
    }
  });


  console.log(games);
  console.log(goals);
  console.log(sum);
}


points(games1)