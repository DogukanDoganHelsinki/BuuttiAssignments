const numberOfSheep = Number(process.argv[2])

let result = ''
for (let i = 1; i <= numberOfSheep; i++) {
    result += i + ' sheep...'
}

console.log(result)
