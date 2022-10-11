import PropTypes from 'prop-types'
import css from './ContactForm.module.css'
export  const ContactForm =({onSubmit, onChange})=>{    
        return (
            <form onSubmit={onSubmit} className={css.form}>
                <label className={css.label}>Name</label>
                <input 
                className={css.input}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter name"
                onChange={onChange}
                />
                <label>Phone number</label>
                <input
                className={css.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                placeholder="Enter phone number"
                onChange={onChange}
                />
                <button className={ css.button} type="submit"> Add contact</button>

            </form>
        )
    
}
ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
}