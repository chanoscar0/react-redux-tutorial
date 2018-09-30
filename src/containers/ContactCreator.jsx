import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions.js';

function mapStateToProps(store) {
    return {
        //Add State to Props
        newName: store.newName,
        newAddress: store.newAddress,
        newPhone: store.newPhone
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createContact: function(data) {
            dispatch(actions.createContact(data));
        },
        //Add Dispatch to Props
        updateNewName: function(event) {
            dispatch(actions.updateNewName(event.target.value))
        },
        updateNewAddress: function(event) {
            dispatch(actions.updateNewAddress(event.target.value))
        },
        updateNewPhone: function(event){
            dispatch(actions.updateNewPhone(event.target.value))
        }
    }
}


class ContactCreator extends Component {
    
    render() {
        const { newName, newAddress, newPhone, updateNewName, updateNewAddress, updateNewPhone, createContact } = this.props;
        return (
            <div className="contactCreator">
                <input placeholder="Name" className="contactNameInput" onChange={updateNewName} value={newName}></input>
                <input placeholder="Address" className="contactAddressInput" onChange={updateNewAddress} value={newAddress}></input>
                <input placeholder="Phone" className="contactPhoneInput" onChange={updateNewPhone} value={newPhone}></input>
                <button onClick={() => createContact({name: newName, address: newAddress, phone: newPhone})} >Create Contact</button>
            </div>
        )
        //Render Component
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactCreator);