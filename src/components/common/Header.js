import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = ({ titles }) => {
  const titleList = titles.map((title, i) => {
    const urlFriendlyName = title.toLowerCase().replace(' ', '-').replace('\'', '');
    let url = `/titles/${urlFriendlyName}`;
    return <li key={i}><Link to={url}>{title}</Link></li>;
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
          <IndexLink to="/" className="navbar-brand">Zelda Hunter</IndexLink>
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
                {titleList}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
