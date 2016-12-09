import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import { getTitles } from '../titles/title-service';

const Header = () => {
  const titles = getTitles().map((title, i) => {
    const urlFriendlyName = title.toLowerCase().replace(' ', '-').replace('\'', '');
    return (
      <li key={i}><Link to={`/titles/${urlFriendlyName}`}>{title}</Link></li>
    );
  });
  
  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#topbar-navingation" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <IndexLink to="/">Zelda Hunter</IndexLink>
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
                Titles <span className="caret" />
              </Link>

              <ul className="dropdown-menu">
                {titles}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;