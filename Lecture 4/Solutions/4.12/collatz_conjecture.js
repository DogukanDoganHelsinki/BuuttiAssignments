const collatz = (n) => {
    if (n < 1 || !Number.isInteger(n)) {
        return undefined
    } 

    let count = 0
    while (n !== 1) {
        n = n % 2 === 0 ? n / 2 : 3 * n + 1
        count = count + 1
    }
    return count
}

// const n = Number(process.argv[2])
// console.log('Number of steps:', collatz(n))

[1,2,3,4,5,6,7,8,9,10].forEach(x => console.log(collatz(x)))