const render = (data) => {
    document.getElementById('restaurant-list').replaceChildren()
    data.map(restaurant => {
        const div = document.createElement('div')
        div.innerHTML = restaurant.name
        div.classList.add('clickable')
        div.onclick = () => {
            const div = document.createElement('div')
            div.id = 'restaurant-info'
            const h = document.createElement('h2')
            h.innerText = restaurant.name
            const i = document.createElement('img')
            i.src = './img/google-maps-logo.png'
            i.width = 20
            const a = document.createElement('a')
            a.href = 'https://www.google.fi/maps/place/' + restaurant.address.trim().replace(/\s/g, '+')
            const div2 = document.createElement('div')
            div2.innerText = restaurant.address
            const div3 = document.createElement('div')
            const p = document.createElement('p')
            p.innerText = restaurant.description
            a.appendChild(i)
            div3.replaceChildren(a, div2)
            div.replaceChildren(h, div3, p)
            document.getElementById('restaurant-info').replaceWith(div)
        }
        document.getElementById('restaurant-list').appendChild(div)
    })
}

document.getElementById('search-input').oninput = () => render(restaurants.filter(r => r.name.startsWith(document.getElementById('search-input').value)))
render(restaurants)