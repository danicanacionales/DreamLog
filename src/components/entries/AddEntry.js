import React from 'react';
import firebase from '../../Firestore';

class EntryField extends React.Component {
  constructor(props){
    super(props);
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    this.state = {
      db: db
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    var newEntry = this.state.db.collection("entries").doc().set({
      entry_body: "aheeheh",
      entry_date: timestamp
    });
  }

  render() {
    return(
      <div className="col-md-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h1>New Entry</h1>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <textarea className="form-control"
                  name="text_field"
                  rows="4" />
                <button className="btn btn-outline-success btn-md float-right mt-2 mb-2" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

class AddEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isShowFields: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState(state => ({
      isShowFields: !state.isShowFields
    }));
  }

  render() {
    return(
      <React.Fragment>
        <div>
          <a href="#" className="btn btn-outline-success mb-4" onClick={this.handleClick}>Add Entry +</a>
        </div>
        {this.state.isShowFields !== false &&
          <EntryField />
        }
      </React.Fragment>
    );
  }
}

export default AddEntry;
