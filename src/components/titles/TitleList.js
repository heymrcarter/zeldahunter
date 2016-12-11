import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const TitleList = ({ titles, css }) => {
  const titleRows = titles.map((title, i) => {
    const url = `/titles/${title.id}`;
    return <li key={i}><Link to={url}>{title.name}</Link></li>;
  });

  return (
    <ul className={css}>
      {titleRows}
    </ul>
  );
};

TitleList.propTypes = {
  titles: PropTypes.array.isRequired,
  css: PropTypes.string
};

export default TitleList;
