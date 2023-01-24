const input = process.argv[2]
const reversed = input.split('').reverse().join('')

console.log(input === reversed
    ? `Yes, '${input}' is a palindrome`
    : `No, '${input}' is not a palindrome`
)