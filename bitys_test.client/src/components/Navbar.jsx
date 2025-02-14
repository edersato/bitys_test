import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <nav data-bs-theme="dark" className="navbar navbar-expand-sm bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="src/assets/logo-inversa.png" alt="logo_bitys" style={{ width: '80px' }} />
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Usuários</Link>
            </li>
          </ul>
        </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faRightFromBracket} style={{rotate: '180deg', marginRight: '0.5em'}} />
                Logout
              </Link>
            </li>
          </ul>
      </div>
    </nav>
  );
}

export default Navbar;
