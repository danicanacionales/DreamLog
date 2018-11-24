import React from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react';

function Entry(props) {
  const { entry } = props;
  const entry_path = window.location.protocol + "//" + window.location.host + "/entry/" + entry.entry_id;
  let date = new Date(entry.entry_date.seconds);
  return (
    console.log(date.toString()),
    <div className="col-md-12 mb-4">
      <div className="card">
        <small className="card-header text-muted">November 3, 2018</small>
        <div className="card-body">
          <h5 className="card-title">{entry.entry_title}</h5>
          <p className="card-text">{entry.entry_body}</p>
          <Link to={`entry/${entry.entry_id}`} className="float-right">
            <small className="text-muted">See Details</small>
          </Link>
          <br/>
          <QRCode className="float-right" value={entry_path} />
        </div>
      </div>
    </div>
  );
}

export default Entry;
