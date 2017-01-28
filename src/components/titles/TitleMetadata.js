import React, { PropTypes } from 'react';

const TitleMetadata = ({ title }) => {
  const { name, description, releaseDate, logo } = title;

  return (
    <div className="jumbotron">
      <h1>{name}</h1>
      <div className="row">
        <div className="col-sm-12 col-md-9">
          <p className="m2-top title-description">{description}</p>
          <p className="release-date">Released: {releaseDate}</p>
        </div>

        <div className="col-sm-12 col-md-3">
          <img src={logo} alt={name} />
        </div>
      </div>
    </div>
  );
};

TitleMetadata.propTypes = {
  title: PropTypes.object.isRequired
};

export default TitleMetadata;
