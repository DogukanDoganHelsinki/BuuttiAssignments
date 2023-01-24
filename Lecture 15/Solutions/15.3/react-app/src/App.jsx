function App() {

    const HeaderComponent = (props) => {
        return <h1>{props.content}</h1>
    }

    const YearComponent = () => {
        const currentYear = new Date().getFullYear()
        return <p>It is year {currentYear}</p>
    }

    return <div className='App'>
        <HeaderComponent content="Hello React!" />
        <YearComponent />
    </div>

}

export default App
