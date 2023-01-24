const firstNonRepeatingCharacter = (str) => {
    return str.split('').find((char, index, array) => {
        const previousCharacter = array[index - 1]
        const nextCharacter = array[index + 1]
        return char !== previousCharacter && char !== nextCharacter
    })
}

// For testing
const str = 'aabbooooofffkkccjdddTTT'
console.log(`The first non-repeating character is ${firstNonRepeatingCharacter(str)}`)