import React, { Component, PropTypes } from 'react';
import CollectableOverview from './CollectableOverview';

class ProgressOverview extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    salvattore.registerGrid(document.querySelector('#progress-overview'));
  }

  render() {
    return (
      <div className="progress-overview" id="progress-overview" data-columns>
        {
          this.props.progress.map((collectable, i) => {
            return (
              <div key={i} className="m2-bottom">
                <CollectableOverview collectable={collectable} />
              </div>
            );
          })
        }
      </div>    
    );
  }
}

ProgressOverview.propTypes = {
  progress: PropTypes.array.isRequired,
};

export default ProgressOverview;