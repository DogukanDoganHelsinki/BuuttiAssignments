const oz = 30  // one ounce is 30 ml (about)

const toMillilitersRatio = {
    ml: 1,
    dl: 10,
    l: 1000,
    oz: oz,
    c: 8 * oz,
    pt: 16 * oz,
    qt: 32 * oz,
    gl: 128 * oz,
}

export const converter = (amount, fromUnit, toUnit) => toMillilitersRatio[fromUnit] * amount / toMillilitersRatio[toUnit]

const [amount, fromUnit, toUnit] = process.argv.slice(2)

console.log(converter(process.argv[2], process.argv[3], process.argv[4]))