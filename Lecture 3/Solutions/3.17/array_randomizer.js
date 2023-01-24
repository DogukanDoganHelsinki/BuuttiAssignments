const arr = [2, 4, 5, 6, 8, 10, 14, 18, 25, 32]

const randomIndex = (length) => Math.floor(Math.random() * length)

const result = []

while (arr.length > 0) {
    const i = randomIndex(arr.length)
    result.push(arr[i])
    arr.splice(i, 1)
}

console.log(result)