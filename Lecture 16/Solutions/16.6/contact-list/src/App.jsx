import { useState } from 'react'
import ContactEditor from './ContactEditor'
import ContactDetails from './ContactDetails'
import './App.css'

function App() {
    const [view, setView] = useState('')
    const [contacts, setContacts] = useState([])
    const [selected, setSelected] = useState(null)
    const [search, setSearch] = useState('')


    const saveContact = (contact) => {
        if (contact.id) {
            setContacts(contacts.map(oldContact => {
                return oldContact.id === contact.id ? contact : oldContact 
            }))
        } else  {
            const newContact = { ...contact, id: contacts.length + 1 }
            setContacts(contacts => contacts.concat(newContact))
        }
    
        setView('')
    }

    const openAddContact = () => {
        setSelected(null)
        setView('ContactEditor')
    }
    const closeAddContact = () => setView('')

    const selectContact = (contact) => () => {
        setSelected(contact)
        setView('ContactDetails')
    }

    const removeSelected = () => {
        setContacts(contacts => contacts.filter(contact => contact !== selected))
        setView('')
    }

    const editSelected = () => {
        setView('ContactEditor')
    }


    const Contacts = () => {
        if (view === 'ContactDetails') return <ContactDetails
            contact={selected}
            remove={removeSelected}
            edit={editSelected} />
        if (view === 'ContactEditor') return <ContactEditor 
            contact={selected}
            save={saveContact} 
            cancel={closeAddContact} />
        return <div><h1>Contact Manager</h1></div>
    }

    console.log('contacts', contacts)

    return <div className='App'>
        <div className='contacts'>

            <input value={search} onChange={(event) => setSearch(event.target.value)} />
            <div className='contactList'>
                {contacts
                    .filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()))
                    .map(contact => <div key={contact.id}
                        onClick={selectContact(contact)}>
                        {contact.name}
                    </div>)}
            </div>

            <button onClick={openAddContact}>Add Contact</button>
        </div>
        <div className='details'>
            <Contacts />
        </div>
    </div>
}

export default App
