function App() {

    const NameList = (props) => {
        return props.names.map((name, i) => {
            const key = i + name
            const content = i % 2 === 0 ? <b>{name}</b> : <i>{name}</i>
            return <div key={key}>{content}</div>
        })
    }

    const nameList = ['Ari', 'Jari', 'Kari', 'Sari', 'Mari', 'Sakari', 'Jouko']

    return <NameList names={nameList} />
}

export default App