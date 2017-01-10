import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playthroughActions from '../../actions/playthorugh-actions';

class NewPlayThroughPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.createPlaythrough = this.createPlaythrough.bind(this);
    this.updatePlaythroughName = this.updatePlaythroughName.bind(this);

    this.state = {
      title: Object.assign({}, this.props.title),
      playthrough: {
        name: ''
      }
    };
  }

  updatePlaythroughName(event) {
    let playthrough = Object.assign({}, this.state.playthrough);
    playthrough.name = event.target.value;
    this.setState({plathrough: playthrough});
  }

  createPlaythrough(event) {
    event.preventDefault();
    this.props.actions.savePlaythrough(this.state.plathrough)
      .then(() => this.redirect())
      .catch(error => console.log(error));
  }

  redirect() {
    this.context.router.push(`/titles/${this.state.title.name}`);
  }

  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Let's get started!</h1>
          <p>Start a new adventure! Conquer your foes and beat {this.props.title.name}.</p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="form-control" onChange={this.updatePlaythroughName} />
          </div>

          <div className="form-group">
            <button type="submit" className="btn btn-success" onClick={this.createPlaythrough}>Create</button>
          </div>
        </form>
      </div>
    );
  }
}

NewPlayThroughPage.propTypes = {
  title: PropTypes.object.isRequired,
  actions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const titleId = ownProps.params.titleId;
  let title = {id: '', name: ''};

  if (titleId && state.titles.length > 0) {
    title = state.titles.filter(t => t.id === titleId)[0] || null;
  }

  return {
    title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(playthroughActions, dispatch)
  };
}

export default connect(mapStateToProps)(mapDispatchToProps)(NewPlayThroughPage);
