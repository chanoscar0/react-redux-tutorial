import React, { Component } from 'react';
import './App.css';
import ContactCreator from './containers/ContactCreator';
import ContactList from './containers/ContactList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <ContactCreator/>
          <ContactList/>
        </div>
      </div>
    );
  }
}

export default App;