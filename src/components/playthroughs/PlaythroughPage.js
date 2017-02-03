import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PlaythroughHeader from './PlaythroughHeader';
import dateFormatter from '../../utils/date-formatter';

class PlaythroughPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      progress: props.progress,
      title: props.title,
      playthrough: props.playthrough
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playthrough.id !== this.state.playthrough.id) {
      this.setState({ playthrough: nextProps.playthrough });
    }

    if (nextProps.progress.id !== this.state.progress.id) {
      this.setState({ progress: nextProps.progress });
    }

    if (nextProps.title.id !== this.state.title.id) {
      this.setState({ title: nextProps.title });
    }
  }

  render() {
    const date = new Date(this.state.playthrough.lastUpdated);
    const formattedDate = dateFormatter(date);
    return (
      <div>
        <PlaythroughHeader
          titleName={this.state.title.name}
          playthroughName={this.state.playthrough.name}
          lastUpdated={formattedDate} />
      </div>
    );
  }
}

PlaythroughPage.propTypes = {
  progress: PropTypes.object.isRequired,
  title: PropTypes.object.isRequired,
  playthrough: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const playthroughId = parseInt(ownProps.params.playthroughId);
  const playthrough = state.playthroughs.filter(p => p.id === playthroughId)[0];
  const title = state.titles.filter(t => t.id === ownProps.params.titleId)[0];
  const progress = state.progress.filter(p => p.playthroughId === playthrough.id && p.titleId === title.id)[0];
  
  return {
    progress,
    title,
    playthrough
  };
};

export default connect(mapStateToProps)(PlaythroughPage);