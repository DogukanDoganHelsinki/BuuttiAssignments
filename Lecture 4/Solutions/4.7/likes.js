function likes(arr) {
    if (arr.length === 0) return 'No one likes this'
    if (arr.length === 1) return arr[0] + ' likes this'
    if (arr.length === 2) return arr[0] + ' and ' + arr[1] + ' like this'
    if (arr.length === 3) return arr[0] + ', ' + arr[1] + ' and ' + arr[2] + ' like this'
    return arr[0] + ', ' + arr[1] + ' and ' + (arr.length - 2) + ' others like this'
}


const testArr = ['Alex', 'Linda', 'Mark', 'Max', 'Emma', 'Tim', 'Rachel']
for (let i = 0; i < testArr.length; i++) console.log(likes(testArr.slice(0,i)))