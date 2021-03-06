import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="main-footer d-flex justify-content-center pt-5">
      <div className=" ">
        <div className="row ">
          {/* Column 1 */}
          <div className="col-3 col-sm-3 ">
            <Link to="/">
              <img src="/img/Logo.png" alt="logo" id="logoWN" />
            </Link>
          </div>

          {/* Column 2 */}
          <div className="col-3 col-sm-3 ">
            <h5 id="contributors">Contributors</h5>
            <ul
              className="list-unstyled text-dark fw-light"
              id="contributorList"
            >
              <li>
                <a href="https://github.com/chloeyarb" className="nounderline">
                  <span className="fw-normal">Chloe</span> Yarborough
                </a>
              </li>
              <li>
                <a href="https://github.com/Cherboi" className="nounderline">
                  <span className="fw-normal">Robert</span> Platzer Jr
                </a>
              </li>
              <li>
                <a href="https://github.com/adunny" className="nounderline">
                  <span className="fw-normal">Alen</span> Dunn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NacoandCheese"
                  className="nounderline"
                >
                  <span className="fw-normal">Nico</span> D'Anna
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/NicoleBarranca"
                  className="nounderline"
                >
                  <span className="fw-normal ">Nicole</span> Barranca
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-3 col-sm-3 " id="whatever">
            <h5 id="whatevernowFooter">WhateverNow</h5>
            <ul className="list-unstyled " id="whatevernowFooterList">
              <Link to="/" className="nounderline">
                <li>Home</li>
              </Link>
              <Link to="/accountsettings" className="nounderline ">
                <li>Account Settings</li>
              </Link>
              <Link to="/login" className="nounderline">
                <li>Login</li>
              </Link>
              <Link to="/signup" className="nounderline">
                <li>Sign Up</li>
              </Link>
              <Link to="/logout" className="nounderline">
                <li>Logout</li>
              </Link>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-3 col-sm-3 ">
            <a href="https://github.com/chloeyarb/Whatever-Now" id="icon">
              <FontAwesomeIcon icon={faGithub} className="iconStyle" />
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-2 d-flex justify-content-center" id="copy">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} WhateverNow - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
