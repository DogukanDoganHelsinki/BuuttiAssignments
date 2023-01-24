const name1 = process.argv[2]
const name2 = process.argv[3]
const name3 = process.argv[4]

const initials = `${name1.substring(0,1)}.${name2.substring(0,1)}.${name3.substring(0,1)}`
console.log(initials)