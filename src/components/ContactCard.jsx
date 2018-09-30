import React, {Component} from 'react';

class ContactCard extends Component {

    render() {
        //Render Component
        return (
            <div>
                <p>Name: {this.props.name} </p>
                <p>Address: {this.props.address}</p>
                <p>Phone: {this.props.phone} </p>
                <button id={this.props.id} onClick={() => this.props.updated(this.props.updateFields, this.props.id)}>Update Contact</button>
                <button id={this.props.id} onClick={this.props.delete}>Delete Contact</button>
            </div>
        )
    }
}

export default ContactCard;