import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { titleNameToUrl } from '../../utils/title-helper';

const TitleList = ({ titles, css }) => {
  const titleRows = titles.map((title, i) => {
    const urlFriendlyName = titleNameToUrl(title);
    const url = `/titles/${urlFriendlyName}`;
    return <li key={i}><Link to={url}>{title}</Link></li>;
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
