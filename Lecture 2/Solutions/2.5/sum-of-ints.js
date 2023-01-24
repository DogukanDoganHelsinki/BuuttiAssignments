const n = 42

let forSum = 0
for (let i = 1; i <= n; i++) {
    forSum += i
}
console.log('Sum using for loop:', forSum)

let whileSum = 0
let i = 1
while (i <= n) {
    whileSum += i++
}
console.log('Sum using while loop:', whileSum)