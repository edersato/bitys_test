import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav data-bs-theme="dark" className="navbar navbar-expand-md bg-primary w-100">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="src/assets/logo-inversa.png" alt="logo_bitys" style={{ width: '80px' }} />
        </Link>

        <button 
          className="navbar-toggler d-md-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''} d-md-flex justify-content-between`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Usuários</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                <FontAwesomeIcon icon={faRightFromBracket} style={{ rotate: '180deg', marginRight: '0.5em' }} />
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
