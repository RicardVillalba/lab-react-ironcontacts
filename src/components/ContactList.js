import React, { Component } from 'react';
import contacts from './../contacts.json';
import Card from './Card';

class ContactList extends Component {
  state = {
    contacts: contacts.splice(0, 5),
  };

  addRandomContact = () => {
    const contact = this.state.contacts[Math.floor(Math.random() * this.state.contacts.length)];
    let contacts = [...this.state.contacts];
    contacts.push(contacts);

    this.setState({ contacts: contact });
  };

  sortOrdered = () => {
    let orderedList = this.state.contacts.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });
    this.setState({ contacts: orderedList });
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
              orderContactList={this.sortOrdered}
            />
          );
        })}
      </ul>
    );
  }
}

export default ContactList;
