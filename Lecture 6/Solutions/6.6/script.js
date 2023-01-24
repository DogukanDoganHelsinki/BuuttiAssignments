const items = document.querySelector('#items')
const input = document.querySelector('#todo-input')
const removeBtn = document.querySelector('button')

const addItem = () => {
    const item = document.createElement('li')
    item.innerText = input.value
    item.onclick = () => item.classList.toggle('done')
    items.appendChild(item)
    input.value = ''
}

input.onkeypress = (event) => {
    if (event.key === 'Enter' && input.value !== '') {
        addItem()
    }
}

removeBtn.onclick = () => {

    Array.from(items.childNodes).forEach(item => {
        if (item.classList.contains('done')) {
            items.removeChild(item)
        }
    })
}
