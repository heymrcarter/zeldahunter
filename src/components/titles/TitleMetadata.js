import React, { PropTypes } from 'react';

const TitleMetadata = ({ title }) => {
  const { name, description, releaseDate, logo, collectables } = title;
  
  return (
    <div className="title-metadata">
      <div className="title-info">
        <div className="row">
          <div className="hidden-sm col-md-3">
            <img src={logo} alt={name} />
          </div>

          <div className="col-sm-12 col-md-9">
            <h1>{name}</h1>
          </div>
        </div>

        <aside className="row">
          <div className="col-sm-12">
            <p className="m2-top title-description">{description}</p>
            <p className="release-date">Released: {releaseDate}</p>
          </div>
        </aside>
      </div>

      <div className="title-collectables">
        <div className="row">
          <div className="col-sm-12">
          
            <h2>Items to collect</h2>
            <ul className="list-unstyled">
              {
                collectables &&
                collectables.map((collectable, i) => {
                  return <li key={i}>{collectable}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

TitleMetadata.propTypes = {
  title: PropTypes.object.isRequired
};

export default TitleMetadata;
