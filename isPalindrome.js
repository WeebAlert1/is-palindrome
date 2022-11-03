// Write your code below
function isPalindrom(word) {
    let j = word.length -1
    for (let i = 0; i < (word.length -1 ) / 2; i++) {
        if (word[i] !== word[j]) {
            return false
        }
        j --
    }
    return true;
}

console.log(isPalindrom('Highnoon'));

console.log(isPalindrom('racecar'));