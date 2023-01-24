const joinArrays = (arr1, arr2) => {
    let result = []

    arr1.concat(arr2).forEach(element => {
        if (!result.includes(element)) {
            result = result.concat(element)     // Using the concat method
            // result = [ ...result, element]      // Using the spread syntax
        }
    })
    return result
}


// For testing
const arr1 = [1,2,3,4,4]
const arr2 = [3,4,5,6,6]

console.log('Joined array:', joinArrays(arr1, arr2))