const isPrime = (n) => {
    if (!Number.isInteger(n) || n < 3) return false

    for (let i = 2; i < n; i++) {
        if (n % i ===0) return false
    }
    return true
}

// For testing
const n = Number(process.argv[2])
console.log(isPrime(n) ? 'is a prime' : 'is not a prime')