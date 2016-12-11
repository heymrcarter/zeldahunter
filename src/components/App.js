import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as titleActions from '../actions/title-actions';

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <Header titles={this.props.titles} />
        <main className="container-fluid">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  titles: PropTypes.array.isRequired,
  actions: PropTypes.object
};

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(titleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
