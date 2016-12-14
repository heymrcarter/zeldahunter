import React, { PropTypes } from 'react';

const TitleProgress = ({ progress }) => {
  const progressUi =  Object.keys(progress).map((key, i) => {
    return (
      <div className="col-sm-12 col-md-4">
        <div className="panel panel-success" key={i}>
          <div className="panel-heading">
            <h3 className="panel-title">{key}</h3>
          </div>

          <div className="panel-body">progress</div>
        </div>
      </div>
    );
  });

  return (
    <div className="container-fluid">
      <div className="row">
        {progressUi}
      </div>
    </div>
  );
};

export default TitleProgress;
