const students = [
    { name: 'Markku', score: 99 },
    { name: 'Karoliina', score: 58 },
    { name: 'Susanna', score: 69 },
    { name: 'Benjamin', score: 77 },
    { name: 'Isak', score: 49 },
    { name: 'Liisa', score: 89 },
]

let lowestScoringStudent = { score: Infinity }
let highestScoringStudent = { score: -Infinity }
let totalScore = 0

for (const student of students) {
    if (student.score > highestScoringStudent.score) highestScoringStudent = student
    if (student.score < lowestScoringStudent.score) lowestScoringStudent = student
    totalScore += student.score
}

const averageScore = totalScore / students.length

console.log(`Highest scoring student was ${highestScoringStudent.name}`)
console.log(`Lowest scoring student was ${lowestScoringStudent.name}`)
console.log(`The average was ${averageScore}. The students that socred above the average were`)

for (const student of students) {
    if (student.score > averageScore) console.log(student.name)
}

function getGrade(score) {
    if (score < 40) return 1
    if (score < 60) return 2
    if (score < 80) return 3
    if (score < 95) return 4
    return 5
}

for (const student of students) {
    student.grade = getGrade(student.score)
}

console.log('\nGraded students', students)