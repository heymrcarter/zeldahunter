import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as playthroughActions from '../../actions/playthrough-actions';
import deepEqual from 'deep-equal';
import { bindActionCreators } from 'redux';
import Playthrough from './Playthrough';
import DeletePlaythrough from './DeletePlaythrough';
import PlaythroughForm from './PlaythroughForm';
import * as progressActions from '../../actions/progress-actions';
import { generateId } from '../../utils/id-generator';
import extractIds from '../../utils/id-extractor';

const ANCHOR_TAG = 'A';

class PlaythroughManager extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      titleId: props.titleId,
      slotManager: props.slotManager,
      playthroughsInProgress: props.playthroughsInProgress,
      numTotalPlaythroughs: props.numTotalPlaythroughs,
      allPlaythroughs: props.allPlaythroughs
    };

    this.renderComponentForSlot = this.renderComponentForSlot.bind(this);
    this.startDeletePlaythrough = this.startDeletePlaythrough.bind(this);
    this.deletePlaythrough = this.deletePlaythrough.bind(this);
    this.confirmPlaythroughDelete = this.confirmPlaythroughDelete.bind(this);
    this.startNewPlaythrough = this.startNewPlaythrough.bind(this);
    this.newPlaythrough = this.newPlaythrough.bind(this);
    this.createNewPlaythrough = this.createNewPlaythrough.bind(this);
    this.cancelNewPlaythrough = this.cancelNewPlaythrough.bind(this);
    this.cancelDelete = this.cancelDelete.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.titleId !== this.state.titleId) {
      this.setState({ titleId: nextProps.titleId });
    }

    if (!deepEqual(nextProps.slotManager, this.state.slotManager)) {
      this.setState({ slotManager: nextProps.slotManager });
    }

    if (nextProps.playthroughsInProgress !== this.state.playthroughsInProgress) {
      this.setState({ playthroughsInProgress: nextProps.playthroughsInProgress });
    }

    if (nextProps.numTotalPlaythroughs !== this.state.numTotalPlaythroughs) {
      this.setState({ numTotalPlaythroughs: nextProps.numTotalPlaythroughs });
    }

    if (!deepEqual(nextProps.allPlaythroughs, this.state.allPlaythroughs)) {
      this.setState({ allPlaythroughs: nextProps.allPlaythroughs });
    }
  }

  startDeletePlaythrough(event) {
    event.preventDefault();
    let element = event.target;
    if (event.target.tagName !== ANCHOR_TAG) {
      if (event.target.parentElement && event.target.parentElement.tagName === ANCHOR_TAG) {
        element = event.target.parentElement;
      }
    }

    const slotNumber = `slot-${element.getAttribute('data-position')}`;
    const slotManager = Object.assign({}, this.state.slotManager);

    slotManager[slotNumber].deleting = true;
    slotManager[slotNumber].deleteConfirmed = false;

    this.setState({ slotManager });
  }

  cancelDelete(event) {
    event.preventDefault();
    let element = event.target;
    if (event.target.tagName !== ANCHOR_TAG) {
      if (event.target.parentElement && event.target.parentElement.tagName === ANCHOR_TAG) {
        element = event.target.parentElement;
      }
    }

    const slotNumber = `slot-${element.getAttribute('data-position')}`;
    const slotManager = Object.assign({}, this.state.slotManager);

    slotManager[slotNumber].deleting = false;

    this.setState({ slotManager });
  }

  deletePlaythrough(event) {
    event.preventDefault();
    const slotNumber = `slot-${event.target.getAttribute('data-position')}`;
        
    if (this.state.slotManager[slotNumber].deleteConfirmed) {
      this.props.actions.deletePlaythrough(this.state.slotManager[slotNumber].playthrough.id)
        .then(() => {});
    }
  }

  confirmPlaythroughDelete(event) {
    const slotManager = Object.assign({}, this.state.slotManager);
    let slotNumber;

    Object.keys(this.state.slotManager).forEach(key => {
      if (this.state.slotManager[key].deleting) {
        slotNumber = key;
      }
    });

    if (event.target.value === slotManager[slotNumber].playthrough.name) {
      slotManager[slotNumber].deleteConfirmed = true;
      this.setState({ slotManager });
    }
  }

  startNewPlaythrough(event) {
    event.preventDefault();
    const slotNumber = 'slot-' + event.target.getAttribute('data-position');
    const slotManager = Object.assign({}, this.state.slotManager);

    slotManager[slotNumber].starting = true;
    slotManager[slotNumber].newPlaythrough = { name: '', titleId: '', progress: [] };

    this.setState({ slotManager });
  }

  cancelNewPlaythrough(event) {
    event.preventDefault();
    let element = event.target;
    if (event.target.tagName !== ANCHOR_TAG) {
      if (event.target.parentElement && event.target.parentElement.tagName === ANCHOR_TAG) {
        element = event.target.parentElement;
      }
    }

    const slotNumber = `slot-${element.getAttribute('data-position')}`;
    const slotManager = Object.assign({}, this.state.slotManager);

    slotManager[slotNumber].starting = false;

    this.setState({ slotManager });
  }

  newPlaythrough(event) {
    const slotManager = Object.assign({}, this.state.slotManager);
    let slotNumber;

    Object.keys(slotManager).forEach(key => {
      if (slotManager[key].starting) {
        slotNumber = key;
      }
    });

    let newPlaythrough = slotManager[slotNumber].newPlaythrough;

    newPlaythrough.name = event.target.value;
    newPlaythrough.titleId = this.props.titleId;

    this.setState({ slotManager });
  }

  createNewPlaythrough(event) {
    event.preventDefault();
    
    const slotNumber = `slot-${event.target.getAttribute('data-position')}`;
    const newPlaythrough = this.state.slotManager[slotNumber].newPlaythrough;
    const playthroughIds = extractIds(this.state.allPlaythroughs);
    
    newPlaythrough.id = generateId(playthroughIds);

    this.props.actions.savePlaythrough(newPlaythrough)
      .then(() => {
        this.props.actions.createProgress(this.props.titleId, newPlaythrough.id)
          .then(() => {});
      });
  }

  renderComponentForSlot(slot) {
    let component;
    const position = slot.substr(slot.length-1);
    
    if (this.state.slotManager[slot].started) {
      const progressUrl = `/titles/${this.state.titleId}/${this.state.slotManager[slot].playthrough.id}`;
      component = (<Playthrough
                    playthrough={this.state.slotManager[slot].playthrough}
                    startDeletePlaythrough={this.startDeletePlaythrough}
                    position={position}
                    progressUrl={progressUrl} />);
    } else {
      component = (<a 
                    href="#"
                    onClick={this.startNewPlaythrough}
                    className="new-playthrough"
                    data-position={position}>New Playthrough</a>);
    }
              

    if (this.state.slotManager[slot].starting) {
      component = (<PlaythroughForm
                    changeHandler={this.newPlaythrough} 
                    submitHandler={this.createNewPlaythrough}
                    position={position}
                    cancelHandler={this.cancelNewPlaythrough} />);
    }
              

    if (this.state.slotManager[slot].deleting) {
      component = (<DeletePlaythrough
                    playthrough={this.state.slotManager[slot].playthrough}
                    position={position}
                    deleteHandler={this.deletePlaythrough}
                    changeHandler={this.confirmPlaythroughDelete}
                    isValid={this.state.slotManager[slot].deleteConfirmed || false}
                    cancelDelete={this.cancelDelete}/>);
    }

    return component;
  }

  render() {
    const playthroughPlurality = this.state.playthroughsInProgress > 1 ? 'Playthroughs' : 'Playthrough'; 
    
    return (
      <div className="container-fluid m4-bottom">
        <h2 className="playthrough-heading">
          <span>
            {this.state.playthroughsInProgress === 0 && 'No Playthroughs Started'}
            {this.state.playthroughsInProgress > 0 && `${this.state.playthroughsInProgress} ${playthroughPlurality} Started`}
          </span>
        </h2>

        <div className="row m5-top">
          <div className="col-sm-12 col-md-4 m3-bottom">
            {this.renderComponentForSlot('slot-1')}
          </div>

          <div className="col-sm-12 col-md-4 m3-bottom">
            {this.renderComponentForSlot('slot-2')}
          </div>

          <div className="col-sm-12 col-md-4 m3-bottom">
            {this.renderComponentForSlot('slot-3')}
          </div>
        </div>
      </div>
    );
  }
}

PlaythroughManager.propTypes = {
  actions: PropTypes.object.isRequired,
  slotManager: PropTypes.object.isRequired,
  titleId: PropTypes.string.isRequired,
  playthroughsInProgress: PropTypes.number.isRequired,
  numTotalPlaythroughs: PropTypes.number.isRequired,
  allPlaythroughs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  const slotManager = {
    'slot-1': {
      playthrough: {},
      starting: false,
      deleting: false,
      started: false
    },
    'slot-2': {
      playthrough: {},
      starting: false,
      deleting: false,
      started: false
    },
    'slot-3': {
      playthrough: {},
      starting: false,
      deleting: false,
      started: false
    }
  };
  
  const playthroughs = state.playthroughs.filter(p => p.titleId === ownProps.titleId);
  
  if (playthroughs.length > 0) {
    playthroughs.map((playthrough, i) => {
      const slot = slotManager[`slot-${i+1}`];
      slot.playthrough = playthrough;
      slot.started = true;
    });
  }  
  
  return {
    slotManager,
    titleId: ownProps.titleId,
    playthroughsInProgress: playthroughs.length,
    numTotalPlaythroughs: state.playthroughs.length,
    allPlaythroughs: state.playthroughs
  };
}

function mapDispatchToProps(dispatch) {
  const actions = Object.assign({}, playthroughActions, progressActions);
  
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlaythroughManager);