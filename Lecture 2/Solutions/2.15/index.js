const a = Number(process.argv[2])
const b = Number(process.argv[3])
const c = Number(process.argv[4])

if (Number.isNaN(a) || Number.isNaN(b) || Number.isNaN(c)) {
    console.log('Valid input is three numbers')
    process.exit(1)
}

let largest = a
let smallest = a

if (b > largest) {
    largest = b
}

if (b < smallest) {
    smallest = b
}

if (c > largest) {
    largest = c
}

if (c < smallest) {
    smallest = c
}

if (largest === smallest) {
    console.log('All numbers are equal')
} else {
    console.log('Largest is', largest)
    console.log('Smallest is', smallest)
} 