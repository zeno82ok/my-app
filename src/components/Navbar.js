import React from 'react'
import PropTypes from "prop-types"

export default function Navbar(props) {
  return (
    <div>
      <nav className={`px-3 navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <a className={`navbar-brand text-${props.mode==="light" ? "dark" : "light"}`} href="/">{props.title}</a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className={`nav-link text-${props.mode==="light" ? "dark" : "light"}`} href="#">{props.link1}</a>
            </li>
            <li className="nav-item">
              <a className={`nav-link text-${props.mode==="light" ? "dark" : "light"}`} href="#">{props.link2}</a>
            </li>
          </ul>
          <buthrefn className={`btn btn-${props.mode==="light" || props.mode==="danger" || props.mode==="primary" ? "dark" : "light"}`} onClick={props.toggle}>Dark</buthrefn>
          <buthrefn className={`mx-2 btn btn-${props.mode==="light" || props.mode==="danger" || props.mode==="dark" ? "primary" : "light"}`} onClick={props.toggleB}>Blue mode</buthrefn>
          <buthrefn className={`btn btn-${props.mode==="primary" || props.mode==="dark" || props.mode==="light" ? "danger" : "light"}`} onClick={props.toggleR}>Red mode</buthrefn>
        </div>
      </nav>
    </div>
  )
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    a1: PropTypes.string.isRequired,
    a2: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'Set a Title',
    a1: 'set a1',
    a2: 'set a2'    
}