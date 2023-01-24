export const summation = (n) => {
    const max = Number(n)
    if (Number.isNaN(max)) return NaN

    let sum = 0
    for (let i = 1; i <= max; i++){
        sum = sum + i
    }
    return sum
}

const n = Number(process.argv[2])
console.log(summation(n))