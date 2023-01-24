import { useEffect } from 'react'
import { useState } from 'react'

function ContactEditor({ save, cancel, contact }) {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [website, setWebsite] = useState('')
    const [notes, setNotes] = useState('')
    
    useEffect(() => {
        if (contact) {
            setId(contact.id)
            setName(contact.name)
            setEmail(contact.email)
            setPhone(contact.phone)
            setAddress(contact.address)
            setWebsite(contact.website)
            setNotes(contact.notes)
        }    
    }, [contact])

    const onNameChange = (event) => setName(event.target.value)
    const onEmailChange = (event) => setEmail(event.target.value)
    const onPhoneChange = (event) => setPhone(event.target.value)
    const onAddressChange = (event) => setAddress(event.target.value)
    const onWebsiteChange = (event) => setWebsite(event.target.value)
    const onNotesChange = (event) => setNotes(event.target.value)

    const onSaveClick = () => {
        const contact = { id, name, email, phone, address, website, notes }
        save(contact)
    }

    return <div className='contact'>
        <h1>{contact ? 'Edit Contact' : 'Add Contact'}</h1>
        <label>
            Name <input value={name} onChange={onNameChange} />
        </label>
        <label>
            Email address <input value={email} onChange={onEmailChange} />
        </label>
        <label>
            Phone number <input value={phone} onChange={onPhoneChange} />
        </label>
        <label>
            Address <input value={address} onChange={onAddressChange} />
        </label>
        <label>
            Website <input value={website} onChange={onWebsiteChange} />
        </label>
        <label>
            Notes <textarea value={notes} onChange={onNotesChange}></textarea>
        </label>

        <div>
            <button onClick={onSaveClick}>Save</button>
            <button onClick={cancel}>Cancel</button>
        </div>
    </div>
}

export default ContactEditor