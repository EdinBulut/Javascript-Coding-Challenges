/*
Substitute two equal letters by the next letter of the alphabet (two letters convert to one):

"aa" => "b", "bb" => "c", .. "zz" => "a".
The equal letters do not have to be adjacent.
Repeat this operation until there are no possible substitutions left.
Return a string.

Example:

let str = "zzzab"
    str = "azab"
    str = "bzb"
    str = "cz"
return "cz"
Notes
The order of letters in the result is not important.
The letters "zz" transform into "a".
There will only be lowercase letters.
*/


function lastSurvivors(str) {
    let index;
    let letter;
    let letterCode = 0;
    let secondIndex;

    helper = () => {
        strArr = str.split('')
        for (let i = 0; i < strArr.length; i++) {
            if (str.indexOf(strArr[i], str.indexOf(strArr[i]) + 1) !== -1) {
                letter = strArr[i]
                letterCode = strArr[i].charCodeAt()
                if (letterCode === 122) letterCode = 96
                break
            }
        }

        if(letterCode !== 0){
        index = str.indexOf(letter);
        secondIndex = str.indexOf(letter, str.indexOf(letter) + 1);
        strArr.splice(secondIndex, 1)
        strArr.splice(index, 1, String.fromCharCode(letterCode + 1))

        str = strArr.join('')
        // console.log(str)

        strArr = str.split('')
        for (let i = 0; i < strArr.length; i++) {
            if (str.indexOf(strArr[i], str.indexOf(strArr[i]) + 1) !== -1) {
                helper()
            }
        }}
        // console.log(letter, letterCode, index, secondIndex);
    }

    helper()
    console.log(str)
    return str
}


lastSurvivors("abaa")
lastSurvivors("zzzab")