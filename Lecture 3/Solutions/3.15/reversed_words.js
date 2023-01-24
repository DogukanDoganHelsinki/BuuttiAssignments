const sentence = process.argv[2]
const words = sentence.split(' ')
const reversedWords = words.map(word => word.split('').reverse().join(''))
const result = reversedWords.join(' ')

console.log(result)