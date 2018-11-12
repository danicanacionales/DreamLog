import React, { Component } from 'react';
import { Consumer } from '../../context';
import { Link } from 'react-router-dom';
import firebase from '../../Firestore';

class EntryPage extends Component {
  render(){
    return(
      <div>
        <h1>aye</h1>
      </div>
      // <Consumer>
      //   {value => {
      //     const { entry_list, heading, db } = value;
      //     <div>
      //       <h1>ayee</h1>
      //     </div>
      //   }}
      // </Consumer>

      // <div className="col-md-12 mb-4">
      //   <div className="card">
      //     <small className="card-header text-muted">November 3, 2018</small>
      //     <div className="card-body">
      //       // <h5 className="card-title">{entry.entry_title}</h5>
      //       // <p className="card-text">{entry.entry_body}</p>
      //       <small className="float-right">
      //         // <Link to={`entries/entry/${entry.entry_id}`} className="card-link text-muted">See Details</Link>
      //       </small>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default EntryPage;
