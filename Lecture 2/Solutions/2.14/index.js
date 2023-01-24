const a = process.argv[2]
const b = process.argv[3]
const restOfArgs = process.argv.slice(4).join(' ')

if (a > b) {
    console.log(`${a} is greater`)
} else if (a < b) {
    console.log(`${b} is greater`)
} else {
    if (restOfArgs === 'hello world') {
        console.log('Yay, you guessed the password')
    } else {
        console.log('They are equal')
    }
}