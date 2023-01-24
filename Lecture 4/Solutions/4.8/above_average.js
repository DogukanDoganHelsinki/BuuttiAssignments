const aboveAverage = (arr) => {
    const average = arr.reduce((acc, cur) => acc + cur, 0) / arr.length
    return arr.filter(item => item > average)
}

console.log(aboveAverage([1, 5, 9, 3]))