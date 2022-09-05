import React from "react";
import './Footer.css'
import { NavLink } from "react-router-dom";
import blue from '../../../assets/images/blue-circle.png'
import pink from '../../../assets/images/pink-circle.png'
import grey from '../../../assets/images/grey-circle.png'
import yellow from '../../../assets/images/yellow-circle.png'

function Footer() {
  return (
    <section id="footer">

<div className="bubble-images">
      <div class="image-one hero-moveable-images">
        <img src={blue} alt="" className="moveable-css" />
      </div>
      <div class="image-two">
        <img src={pink} alt="" className="moveable-css" />
      </div>
      <div class="image-three">
        <img src={grey} alt="" className="moveable-css" />
      </div>
      <div class="image-four">
        <img src={yellow} alt="" className="moveable-css" />
      </div>
      </div>


      <footer class="py-5 text-center">
        <div class="container">
          <div className="row justify-content-center">
            <div className="col-7">
              <h2 className="main-heading mb-3">
                Get Essentials Today and <br></br>Increase your Visitors
              </h2>
              <div className="subheading">
                Design better websites and spend less time without restricting creative freedom, get Essentials today on themeforest marketplace.


              </div>
              <div className="hero-buttons mt-4">
                <button className="btn first">
                  For iphone
                </button>
                <button className="btn second">
                  For android
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="footer-menus">
      <hr />
            <ul className="footer-menus-list">
              <li className="footer-menus-list">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>

              <li className="footer-menus-list">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="footer-menus-list">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>


            </ul>
          </div>

    </section>

  );
}

export default Footer;