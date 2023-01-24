const arr = [1, 4, 6, 32, 25, 16, 31, 15, 10, 2, 7]

let largest = -Infinity

arr.forEach(n => {
    if (n > largest) largest = n
})
console.log('Largest is', largest)


/* Extra */
largest = -Infinity
let secondLargest = -Infinity

arr.forEach(n => {
    if (n > largest) {
        secondLargest = largest
        largest = n
    } else if (n > secondLargest) {
        secondLargest = n
    }
})

console.log('\nExtra:')
console.log('Largest is', largest)
console.log('Second largest is', secondLargest)