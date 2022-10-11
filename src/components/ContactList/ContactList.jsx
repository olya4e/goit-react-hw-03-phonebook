import PropTypes from 'prop-types'
import { ContactItem } from '../ContactItem/ContactItem'
import css from './ContactList.module.css'
export const ContactList = ({contacts, onDeleteContact}) => {
    return (
        <ul className={css.list}>
            {contacts.map((contact) => 
            {
                return <ContactItem key={contact.id} id={contact.id} name={contact.name} number={contact.number} onDelete={onDeleteContact}/>
            }
            )}
            
        </ul>
    )
    
}
ContactList.propTypes = {
    onDeleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(PropTypes.shape(
        {
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
        }
    ))
    
}