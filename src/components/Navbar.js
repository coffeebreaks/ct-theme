import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: '288px', height: "auto" }} />
            </Link>
            {/* Hamburger menu */}
        

            <div id="navMenu" className={`navbar-menu ${this.state.navBarActiveClass}`}>
            <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/">
                Start
              </Link>
              <Link className="navbar-item" to="/about">
                Skorstensrenovering
              </Link>
              <Link className="navbar-item" to="/products">
                Imkanal
              </Link>
              <Link className="navbar-item" to="/blog">
                Ventilation
              </Link>
              <div className="dropdownWrapper">
              <Link className="navbar-item" to="/contact">
                Produkter ▾ 
              </Link>
              <div className="dropdown">
                <Link to="/about">
                Linkasdasd
                </Link>
                <Link to="/">
                Linkasdasdfasf
                </Link>
                <Link to="/">
                Linkasd
                </Link>
                <Link to="/">
                Link
                </Link>
              </div>
              </div>

              <Link className="navbar-item" to="/contact/examples">
                Information
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Om oss
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Kontakta oss
              </Link>
            </div>

          </div>
          <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
    
          </div>
          
        </div>
       
      </nav>
    )
  }
}

export default Navbar
