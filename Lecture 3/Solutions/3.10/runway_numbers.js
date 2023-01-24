const runwayNumber = (deg) => {
    if (deg < 0) return false
    const normalized = deg % 360
    const remainder = normalized % 10
    const fullTens = (normalized - remainder) / 10
    return remainder < 5 ? fullTens : fullTens + 1
}


// For testing
const deg = Number(process.argv[2])
console.log('Runway number is:', runwayNumber(deg))