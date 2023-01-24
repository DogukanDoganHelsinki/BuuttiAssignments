const input = process.argv[2]

const words = input.split(' ')
const allButLastWord = words.slice(0, words.length - 1)
console.log(allButLastWord.join(' '))