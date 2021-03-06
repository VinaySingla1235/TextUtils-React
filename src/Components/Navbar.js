import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  const changeTitleAbout=()=>{
      document.title='TextUtils-About';
      document.getElementById('home').classList.remove('active');
      document.getElementById('about').classList.add('active');

  }
  const changeTitleHome=()=>{
    document.title='TextUtils-Home'
    document.getElementById('about').classList.remove('active');
    document.getElementById('home').classList.add('active');
  }
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/TextUtils-React" onClick={changeTitleHome}>
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" id="home" aria-current="page" to="/TextUtils-React" onClick={changeTitleHome}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" id="about" to="/TextUtils-React/about" onClick={changeTitleAbout}>
                About
              </Link>
            </li>
          </ul>
          {/*<form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
          </form>*/}
          <div className="form-check form-switch normal-dark mx-2" style={{cursor:"pointer"}}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="normal-dark"
              onClick={props.toggleMode}
              style={{cursor:"pointer"}}
            />
            <label className={`form-check-label text-${props.modeRever}`} htmlFor="normal-dark" style={{cursor:"pointer"}}>
              Enable {props.modeRever} Mode
            </label>
          </div>
          <div className="form-check form-switch bluish-dark mx-2" style={{cursor:"pointer"}}>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="bluish-dark"
              onClick={props.toggleModeBlue}
              style={{cursor:"pointer"}}
            />
            <label className={`form-check-label text-${ props.mode==='light'?'dark':'light'}`} htmlFor="bluish-dark" style={{cursor:"pointer"}}>
              Enable {props.mode==='light'?'bluish dark':'light'} Mode
            </label>
        </div>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  //aboutText:PropTypes.string.isRequired
};
