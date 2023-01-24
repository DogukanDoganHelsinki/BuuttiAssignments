const firstLettersToUpperCase = (input) => {
    let output = ''
    const words = input.split(' ')
    for (let i = 0; i < words.length; i++) {
        const word = words[i]
        const firstLetter = word.charAt(0)
        const endOfWord = word.substring(1)
        output += firstLetter.toUpperCase() + endOfWord + ' ' 
    }
    // remove last space before returning
    return output.trim()
}


// For testing
const str = 'I love the smell of napalm in the morning'
console.log(firstLettersToUpperCase(str))