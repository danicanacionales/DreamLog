import React, { Component } from 'react';
import firebase from './Firestore';

import Navbar from './components/layout/Navbar';
import Entries from './components/entries/Entries';


class App extends Component {
  render() {
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    return (
      <div>
        <Navbar />
        <div className="container">
          <Entries />
        </div>
      </div>
    );
  }
}

export default App;
