import React from 'react';
import Alert from '../common/Alert';
import { Link } from 'react-router';

const HomePage = () => {
  return (
      <div className="row p3-top">
        <div className="col-sm-12 col-md-3 p0-left">
          <div className="left-rail">
            <div className="triforce">
              <img src="/triforce.png" alt="triforce" />                              
            </div>
            <div className="zeldahunter">Zelda Hunter</div>
          </div>
        </div>

        <div className="col-sm-12 col-md-9 p0-left">
          <div className="jumbotron">
            <h1>It's dangerous to go alone!</h1>
            <p>Zelda Hunter has you covered! Keep track of all your adventures so no stone goes unturned, or grotto goes unexplored!</p>
            <Link to="/titles" className="btn btn-success btn-lg">Start your adventure!</Link>
          </div>

          <Alert dismissable={true} type="success">
            <strong>Hey! Listen!</strong> Zelda Hunter uses your browser's localstorage to keep track of all your progress. If your browser doesn't support localstorage, we'll use a cookie instead. Please note if you empty localstorage or clear your cookies all of your saved progress will be lost!
          </Alert>
        </div>
      </div>
    );
};

export default HomePage;
