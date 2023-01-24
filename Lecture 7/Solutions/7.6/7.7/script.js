const elements = {
    form: document.getElementById('form'),
    gender: document.getElementsByName('gender'),
    weight: document.getElementById('weight'),
    time: document.getElementById('time'),
    size: document.getElementById('size'),
    ABV: document.getElementById('ABV'), // alcohol by volume
    doses: document.getElementById('doses'),
    resultEl: document.getElementById('result'),
}

const calculate = (event) => {
    // inputs validated with html
    // type = number, fields required (not empty)
    event.preventDefault()

    const litres = (elements.size.value / 1000) * elements.doses.value
    const gramsFactor = 8
    const grams = litres * gramsFactor * elements.ABV.value

    const burning = elements.weight.value / 10
    const gramsLeft = grams - burning * elements.time.value

    // find checked input
    const gender = [...elements.gender].find((input) => input.checked)

    const maleFactor = 0.7
    const femaleFactor = 0.6

    const genderFactor = gender.value === 'male' ? maleFactor : femaleFactor
    const result = gramsLeft / (elements.weight.value * genderFactor)

    elements.resultEl.textContent = `Your BAC is ${result.toFixed(2)}`
}

const resetInputs = () => {
    // inputs reseted with html
    // button type = reset
    elements.resultEl.textContent = 'Not calculated'
}

elements.form.addEventListener('submit', calculate)
elements.form.addEventListener('reset', resetInputs)
