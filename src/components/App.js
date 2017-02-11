import React, { Component, PropTypes } from 'react';
import Header from './common/Header';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as titleActions from '../actions/title-actions';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      titles: props.titles,
      currentTitleId: props.currentTitleId
    };
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentTitleId !== this.state.currentTitleId) {
      this.setState({ currentTitleId: nextProps.currentTitleId });
    }
  }

  render() {
    return (
      <div>
        <Header titles={this.props.titles} currentTitleId={this.state.currentTitleId} />
        <main className="container-fluid p4-top">
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
  titles: PropTypes.array.isRequired,
  actions: PropTypes.object,
  currentTitleId: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    titles: state.titles,
    currentTitleId: ownProps.params.titleId || 'Titles'
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(titleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
