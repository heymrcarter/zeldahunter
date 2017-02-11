import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import TitleList from '../titles/TitleList';

const Header = ({ titles, currentTitleId }) => {
  let dropdownText = 'Titles';
  const title = titles.filter(t => t.id === currentTitleId)[0];
  
  if (title && title.name) {
    dropdownText = title.name;
  }
  
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#topbar-navigation"
            aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/" className="navbar-brand">
            <img alt="brand" src="../../triforce-23x20.png"/>
            <span>Zelda Hunter</span>
          </IndexLink>
        </div>

        <div className="collapse navbar-collapse" id="topbar-navigation">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <Link
                to="/titles"
                className="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false">
                {dropdownText} <span className="caret" />
              </Link>

              <TitleList titles={titles} css="dropdown-menu" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  titles: PropTypes.array.isRequired,
  currentTitleId: PropTypes.string.isRequired
};

export default Header;
