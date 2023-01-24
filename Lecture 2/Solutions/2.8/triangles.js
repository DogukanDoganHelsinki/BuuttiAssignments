const n = 6

console.log('Level 1:')
for (let i = 1; i <= n; i++) {
    console.log('&'.repeat(i))
}

console.log('Level 2:')
const baseWidth = 1 + 2 * (n - 1)
for (let i = 0; i < n; i++) {
    const triangleWidth =  1 + 2*i
    const spaceWidth = (baseWidth - triangleWidth) / 2
    console.log(' '.repeat(spaceWidth) + '&'.repeat(triangleWidth))
}

console.log('Level 3 (1):')
let x = 1
while (x <= n) {
    console.log('&'.repeat(x++))
}

console.log('Level 3 (2):')
let level = 1
while (level <= n) {
    console.log(' '.repeat(n - level) + '&'.repeat(2 * level - 1))
    level++
}