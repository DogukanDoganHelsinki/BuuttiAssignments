import { Link, Outlet } from 'react-router-dom'
import contacts from './contactList'
import './Contacts.css'

export default function Contacts() {

    return <div className='Contacts'>
        <nav>
            {contacts.map(({ id, name }) => {
                return <Link key={id} to={id.toString()}>{name}</Link>
            })}
        </nav>

        <div className='Contact'>
            <Outlet />

        </div>
    </div>
}