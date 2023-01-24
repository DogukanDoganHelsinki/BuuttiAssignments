function ContactDetails({ contact, remove, edit }) {

    return <div className='contactDetails'>
        <h1>{contact.name}</h1>
        {contact.phone && <p><e>Phone: </e>{contact.phone}</p>}
        {contact.email && <p><e>Email: </e>{contact.email}</p>}
        {contact.address && <p><e>Address: </e>{contact.address}</p>}
        {contact.website && <p><e>Website: </e>{contact.website}</p>}
        {contact.notes && <p><e>Notes: </e>{contact.notes}</p>}
        <button onClick={remove}>Remove</button>
        <button onClick={edit}>Edit</button>
    </div>
}

export default ContactDetails