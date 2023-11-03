import '../index.css';
import { Component } from 'react';
//import { nanoid } from 'nanoid';

import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';

import { Filter } from './Filter/Filter'
import { ContactList } from './ContactList/ContactList';


export class App extends Component {
  
  state = {
    contacts: [],
    name: ''
  }



  render() {
    return (
      <>
        <h1>2-nd phonebook HW! 👍</h1>
               
        <Section title='Phonebook' >
          <ContactForm
            state = {this.state}
          />
        </Section>

        {/* <Section title='Phonebook' >
          <ContactList
          
          />
        </Section> */}
           
      </>
    );
  };
}
