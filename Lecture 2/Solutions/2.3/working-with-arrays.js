const arr = ['banaani', 'omena', 'mandariini', 'appelsiini', 'kurkku', 'tomaatti', 'peruna']
console.log('(1)')
console.log(arr[2], arr[4], arr.length)

arr.sort()
console.log('(2)')
console.log(arr)

arr.push('sipuli')
console.log('(3)')
console.log(arr)

arr.shift()
console.log('(4)')
console.log(arr)

console.log('(5)')
arr.forEach(item => console.log(item))

console.log('(6)')
arr.forEach(item => {
    if (item.includes('r')) {
        console.log(item)
    }
})