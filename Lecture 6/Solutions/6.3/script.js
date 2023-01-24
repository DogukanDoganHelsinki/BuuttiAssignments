let gameBoardSize = 3

const createGameBoard = (size) => {
    if (size < 1) size = 1 
    gameBoardSize = size
    const game = document.querySelector('#game')
    game.replaceChildren()

    for (let i = 0; i < size ** 2; i++) {
        const square = document.createElement('div')
        square.classList.add('square')
        square.id = 'square' + i
        square.onclick = () => play(i)
        game.appendChild(square)
    }
    const styleStr = '50px '.repeat(size).trim()
    game.style['grid-template-rows'] = styleStr
    game.style['grid-template-columns'] = styleStr
}

let player = 'X'
const play = (index) => {
    console.log('play', index)
    const square = document.querySelector('#square' + index)
    if (square.textContent === '') {
        square.textContent = player
        player = player === 'X' ? 'O' : 'X'
    }
}

document.querySelector('#plus').onclick = () => createGameBoard(gameBoardSize + 1)
document.querySelector('#reset').onclick = () => createGameBoard(gameBoardSize)
document.querySelector('#minus').onclick = () => {
    if (gameBoardSize > 3) {
        createGameBoard(gameBoardSize - 1)
    }
}

createGameBoard(gameBoardSize)