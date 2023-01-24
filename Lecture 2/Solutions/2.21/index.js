const targetChar = process.argv[2]
const substituteChar = process.argv[3]
const input = process.argv[4]

const output = input.replaceAll(targetChar, substituteChar)
console.log(output)