import React, { useEffect } from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="blue darken-3">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo center">
            UserBook
          </Link>
          <a data-activates="main-menu" className="button-collapse show-on-large">
            <i className="fa fa-bars"></i>
          </a>
          <ul className="right hide-on-small-only">
            <li>
              <Link to="/">
                <i className="fa fa-users"></i> users
              </Link>
            </li>
          </ul>
          <ul className="side-nav" id="main-menu">
            <li>
              <Link to="/">
                <i className="fa fa-users"></i>users
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
