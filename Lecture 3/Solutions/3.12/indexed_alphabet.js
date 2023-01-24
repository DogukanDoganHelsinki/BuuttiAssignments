const alphabet = 'abcdefghijklmnopqrstuvwxyzåäö'
const charIndex = alphabet.split('').reduce((acc, cur, i) => {
    return {...acc, [cur]: i + 1}
}, {})

const word = process.argv[2]
const chars = word.split('')
const indexes = chars.map(char => charIndex[char])
const indexWord = indexes.join('')

console.log(indexWord)


// Alternate version
const result = process.argv[2].split('').map(c => alphabet.indexOf(c) + 1).join('')
console.log(result)