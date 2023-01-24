const newJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokes.length)
    document.querySelector('#joke').innerText = jokes[randomIndex]
}

document.querySelector('button').onclick = newJoke

newJoke()
