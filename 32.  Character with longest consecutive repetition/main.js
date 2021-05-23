/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
*/

function longestRepetition(s) {
  s = s.split('')
  arr = []

  for (let i = 0; i < s.length; i++) {
    if (i === 0) arr.push(s[i])
    if (s[i] === s[i + 1] ) {
      arr.push(s[i])
    } 
      else if (i === s.length-1) {}
      else arr.push(' ', s[i+1])
  }
  
  arr = arr.join('').split(' ').sort((a, b) => b.length - a.length)

  arr[0].length > 1 ? console.log([arr[0][0], arr[0].length]) : console.log([arr[0], arr[0].length]);



  // console.log(s);
  console.log(arr);

}

longestRepetition("1cbbtv7wjj3och8jdhqj7kif3velbs4q57nuabyjebl97ebgryqito8to2e76z1mpyfu24rot2jn5o3q4exfdfetddof8s8c8ho6twu1jwc6gmllb5iw9dyol4myunf3df3ncp2kmy3bj1nbxev6pj6sxndeebui0ywezivkgjwfjcl78gponc860qlblo49qfxqy5q66u5mzhq9kfi3eq70mwp7st1wkmmvwhvqq8i929ty0s06isnujolgxxnpomsgowjdp7nijpslufh15bftq1q42wp6gznqaqcxerbcf874nrzn0tjshj2nsq6hfkdl5n3x0k0evprchj695sd34axeqqpiqp1l39f8uqdsawamgyqjbbj9fu6854pge7263r0hvnqttcu8izlcxvu0vey49c1liy1mym28jktrdou8vucy7i5ou9v108p3dhp4t7dgv9zpx19o4i41wrymt6g39bkrdip0o7x6fnk4px53ufhy")
longestRepetition("")
longestRepetition("bbbaaabaaaa")








// function longestRepetition(s) {
//   s = s.split('')
//   obj = {}
//   rep =[]

//   for (let i = 0; i < s.length; i++) {
//     if (s[i])
//     obj[s[i]] = obj[s[i]] + 1 || 1
//   }

//   Object.values(obj).forEach(v => rep.push(v));

//   k = Object.keys(obj).find(key => obj[key] === v)
//   v = rep.sort().reverse()[0]

//   final = [k,v]


//   console.log(s);
//   console.log(obj);
//   console.log(obj);
//   console.log(v);
//   console.log(k);
//   console.log(final);
// }

// longestRepetition("bbbaaabaaaacca")