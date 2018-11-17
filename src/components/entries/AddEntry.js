import React from 'react';
import firebase from '../../Firestore';

class AddEntry extends React.Component {
  constructor(props){
    super(props);
    let db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });

    this.state = {
      db: db,
      newEntryValue: '',
      isShowFields: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);

    console.log(props);
  }

  handleSubmit(e){
    e.preventDefault();
    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

    this.state.db.collection("entries").doc().set({
      entry_body: this.state.newEntryValue,
      entry_date: timestamp
    });

    this.setState({newEntryValue: ''});
  }

  handleChange(e) {
    this.setState({newEntryValue: e.target.value});
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
          <div className="col-md-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h1>New Entry</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <textarea className="form-control"
                      name="entry_field"
                      rows="4"
                      placeholder="What did you dream about last night?"
                      onChange={this.handleChange}
                      value={this.state.newEntryValue}
                      />
                    <button className="btn btn-outline-success btn-md float-right mt-2 mb-2"
                      type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default AddEntry;
