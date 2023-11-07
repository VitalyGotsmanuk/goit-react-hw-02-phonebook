import '../index.css';
import { Component } from 'react';
import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';

import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    name: '',
    number: '',
    filter: '',
  }

  handleAddContact = (contact) => {
    const duplicate = this.state.contacts.some((contacts) => contacts.name === contact.name);

    if (duplicate) {
      alert(`${contact.name} is already in contacts!`);
      return;
    }

    const finalContact = { ...contact, id: nanoid() }

    this.setState({
      contacts: [...this.state.contacts, finalContact]
    })
        
    //console.log("Submit", contact)
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({ [name]: value });
  }

  // filterContacts = (contacts, filter) => {
  //   return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );
  // }


  handleDeleteContact = contactId => {
    //console.log(contactId)
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== contactId),
    });
  };

  render() {   
    return (
      <>
        {/* <h1>2-nd phonebook HW! 👍</h1> */}            
        <Section title='Phonebook' >
          <ContactForm
            //state={this.state}
            onChange={this.handleChange}
            handleAddContact = {this.handleAddContact}
          />
        </Section>

        <Section title='Contacts' >
          <Filter
            filter={this.state.filter}
            onChange={this.handleInputChange}
          />

          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            handleDeleteContact={this.handleDeleteContact}
          />
        </Section>          
      </>
    );
  };
}