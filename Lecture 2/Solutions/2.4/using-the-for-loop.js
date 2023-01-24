let seq1 = ''
for (let i = 0; i < 11; i++) {
    seq1 += i * 100 + ' '
}
console.log('1)', seq1)

let seq2 = ''
for (let i = 0; i < 8; i++) {
    seq2 += 2 ** i + ' '
}
console.log('2)', seq2)

let seq3 = ''
for (let i = 1; i < 6; i++) {
    seq3 += 3 * i + ' '
}
console.log('3)', seq3)

let seq4 = ''
for (let i = 9; i >= 0; i--) {
    seq4 += i + ' '
}
console.log('4)', seq4)

let seq5 = ''
for (let i = 1; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        seq5 += i + ' '
    }
}
console.log('5)', seq5)

let seq6 = ''
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
        seq6 += j + ' '
    }
}
console.log('6)', seq6)
