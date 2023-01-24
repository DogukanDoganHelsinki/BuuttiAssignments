const lottery = () => {
    let potentialNumbers = [...Array(41).keys()].slice(1)
    let lotteryNumbers = []

    for (let i = 0; i < 7; i++) {
        const randomIndex = Math.floor(Math.random() * potentialNumbers.length)
        const removedItemsArray = potentialNumbers.splice(randomIndex, 1)
        lotteryNumbers = lotteryNumbers.concat(removedItemsArray[0])
    }

    return lotteryNumbers
}

const numbers = lottery()
console.log(numbers)


// Extra solution
const suspenseReveal = (numbers, index) => {
    console.log(numbers[index])
    if (index > 0) {
        setTimeout(() => suspenseReveal(numbers, index - 1), 1000)
    }
}
suspenseReveal(numbers, numbers.length - 1)