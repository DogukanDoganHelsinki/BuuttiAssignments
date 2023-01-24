const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]

const divisibleByThree = arr.filter(n => n % 3 === 0)
console.log('Elements divisible by three:', divisibleByThree)

const multipliedByTwo = arr.map(n => n * 2)
console.log('Elements multiplied by two:', multipliedByTwo)

const sum = arr.reduce((acc, cur) => acc + cur, 0)
console.log('Sum of all elements:', sum)