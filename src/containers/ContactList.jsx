import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';
import ContactCard from '../components/ContactCard.jsx';

function mapStateToProps(store) {
    return {
        //Add State to Props
        contacts: store.contactList,
        newName: store.newName,
        newAddress: store.newAddress,
        newPhone: store.newPhone
    }
}

function mapDispatchToProps(dispatch) {
    return {
        //Add Dispatch to Props
        deleteContact: function(event){
            dispatch(actions.deleteContact(event.target.id));
        },
        updateContact: function(data, id){
            console.log(id);
            data.id = id;
            console.log(data);
            dispatch(actions.updateContact(data));
        }
    }
}

class ContactList extends Component {

    render() {
        const updateFields = {
            name: this.props.newName,
            address: this.props.newAddress,
            phone: this.props.newPhone
        }
        const contactList = this.props.contacts.contacts.map((contact, index) => {
           return <ContactCard updated={this.props.updateContact} updateFields={updateFields} key={"contact"+index} id={contact.id} delete={this.props.deleteContact} name={contact.name} address={contact.address} phone={contact.phone} />
        }) 
        //Render Component
        return (
            <div>
                {contactList}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);