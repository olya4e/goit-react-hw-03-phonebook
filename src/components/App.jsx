import css from './ContactForm/ContactForm.module.css'
import { Component } from "react"
import { ContactForm } from './ContactForm/ContactForm '
import { ContactList } from "./ContactList/ContactList"
import { Filter } from "./Filter/Filter";
import { nanoid } from "nanoid";


export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
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
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
    );
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
