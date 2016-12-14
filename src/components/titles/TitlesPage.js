import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TitleList from './TitleList';
import { bindActionCreators } from 'redux';
import * as titleActions from '../../actions/title-actions';

class TitlesPage extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div>
        <h1>Zelda Titles</h1>
        <TitleList titles={this.props.titles} />
      </div>
    );
  }
}

TitlesPage.propTypes = {
  titles: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(TitlesPage);
