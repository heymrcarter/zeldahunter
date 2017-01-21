import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import PlaythroughSelector from '../playthroughs/PlaythroughSelector';
import TitleMetadata from './TitleMetadata';
import * as playthroughActions from '../../actions/playthrough-actions';
import deepEqual from 'deep-equal';
import { bindActionCreators } from 'redux';

class TitlePage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      title: props.title,
      playthroughs: props.playthroughs,
      newPlaythrough: {
        starting: false,
        position: 0,
        playthrough: { name: '', titleId: '', progress: [] }
      }
    };

    this.startNewPlaythrough = this.startNewPlaythrough.bind(this);
    this.saveNewPlaythrough = this.saveNewPlaythrough.bind(this);
    this.newPlaythroughChange = this.newPlaythroughChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.title.id != this.state.title.id) {
      this.setState({ title: Object.assign({}, nextProps.title) });
    }
    
    if (!deepEqual(this.state.playthroughs, nextProps.playthroughs)) {
      this.setState({ playthroughs: Object.assign([], [...nextProps.playthroughs]) });
    }

    if (nextProps.startingNewPlaythrough !== this.state.startingNewPlaythrough) {
      this.setState({ startingNewPlaythrough: nextProps.startingNewPlaythrough });
    }
  }

  startNewPlaythrough(event) {
    event.preventDefault();
    const newPlaythrough = Object.assign({}, this.state.newPlaythrough);

    newPlaythrough.starting = true;
    newPlaythrough.position = parseInt(event.target.getAttribute('data-position'));

    this.setState({ newPlaythrough });
  }

  saveNewPlaythrough(event) {
    event.preventDefault();
    
    this.props.actions.savePlaythrough(this.state.newPlaythrough.playthrough)
      .then((playthrough) => {
        const newPlaythroughs = Object.assign([], [...this.state.playthroughs], [playthrough]);
        const newState = Object.assign({}, this.state, {
          playthroughs: newPlaythroughs,
          newPlaythrough:  {
            starting: false,
            position: 0,
            playthrough: { name: '', titleId: '', progress: [] }
          }
        });
        this.setState(newState);
      });
  }

  newPlaythroughChange(event) {
    const playthrough = Object.assign({}, this.state.newPlaythrough.playthrough);
    playthrough.name = event.target.value;
    playthrough.titleId = this.state.title.id;
    this.setState({ newPlaythrough: Object.assign({}, this.state.newPlaythrough, {playthrough}) });
  }

  render() {
    return (
      <div>
        <TitleMetadata title={this.state.title}/>
        <PlaythroughSelector
          playthroughs={this.state.playthroughs}
          titleId={this.state.title.id}
          newPlaythrough={this.state.newPlaythrough}
          startNewPlaythrough={this.startNewPlaythrough}
          saveNewPlaythrough={this.saveNewPlaythrough}
          newPlaythroughChange={this.newPlaythroughChange} />
      </div>
    );
  }
}

TitlePage.propTypes = {
  title: PropTypes.object.isRequired,
  playthroughs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const titleId = ownProps.params.titleId;
  let title = {id: '', name: ''};
  let titlePlaythroughs = [];
  
  if (titleId && state.titles.length > 0) {
    const titles = Object.assign([], [...state.titles]);
    title = titles.filter(t => t.id === titleId)[0] || null;
  }
  
  if (titleId && state.playthroughs.length > 0) {
    const playthroughs = Object.assign([], [...state.playthroughs]);
    titlePlaythroughs = playthroughs.filter(p => p.titleId === titleId);
  }

  return {
    title,
    playthroughs: titlePlaythroughs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playthroughActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlePage);
