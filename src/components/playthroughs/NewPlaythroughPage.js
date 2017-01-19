import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as playthroughActions from '../../actions/playthrough-actions';

class NewPlaythroughPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      newPlaythrough: { name: '', titleId: '', progress: [] }
    };

    this.newPlaythrough = this.newPlaythrough.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.redirect = this.redirect.bind(this);
  }
  
  newPlaythrough(event) {
    event.preventDefault();

    this.props.actions.savePlaythrough(this.state.newPlaythrough)
      .then(() => this.redirect())
      .catch();
  }

  handleChange(event) {
    const playthrough = Object.assign({}, this.state.newPlaythrough);
    playthrough.name = event.target.value;
    playthrough.titleId = this.props.title.id;
    this.setState({newPlaythrough: playthrough});
  }

  redirect() {
    const url = `/titles/${this.props.title.id}`;
    this.context.router.push(url);
  }

  render() {
    return (
      <div className="container">
        <h1>New Playthrough</h1>
        <p>Don't leave a stone unturned while on your {this.props.title.name} adventure!</p>
        <form onSubmit={this.newPlaythrough}>
          <div className="form-group">
            <label htmlFor="playthrough-name">Name</label>
            <input type="text" name="playthrough-name" id="playthrough-name" className="form-control" onChange={this.handleChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

NewPlaythroughPage.contextTypes = {
  router: PropTypes.object
};

NewPlaythroughPage.propTypes = {
  title: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const titleId = ownProps.params.titleId;
  let title = { id: '', name: '', description: '', releaseDate: ''};

  if (titleId && state.titles.length > 0) {
    title = state.titles.filter(title => title.id === titleId)[0];
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

export default connect(mapStateToProps, mapDispatchToProps)(NewPlaythroughPage);