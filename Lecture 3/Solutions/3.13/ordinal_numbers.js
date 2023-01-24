const competitors = ['Julia', 'Mark', 'Spencer', 'Ann', 'John', 'Joe']
const ordinals = ['st', 'nd', 'rd', 'th']

const result = competitors.map((competitor, i) => {
    const ordinal = i < 3 ? ordinals[i] : ordinals[3]
    return (i + 1) + ordinal + ' competitor was ' + competitor
})

console.log(result)