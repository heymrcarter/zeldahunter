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
      playthroughs: props.playthroughs
   };    
  }  

  componentWillReceiveProps(nextProps) {
    let newTitle = false;
    if (nextProps.title.id !== this.state.title.id) {
      this.newTitle = true;
      this.setState({ title: nextProps.title });
    }
    
    if (!deepEqual(this.state.playthroughs, nextProps.playthroughs)) {
      const newState = {
        playthroughs: Object.assign([], [...nextProps.playthroughs])
      };

      if (newTitle) {
        newState.title = nextProps.title;
      }
      
      this.setState(newState);
    }
  }

  render() {
    return (
      <div className="row p3-top">
        <div className="col-sm-12 col-md-3 p0-left">
          <div className="left-rail">
            <PlaythroughManager titleId={this.state.title.id} />
          </div>
        </div>

        <div className="col-sm-12 col-md-9 p0-left">
          <TitleMetadata title={this.state.title} />          
        </div>
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