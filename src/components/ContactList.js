import React, { Component } from 'react';
import contacts from './../contacts.json';
import Card from './Card';

class ContactList extends Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    const contact = contacts[Math.floor(Math.random() * contacts.length)];
    let contacts = [...this.state.contacts];
    contacts.push(contacts);
  };

  deleteContact = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => {
      return contact.id !== id;
    });

    this.setState({ contacts: updatedContacts });
  };

  render() {
    return (
      <ul>
        {this.state.contacts.map((contactObj) => {
          return (
            <Card
              key={contactObj.id}
              {...contactObj}
              removeContact={this.deleteContact}
              addContact={this.addRandomContact}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
