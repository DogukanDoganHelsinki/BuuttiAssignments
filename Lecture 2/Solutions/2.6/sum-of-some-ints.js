const n = 42

let forSum = 0
let forNumbers = ''
for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        forSum += i
        forNumbers += '+' + i
    }
}
console.log('Using for loop:')
console.log(`${forNumbers.substring(1)} = ${forSum}`)

let whileSum = 0
let i = 1
let whileNumbers = ''
while (i <= n) {
    if (i % 3 == 0 || i % 5 == 0) {
        whileSum += i
        whileNumbers += '+' + i
    }   
    i++
}
console.log('Using while loop:')
console.log(`${whileNumbers.substring(1)} = ${whileSum}`)