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
        <PlaythroughSelector playthroughs={this.props.playthroughs} titleId={this.props.title.id} />
      </div>
    );
  }
}

TitlePage.propTypes = {
  title: PropTypes.object.isRequired,
  playthroughs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const titleId = ownProps.params.titleId;
  let title = {id: '', name: ''};
  let playthroughs = [];
  
  if (titleId && state.titles.length > 0) {
    title = state.titles.filter(t => t.id === titleId)[0] || null;
  }

  if (titleId && state.titles.length > 0) {
    playthroughs = state.playthroughs.filter(p => p.titleId === titleId);
  }

  return {
    title,
    playthroughs
  };
}

export default connect(mapStateToProps)(TitlePage);
