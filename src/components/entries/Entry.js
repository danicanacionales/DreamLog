import React from 'react';

function Entry(props) {
  const { entry } = props;

  return (
    <div className="col-md-12 mb-4">
      <div className="card">
        <small className="card-header text-muted">November 3, 2018</small>
        <div className="card-body">
          <h5 className="card-title">{entry.entry_title}</h5>
          <p className="card-text">{entry.entry_body}</p>
          <small className="float-right">
            See details
          </small>
        </div>
      </div>
    </div>
  );
}

export default Entry;
