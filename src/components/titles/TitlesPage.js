import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as titleActions from '../../actions/title-actions';
import { Link } from 'react-router';

class TitlesPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.renderTitles = this.renderTitles.bind(this);
  }

  renderTitles() {
    return this.props.titles.map((title, key) => {
      const url = `/titles/${title.id}`;
      return (
        <div className="col-sm-12 col-md-6 col-lg-3 m3-bottom" key={key}>
          <Link to={url}>
            <img src={title.logo} alt={title.name} className="img-responsive"/>

            <span className="title-name">{title.name}</span>
            <span className="sr-only">{this.name}</span>
          </Link>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Zelda Titles</h1>
        <div className="container-fluid">
          <div className="row">
            <div className="title-list">
              {this.renderTitles()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TitlesPage.propTypes = {
  titles: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    titles: state.titles
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(titleActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TitlesPage);
