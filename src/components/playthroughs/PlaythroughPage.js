import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PlaythroughHeader from './PlaythroughHeader';
import dateFormatter from '../../utils/date-formatter';
import toQuickview from '../../utils/quickview-factory';
import toProgressOverview from '../../utils/progress-overview-factory';
import ProgressOverview from '../progress/ProgressOverview';
import CollectableSelector from '../progress/CollectableSelector';

class PlaythroughPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      progress: props.progress,
      title: props.title,
      playthrough: props.playthrough,
      quickview: toQuickview(props.progress.collectables),
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.playthrough.id !== this.state.playthrough.id) {
      this.setState({ playthrough: nextProps.playthrough });      
    }

    if (nextProps.progress.id !== this.state.progress.id) {
      this.setState({ progress: nextProps.progress });
      this.setState({ quickview: toQuickview(nextProps.progress.collectables )});
    }

    if (nextProps.title.id !== this.state.title.id) {
      this.setState({ title: nextProps.title });
    }
  }

  render() {
    const date = new Date(this.state.playthrough.lastUpdated);
    const formattedDate = dateFormatter(date);
    return (
      <div className="row playthrough-progress">
        <div className="col-sm-12 col-md-3">
            <div className="left-rail">
              <PlaythroughHeader
                playthroughName={this.state.playthrough.name}
                lastUpdated={formattedDate} />

              <CollectableSelector collectables={toQuickview(this.state.progress.collectables)} />
            </div>         
        </div>       

        <div className="col-sm-12 col-md-9">
          <ProgressOverview
            progress={toProgressOverview(this.state.progress.collectables)} progressUrl={this.state.progressUrl} />
          </div>
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
}

export default connect(mapStateToProps)(PlaythroughPage);