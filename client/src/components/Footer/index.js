import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <div className="main-footer fixed-bottom">
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-3 col-sm-6">
            <h4>Logo</h4>
          </div>
          {/* Column 2 */}
          <div className="col-md-3 col-sm-6">
            <h5>Contributors</h5>
            <ul className="list-unstyled text-muted">
              <li>Chloe Yarborough</li>
              <li>Robert Platzer Jr</li>
              <li>Alen Dunn</li>
              <li>Nico D'Anna</li>
              <li>Nicole Barranca</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-3 col-sm-6">
            <h5>WhateverNow</h5>
            <ul className="list-unstyled text-muted">
              <li>Home</li>
              <li>Login</li>
              <li>Signup</li>
              <li>Logout</li>
              <li>Account Settings</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="col-md-3 col-sm-6 mt-4">
            <a href="https://github.com/chloeyarb/Whatever-Now" id="icon">
              <FontAwesomeIcon icon={faGithub} className="iconStyle" />
            </a>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="mt-2">
          <p className="text-xs-center">
            &copy;{new Date().getFullYear()} WhateverNow - All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
