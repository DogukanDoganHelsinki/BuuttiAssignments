const img = document.querySelector('img')

const uselessImageSpin = () => img.style.transform = `rotate(${3600 * Math.random()}deg)`

img.onclick = uselessImageSpin
window.onload = uselessImageSpin