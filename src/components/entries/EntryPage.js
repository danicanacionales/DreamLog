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

    this.getEntryDetails();
  }

  getEntryDetails() {
    let currentComponent = this;

    var docRef = this.state.db.collection("entries").doc(this.props.match.params.id);
    docRef.get().then(function(doc){
      if(doc.exists){
        currentComponent.setState({
          entry_body: doc.data().entry_body,
          entry_title: doc.data().entry_title,
          entry_date: doc.data().entry_date
        })
      }else{
        console.log("No such document!");
      }
    }).catch(function(error){
      console.log(error);
    })
  }

  render(){
    return(
      <div>
        <div className="col-md-12 mb-4">
          <div className="card">
            <small className="card-header text-muted">November 3, 2018</small>
            <div className="card-body">
              <h3>{this.state.entry_title}</h3>
              <p>{this.state.entry_body}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EntryPage;
