// With recursion
const numberSequenceWithRecursion = (n) => {
    const initial = [0,1]
    if (n < 3) return initial.slice(0,n)
    const recursion = (sequence) => {
        if (sequence.length === n) return sequence
        const previous1 = sequence[sequence.length - 1]
        const previous2 = sequence[sequence.length - 2]
        return recursion(sequence.concat(previous1 + previous2))
    }
    return recursion(initial)
}

// Without recursion
const numberSequenceWithLoop = (n) => {
    let sequence = [0,1]
    if (n < 3) return sequence.slice(0,n)
    while (sequence.length < n) {
        const previous1 = sequence[sequence.length - 1]
        const previous2 = sequence[sequence.length - 2]
        sequence = sequence.concat(previous1 + previous2)
    }
    return sequence
}

//For testing
const n = Number(process.argv[2]) || 0
console.log('With Recursion: ', numberSequenceWithRecursion(n))
console.log('With While Loop:', numberSequenceWithLoop(n))