import React, { PropTypes } from 'react';

const TitleMetadata = ({ title, mini, expand }) => {
  const { name, description, releaseDate, logo } = title;
  const base = 'title-metadata';
  const wrapperClass = mini ? `${base} mini` : base;
  const expandBtn = (<a href="#expand-title" onClick={expand} className="expand-title">Show all</a>);

  return (
    <div className="container-fluid">
      <div className={wrapperClass}>
        <div className="row">
          <div className="hidden-sm col-md-3">
            <img src={logo} alt={name} />
          </div>

          <div className="col-sm-12 col-md-9">
            <h1>{name}</h1>
          </div>
        </div>

        {mini && expandBtn}

        <aside className="row">
          <div className="col-sm-12">
            <p className="m2-top title-description">{description}</p>
            <p className="release-date">Released: {releaseDate}</p>
          </div>
        </aside>
      </div>
    </div>
  );
};

TitleMetadata.propTypes = {
  title: PropTypes.object.isRequired,
  mini: PropTypes.bool.isRequired,
  expand: PropTypes.func.isRequired
};

export default TitleMetadata;
