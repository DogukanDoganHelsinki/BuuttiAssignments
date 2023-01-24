const parameter = process.argv[2]
const input = process.argv[3]

if (parameter === 'lower') {
    console.log(input.toLowerCase())
} else if (parameter === 'upper') {
    console.log(input.toUpperCase())
}