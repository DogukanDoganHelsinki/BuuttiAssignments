const boardSize = 4

const topLeft = 0
const topRight = boardSize - 1
const bottomLeft = boardSize ** 2 - boardSize
const bottomRight = boardSize ** 2 - 1

const board = document.querySelector('#board')

/**
 * Creates the game pieces, randomizes them, and populates the 
 * game board with the pieces. Creates the empty piece as the 
 * last piece. Sets up CSS grid for appropriate sized board.
 */
const createBoard = () => {
    [...Array(boardSize ** 2 - 1).keys()] // Array [0, ..., 15]
        .map(i => {
            const piece = document.createElement('div')
            piece.classList.add('piece')
            piece.innerText = i + 1
            // piece.style.backgroundImage = `url('./img/${i}.jpg')`    // Extra
            // piece.id = i                                             // Extra
            piece.onclick = (event) => movePiece(event.target)
            return piece
        })
        // .sort((a, b) => 0.5 - Math.random()) // Shuffle
        .forEach(piece => board.appendChild(piece))

    const empty = document.createElement('div')
    empty.classList.add('empty', 'piece')
    empty.id = bottomRight
    board.appendChild(empty)

    const styleStr = 'auto '.repeat(boardSize).trim()
    board.style.gridTemplateRows = styleStr
    board.style.gridTemplateColumns = styleStr
}

/**
 * Checks if given indexes are adjacent in the game board.
 * 
 * @param {integer} pieceIndex the index of the piece 
 * @returns true or false
 */
const areAdjacent = (pieceIndex, emptyIndex) => {
    const distanceToEmpty = emptyIndex - pieceIndex
    // Corner cases
    if (pieceIndex === topLeft) return [1, boardSize].includes(distanceToEmpty)
    if (pieceIndex === topRight) return [-1, boardSize].includes(distanceToEmpty)
    if (pieceIndex === bottomLeft) return [1, -boardSize].includes(distanceToEmpty)
    if (pieceIndex === bottomRight) return [-1, -boardSize].includes(distanceToEmpty)

    // Side cases
    if (pieceIndex <= topRight) return [1, -1, boardSize].includes(distanceToEmpty) // Top row
    if (pieceIndex >= bottomLeft) return [1, -1, -boardSize].includes(distanceToEmpty) // Bottom row
    if (pieceIndex % boardSize === 0) return [1, boardSize, -boardSize].includes(distanceToEmpty) // Left column
    if (pieceIndex % boardSize === boardSize - 1) return [-1, boardSize, -boardSize].includes(distanceToEmpty) // Right column

    // Center cases
    return [1, -1, boardSize, -boardSize].includes(distanceToEmpty)

}

/**
 * Swaps the empty piece and the given piece, iff the pieces
 * are adjacent to each other in the board. Checks if the pieces
 * are in order and if so, finishes the game.
 * 
 * @param {DIV node} piece 
 * @returns 
 */
const movePiece = (piece) => {
    const pieces = Array.from(board.children)
    const index = pieces.indexOf(piece)
    const emptyPiece = document.querySelector('.empty')
    const indexOfEmpty = pieces.indexOf(emptyPiece)

    if (!areAdjacent(index, indexOfEmpty)) return null

    const empty = document.querySelector('.empty')
    board.replaceChild(piece, empty)
    board.insertBefore(empty, board.childNodes[index])

    if (piecesAreInOrder()) finishGame()
}

const piecesAreInOrder = () => {
    for (let i = 0; i < board.children.length - 1; i++) {
        if (Number(board.children[i].innerText) !== i + 1) return false
        // if (Number(board.children[i].id) !== i) return false         // Extra
    }
    return true
}

/**
 * Finishes the game by adding the last piece to the empty slot,
 * removing all onclick listeners and adding a 
 * message below the game board.
 */
const finishGame = () => {
    const empty = document.querySelector('.empty')
    const lastPiece = document.createElement('div')
    lastPiece.classList.add('piece')
    lastPiece.innerText = boardSize ** 2
    // lastPiece.style.backgroundImage = `url('img/15.jpg')`        // Extra
    board.replaceChild(lastPiece, empty)

    Array.from(board.childNodes).forEach(piece => {
        piece.onclick = null
    })
    const message = document.createElement('p')
    message.innerText = 'You finished the game!'
    document.querySelector('body').appendChild(message)
}




window.onload = createBoard