import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import UnauthedNavbar from './UnauthedNavbar';

import './Navbar.scss';
import AuthedNavbar from './AuthedNavbar';

class Navbar extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isNavbarExpanded: false
    };
  }

  handleNavbarBurgerClick = () => {
    this.setState(prevState => ({
      isNavbarExpanded: !prevState.isNavbarExpanded
    }));
  };

  render() {
    const { isNavbarExpanded } = this.state;
    const { isAuthenticated } = this.props;

    return (
      <nav
        className="navbar is-transparent is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              LOGO
            </Link>

            <button
              type="button"
              onClick={this.handleNavbarBurgerClick}
              className={`navbar-burger burger ${
                isNavbarExpanded ? 'is-active' : ''
              }`}
              aria-label="menu"
              aria-expanded={isNavbarExpanded}
              data-target="navbar"
            >
              {/* Hamburger logo */}
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
          {isAuthenticated ? <AuthedNavbar /> : <UnauthedNavbar />}
        </div>
      </nav>
    );
  }
}

export default Navbar;
