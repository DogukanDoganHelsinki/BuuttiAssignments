/**
 * Generates a random integer between min (inclusive) and max (exclusive).
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns integer
 */
function randomNumber(min, max) {
    //a random number between 0 (inclusive),  and 1 (exclusive)
    const randomNumber = Math.random()
    const range = max - min
    const scaledRandomNumber = range * randomNumber
    const scaledRandomInteger = Math.floor(scaledRandomNumber)
    const adjustedRandomInteger = min + scaledRandomInteger

    return adjustedRandomInteger

}

// For testing
const a = Number(process.argv[2])
const b = Number(process.argv[3])
console.log(randomNumber(a,b))