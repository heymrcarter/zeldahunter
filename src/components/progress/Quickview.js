import React, { PropTypes } from 'react';

const Quickview = ({ quickviewModel }) => {
  return (
    <ul className="quickview row">
      {
        quickviewModel.map((item, i) => {
          return (
            <li key={i} className="col-sm-3 m3-bottom">
              <div className="quickview-glance">
                <span className="glance-collectable">{item.name}</span>
                <div className="glance-completion-percentage">
                  <span className="percentage">
                    {(item.found / item.total) * 100 || 0}%
                  </span>
                  <span className="glance-completion-label">Complete</span>
                </div>
              </div>
            </li>
          );          
        })
      }
    </ul>
  );
}

Quickview.propTypes = {
  quickviewModel: PropTypes.array.isRequired
};

export default Quickview;