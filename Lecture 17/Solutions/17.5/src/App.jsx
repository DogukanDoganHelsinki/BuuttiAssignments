import { useState } from 'react'

const appStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
}

export default function App() {
    const [boxStyle, setBoxStyle] = useState({
        border: '2px solid black',
        width: 300,
        height: 150,
        backgroundColor: '#000000'
    })
    const [color, setColor] = useState('#000000')

    const newColor = () => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        setColor(randomColor)
        setBoxStyle(boxStyle => ({ ...boxStyle, backgroundColor: randomColor }))
    }

    return <div className='App' style={appStyle}>
        <p>{color}</p>
        <div id='color' onClick={newColor} style={boxStyle}></div>
    </div>
}

