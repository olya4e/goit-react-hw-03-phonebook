import PropTypes from 'prop-types'
import css from './ContactItem.module.css'
export const ContactItem = ({ id, name, number, onDelete}) => {
    return (
       <>
        <li className={css.item}>
        <span>{name}</span>
        <span>{number}</span>
                <button className={css.deleteBtn} onClick={()=>onDelete(id) } type="button">Delete</button>
        </li>  
        </> 

    )
}
ContactItem.propTypes = {
    
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}