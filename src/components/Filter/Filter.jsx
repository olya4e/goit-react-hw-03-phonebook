import PropTypes from 'prop-types'
import css from './Filter.module.css'
export const Filter = ({value, handleChangeFilter}) => {  
    return (
        <input
        className={css.input}
        type="text"
        name="name"
        value={value}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Find contact"
        onChange={handleChangeFilter}
        />
    )
}
Filter.propTypes = {
    value: PropTypes.string.isRequired,
    handleChangeFilter: PropTypes.func.isRequired,
}