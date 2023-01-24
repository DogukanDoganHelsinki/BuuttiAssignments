function calculator(operator, num1, num2) {
    switch (operator) {
        case '+': return num1 + num2
        case '-': return num1 - num2
        case '*': return num1 * num2
        case '/': return num1 / num2
        default: return 'Can\'t do that!'
    }
}


const operator = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])
console.log(calculator(operator, num1, num2))