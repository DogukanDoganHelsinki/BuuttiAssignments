import { useLoaderData } from 'react-router-dom'
import contacts from './contacts'

export function loader({ params }) {
    console.log('loader', params)
    const id = Number(params.id)
    const contact = contacts.find(contact => contact.id === id)
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
