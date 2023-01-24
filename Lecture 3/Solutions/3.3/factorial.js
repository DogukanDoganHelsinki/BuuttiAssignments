const factorial = (n) => {
    if (n === 1) {
        return n
    } else {
        return n * factorial(n-1)
    }
}

const n = Number(process.argv[2])
console.log(`Factorial of ${n} is ${factorial(n)}`)