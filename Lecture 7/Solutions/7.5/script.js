document.querySelector('button').onclick = () => {
    const name = document.querySelector('#movie-name').value
    const year = document.querySelector('#movie-year').value
    const apiKey = 'c3a0092f'
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${name}&y=${year}`
    axios.get(url).then(response => response.data.Search).then(renderResults)
}

const renderResults = (resultList) => {
    const list = document.createElement('ul')
    document.querySelector('#result').replaceChildren(list)
    resultList.forEach(result => {
        const imdbLink = document.createElement('a')
        imdbLink.href = `https://www.imdb.com/title/${result.imdbID}/`
        imdbLink.innerText = `${result.Title} (${result.Year})`
        const listItem = document.createElement('li')
        listItem.appendChild(imdbLink)
        list.appendChild(listItem)
    })
}