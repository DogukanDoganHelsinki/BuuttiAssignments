const a = Number(process.argv[2])
const b = Number(process.argv[3])

let range = []
if (a < b) {
    for (let i = a; i <= b; i++) {
        range = range.concat(i)
    }
} else {
    for (let i = a; i >= b; i--) {
        range = range.concat(i)
    }
}

console.log(range)