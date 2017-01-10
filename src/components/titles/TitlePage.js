import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PlaythroughSelector from '../playthroughs/PlaythroughSelector';
import TitleMetadata from './TitleMetadata';

class TitlePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: Object.assign({}, this.props.title)
    };
  }

  render() {
    return (
      <div>
        <TitleMetadata title={this.props.title}/>
        <PlaythroughSelector playthroughs={[]} title={this.props.title} />
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
