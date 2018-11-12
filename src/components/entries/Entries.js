import React, { Component } from 'react';
import Entry from '../entries/Entry';
// import Spinner from '../layout/Spinner';
import firebase from '../../Firestore';

class Entries extends Component {
  getEntryList(){
    // this.state.db
    let currentComponent = this;
    let list = new Array();
    list = list.filter(value => Object.keys(value).length !== 0);

    this.state.db.collection("entries").get().then(function(querySnapshot){
      querySnapshot.forEach(function(documentSnapshot){
        let data = documentSnapshot.data();
        console.log(data);
        var entry = { entry_id: documentSnapshot.id, entry_title: data.entry_title, entry_body: data.entry_body, entry_date: data.entry_date };
        list.push(entry);
      });

      currentComponent.setState({
        entry_list: list
      });

      console.log(currentComponent.state);
    });

  }

  constructor(props){
    super(props);
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    this.state = {
      db: db
    };

    this.getEntryList();
  }

  render () {
    return (
      <div>
        {(this.state.entry_list !== undefined || this.state.entry_list > 0) &&
          <React.Fragment>
            <div className="row">
              {this.state.entry_list.map(entry => (
                <Entry key={entry.entry_id} entry={entry} />
              ))}
            </div>
          </React.Fragment>
         }
      </div>
    )
  }
}

export default Entries;
