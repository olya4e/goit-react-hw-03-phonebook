import { Component } from "react"
import { nanoid } from "nanoid";
import { ContactForm } from './ContactForm/ContactForm '
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter";
import { LOCALSTORAGE_KEY } from "../constants/constants";
import css from './ContactForm/ContactForm.module.css'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
    if (parsedContacts) {
      this.setState({
      contacts: parsedContacts
    })
    }
    
}

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(this.state.contacts))
    }
  }

  addContact = (name, number) => {
    let newContact = {
      id: nanoid(),
      name: name,
      number: number,
    }
    let isAdded = false
    const { contacts } = this.state
    
      contacts.map((contact) =>{
      if (contact.name.toLowerCase() === name.toLowerCase()) {
        isAdded = true
        alert(`${name} is already in contacts`)
      }
      return null
      })
       if (isAdded) {
      return
    }
    else {
      return this.setState(prevState => ({
          contacts:[...prevState.contacts, newContact]
        }))}
    
   
    }

  handleChangeInput = (e) => {
      const{name, value}=e.target
      this.setState({
          [name]: value
      })
    }
  handleSubmitForm = (e) => {
    e.preventDefault()
    const { name, number } = e.target.elements
    this.addContact(name.value, number.value)
    name.value = ''
    number.value = ''
  }
  
  
  handleChangeFilter = (e) => {
    this.setState({
     filter: e.target.value
   })
  }
  onFilterContact = () => {
  const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    if (contacts) {
      return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
    );
    }
  }
  onDeleteContact = (deelteContact) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== deelteContact)
    }))
  }

  render() {
    const {filter} = this.state
    return (
      <div className={css.container}>
  <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleSubmitForm} onChange={this.handleChangeInput}/>
        <h2>Contacts</h2>
        <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />
        <ContactList contacts={this.onFilterContact()} onDeleteContact={ this.onDeleteContact} /> 
      </div> 
    )
  }

  
};
