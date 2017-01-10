import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TitleList = ({ titles, css, renderImage = false }) => {
  const titleRows = titles.map((title, i) => {
    const url = `/titles/${title.id}`;
    return (
      <li key={i}>
        <Link to={url}>
          {renderImage && (
            <img src={title.logo} name={title.name} />
          )}

          {title.name}
        </Link>
      </li>
    );
  });

  return (
    <ul className={css}>
      {titleRows}
    </ul>
  );
};

TitleList.propTypes = {
  titles: PropTypes.array.isRequired,
  css: PropTypes.string,
  renderImage: PropTypes.bool
};

export default TitleList;
