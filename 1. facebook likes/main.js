/*
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.
Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

likes [] -- must be "no one likes this"
likes ["Peter"] -- must be "Peter likes this"
likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this"
*/


names1 = ['Jacob', 'Alex', 'John', 'Bob']
names2 = ['Jacob', 'Alex', 'John']
names3 = ['Jacob', 'Alex']
names4 = ['Jacob']
names5 = []

function likes(names) {
  
  if (names.length > 3) {
    
    sentence = names.splice(0, 2).concat(`and ${names.length} others`).join(', ').split(' ')
    sentence[1] = sentence[1].replace(/,/ig,'')
    sentence = sentence.concat('like this').join(' ')

  } else if (names.length === 3) {

    sentence = names.join(', ').split(' ').reverse()
    sentence[1] = sentence[1].replace(/,/ig,' and')
    sentence = sentence.reverse().concat('like this').join(' ')

  } else if (names.length === 2) {
    sentence = names.join(' and ').split(' ').concat('like this').join(' ')
  } else if (names.length === 1){
    sentence = `${names[0]} likes this`
  } else {
    sentence = 'no one likes this'
  }
  console.log(sentence);
}

likes(names1)
likes(names2)
likes(names3)
likes(names4)
likes(names5)

// function likes(names) {
//   switch(names.length){
//     case 0:
//       return "no one likes this";
//     case 1:
//       return names[0] + " likes this";
//     case 2:
//       return names[0] + " and " + names[1] + " like this";
//     case 3:
//       return names[0] + ", " + names[1] + " and " + names[2] + " like this";
//     default: 
//       return names[0] + ", " + names[1] + " and " + (names.length-2) + " others like this";
//   }
// }
