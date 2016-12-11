import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class TitlePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course)
    };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title.name}</h1>
      </div>
    );
  }
}

TitlePage.propTypes = {
  title: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const titleId = ownProps.params.id;
  let title = {id: '', name: ''};

  if (titleId && state.titles.length > 0) {
    title = state.titles.filter(t => t.id === titleId)[0] || null;
  }

  return {
    title
  };
}

export default connect(mapStateToProps)(TitlePage);
