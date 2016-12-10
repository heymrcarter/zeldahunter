import React, { Component, PropTypes } from 'react';
import Header from './common/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header titles={[]} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
