import React, { Component } from 'react';
import firebase from '../../Firestore';

class EntryPage extends Component {
  constructor(props) {
    super(props);
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    this.state = {
      db: db,
      entry_body: '',
      entry_date: '',
      entry_title: ''
    };
  }

  getEntryDetails() {

  }

  render(){
    return(
      <div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <small className="card-header text-muted">November 3, 2018</small>
            <div className="card-body">
              aiyo
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryPage;
