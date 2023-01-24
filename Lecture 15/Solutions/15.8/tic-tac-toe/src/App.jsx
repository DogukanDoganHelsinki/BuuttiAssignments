import { useState } from 'react'
import './App.css'

const winningStreaks = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const App = () => {
    const [board, setBoard] = useState(new Array(9).fill(null))
    const [game, setGame] = useState({ gameOver: false, winner: false, player: 'X', roundsPlayed: 0 })

    const onClick = (index) => () => {
        if (board[index] !== null) return null
        if (game.gameOver) return null

        const newBoard = board.map((square, i) => i === index ? game.player : square)
        // Check if current player won with this move
        const playedSquares = newBoard.reduce((acc, cur, i) => cur === game.player ? acc.concat(i) : acc, [])
        const isWinningMove = winningStreaks.some(streak => streak.every(index => playedSquares.includes(index)))
        if (isWinningMove) {
            setGame(game => ({ gameOver: true, winner: game.player }))
        } else {
            if (game.roundsPlayed === 8) {
                setGame({ gameOver: true, winner: false })
            } else {
                setGame(game => ({ ...game, player: game.player === 'X' ? 'O' : 'X', roundsPlayed: game.roundsPlayed + 1 }))
            }
        }

        setBoard(newBoard)
    }

    const reset = () => {
        setBoard(new Array(9).fill(null))
        setGame({ gameOver: false, winner: false, player: 'X', roundsPlayed: 0 })
    }

    const gameStatus = () => {
        if (game.gameOver && !game.winner) return 'Game Over!'
        if (game.gameOver) return 'The Winner is ' + game.winner
        return 'Next Player: ' + game.player
    }

    return <div className='App'>
        <div className='menu'>
            <span>{gameStatus()} </span>
            <button onClick={reset}>Reset</button>
        </div>

        <div className='board'>
            {board.map((square, i) => {
                return <div key={i} id={i} onClick={onClick(i)}>{square}</div>
            })}
        </div>

    </div>
}

export default App
