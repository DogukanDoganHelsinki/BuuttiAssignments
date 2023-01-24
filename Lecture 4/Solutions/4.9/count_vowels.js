const countVowels = (str) => str.split('').reduce((acc, cur) => 'aeiouy'.includes(cur) ? acc + 1 : acc, 0)

console.log(countVowels('abracadabra'))