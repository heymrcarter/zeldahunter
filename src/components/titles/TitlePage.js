import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TitleMetadata from './TitleMetadata';
import deepEqual from 'deep-equal';
import PlaythroughManager from '../playthroughs/PlaythroughManager';

class TitlePage extends Component {
  constructor(props, context) {
    super(props, context);

   this.state = {
      title: props.title,
      playthroughs: props.playthroughs,
      miniMetadata: props.playthroughs.length > 0
    };

    this.showAllMetadata = this.showAllMetadata.bind(this);
  }  

  componentWillReceiveProps(nextProps) {
    if (nextProps.title.id != this.state.title.id) {
      this.setState({ title: Object.assign({}, nextProps.title) });
    }
    
    if (!deepEqual(this.state.playthroughs, nextProps.playthroughs)) {
      const newState = Object.assign({}, this.state, {
        playthroughs: Object.assign([], [...nextProps.playthroughs]),
        miniMetadata: nextProps.playthroughs.length > 0
      });
      this.setState(newState);
    }
  }

  showAllMetadata(event) {
    event.preventDefault();
    this.setState({ miniMetadata: false });
  }

  render() {
    return (
      <div>
        <TitleMetadata title={this.state.title} mini={this.state.miniMetadata} expand={this.showAllMetadata}/>
        <PlaythroughManager titleId={this.state.title.id} />
      </div>
    );
  }
}

TitlePage.propTypes = {
  title: PropTypes.object.isRequired,
  playthroughs: PropTypes.array.isRequired,
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

export default connect(mapStateToProps)(TitlePage);
