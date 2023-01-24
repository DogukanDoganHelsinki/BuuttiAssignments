const a = 42
const b = 24

/* EXTRA 2 */
// const a = Number(process.argv[2])
// const b = Number(process.argv[3])
// if (Number.isNaN(a) || Number.isNaN(b)) {
//     return console.log('This program requires two numeric parameters!')
// }

const sum = a + b
const difference = a - b
const fraction = a / b
const product = a * b

console.log(`The sum of ${a} and ${b} is ${sum}`)
console.log(`The difference of ${a} and ${b} is ${difference}`)
console.log(`The fraction of ${a} and ${b} is ${fraction}`)
console.log(`The product of ${a} and ${b} is ${product}`)

/* EXTRA */
// const exponential = a ** b
// const modulo = a % b

// console.log(`The exponential of ${a} and ${b} is ${exponential}`)
// console.log(`The modulo of ${a} and ${b} is ${modulo}`)

const average = sum / 2
console.log(`The average of ${a} and ${b} is ${average}`)