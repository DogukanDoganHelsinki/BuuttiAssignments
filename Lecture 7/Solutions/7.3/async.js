const getValue = function () {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({ value: Math.random() })
        }, Math.random() * 1500)
    })
}

const printValuesWithAwait = async () => {
    const value1 = await getValue()
    const value2 = await getValue()
    console.log(`Using await: Value 1 is ${value1.value} and value 2 is ${value2.value}`)
}


const printValuesWithThen = () => {
    let value1
    getValue()
        .then(result => {
            value1 = result.value
            return getValue()
        })
        .then(result => {
            console.log(`Using then: Value 1 is ${value1} and value 2 is ${result.value}`)

        })

}

printValuesWithAwait()
printValuesWithThen()