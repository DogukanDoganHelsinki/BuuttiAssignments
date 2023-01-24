const str1 = 'Why did mr. Milo cross the street?'
const str2 = 'Doc said not to lift anything heavy.'

const sumStr = str1 + str2

console.log('The length of str1 is ' + str1.length)
console.log('The length of str2 is ' + str2.length)


const averageLength = (str1.length + str2.length) / 2

if (str1.length < averageLength) console.log(str1)
if (str2.length < averageLength) console.log(str2)
if (sumStr.length < averageLength) console.log(sumStr)