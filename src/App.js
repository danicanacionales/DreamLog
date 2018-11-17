import React, { Component } from 'react';
// import firebase from './Firestore';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Entries from './components/entries/Entries';
import EntryPage from './components/entries/EntryPage';


class App extends Component {
  render() {
    // const db = firebase.firestore();
    // db.settings({
    //   timestampsInSnapshots: true
    // });

    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Entries} />
              <Route exact path="/entry/:id" component={EntryPage} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
