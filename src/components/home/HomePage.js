import React, { Component } from 'react';
import Alert from '../common/Alert';
import { Link } from 'react-router';

class HomePage extends Component {
  constructor(props, context) {
   super(props, context);
  }

  render() {
    return (
      <div>
        <div className="jumbotron">
          <h1>It's dangerous to go alone!</h1>
          <p>Zelda Hunter has you covered! Keep track of all your adventures so no stone goes unturned, or grotto goes unexplored!</p>
          <Link to="/titles" className="btn btn-success btn-lg">Start your adventure!</Link>
        </div>

        <Alert dismissable={true} type="info">
          <strong>Hey! Listen!</strong> Zelda Hunter uses your browser's localstorage to keep track of all your progress. If your browser doesn't support localstorage, we'll use a cookie instead. Please note if you empty localstorage or clear your cookies all of your saved progress will be lost!
        </Alert>
      </div>
    );
  }
}

export default HomePage;
