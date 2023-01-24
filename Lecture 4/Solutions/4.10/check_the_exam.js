const checkExam = (correctAnswers, studentAnswers) => {
    const total = correctAnswers.reduce((acc, cur, i) => {
        return acc + scoreAnswer(cur, studentAnswers[i])
    }, 0)
    return total < 0 ? 0 : total
}

const scoreAnswer = (correct, student) => {
    if (student === correct) return 4
    if (student === '') return 0
    return -1
}

console.log(checkExam(['a', 'a', 'b', 'b'], ['a', 'c', 'b', 'd'])) // 6  
console.log(checkExam(['a', 'a', 'c', 'b'], ['a', 'a', 'b',  ''])) // 7  
console.log(checkExam(['a', 'a', 'b', 'c'], ['a', 'a', 'b', 'c'])) // 16  
console.log(checkExam(['b', 'c', 'b', 'a'], ['',  'a', 'a', 'c'])) // 0 