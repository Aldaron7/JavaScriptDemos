import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContactItem extends Component {
    render() {
        return <li>{this.props.name} - {this.props.email}</li>
    }
}
ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
}

export default class ContactList extends Component {
    render() {
        let filteredContacts = this.props.contacts.filter(( contact ) => contact.name.indexOf( this.props.filterText ) !== -1 );
        return (
            <ul>
                {filteredContacts.map(( contact ) => <ContactItem key={contact.email} name={contact.name} email={contact.email} /> )}
            </ul>
        )
    }
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf( PropTypes.object ),
    filterText: PropTypes.string.isRequired
}