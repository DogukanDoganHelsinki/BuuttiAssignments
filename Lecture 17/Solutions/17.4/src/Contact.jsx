import { useLoaderData } from 'react-router-dom'
import contacts from './contactList'

const throw404Error = () => {
    const error = new Error('404 - Not Found')
    error.status = 404
    throw error
}

export function loader({ params }) {
    const id = Number(params.id)
    const contact = contacts.find(contact => contact.id === id)
    if (contact === undefined) throw404Error()
    return contact
}

export default function Contact() {
    const { name, email, phone } = useLoaderData()

    return <div className='Contact'>
        <h1>{name}</h1>
        <p>{email}</p>
        <p>{phone}</p>
    </div>
}
