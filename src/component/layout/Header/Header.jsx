import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Col } from 'reactstrap'
import digital from '../../../assets/images/logo.png'
import Social from "../Social"
import './Header.css'

function Navigation() {
  return (
    <div className="header position-relative">

   
    <div className="main-header position-absolute w-100">
      <Container>

        <div className="top-Header d-flex justify-content-between py-2">
          <div className="contact-top-header">
            <p className="mb-0">Contact us now</p>
          </div>
          <div className="social-header d-flex align-items-center gap-4">
            <div><p className="mb-0 ">Follow us on </p> </div>
            <Social />
          </div>

        </div>

        <nav class="navbar navbar-expand-lg bg-light">
          <div class="main-navigation  d-flex align-items-center justify-content-between w-100 p-2">
            <div className="main-logo">
              <a class="navbar-brand" href="/"><img className="w-50" src={digital} alt="" /></a>
            </div>
            <div class="navigation-list">
              <ul class="navbar-nav ">
                <li class="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li class="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li class="nav-item dropdown">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>

                </li>
                <li className="nav-item">
                  <button type="button" className="btn">Download Now</button>
                </li>

              </ul>

            </div>
          </div>
        </nav>

      </Container>
    </div>
    </div>
  );
}

export default Navigation;