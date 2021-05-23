/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:
Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.

Beware: r must be without duplicates.
*/


a1 = ['xyz', 'live', 'strong']
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
a3 = ['live', 'strong', 1, 'lyal', 'lysh', 'arp']

function inArray(array1, array2) {
    newArr = []
    array2=array2.filter(e => typeof e === 'string')
    for (let i = 0; i < array1.length; i++) {
        let el = array1[i];
        array2.forEach(e => {
            if (e.search(el) !== -1) {
                newArr.push(el)
            }
        })
    }
    newArr = newArr.sort((a, b) => a > b ? 1 : -1).filter((value, index) => newArr.indexOf(value) === index)

    console.log(array1, array2)
    console.log(newArr);
    return newArr

}

inArray(a1, a3)