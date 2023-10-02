import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import menu from "../../Assets/menu.svg";
import cross from "../../Assets/menuCross.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/User";
import {
  GoogleOAuthProvider,
  googleLogout,
  GoogleLogin,
} from "@react-oauth/google";

import "./NavBar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let user = useSelector((state) => state.user);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };
  const logoutf = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  const handlegooglelogout = () => {
    localStorage.removeItem("user");
    dispatch(logout());
    googleLogout();
  };

  return (
    <nav className="navBar">
      <HashLink to="/#homeTop">
        <img src={logo} alt="NIDAAN" className="navLogo" />
      </HashLink>
      <div className={`navHiddenContainer ${isMenuOpen ? "open" : ""}`}>
        <div className="navLinkConatiner">
          <div className="navLink">
            <HashLink smooth to="/#homeTop" onClick={handleLinkClick}>
              Home
            </HashLink>
            <HashLink smooth to="/meetneo#chatBot" onClick={handleLinkClick}>
              Meet with Neo
            </HashLink>
            <HashLink smooth to="/pricing#priceTop" onClick={handleLinkClick}>
              Pricing
            </HashLink>
            {/* <HashLink smooth to="/blogs" onClick={handleLinkClick}>
              Blogs
            </HashLink> */}
            <HashLink smooth to="/contact#contactTop" onClick={handleLinkClick}>
              Contact Us
            </HashLink>
          </div>

          {user.user.email ? (
            user.user.type === "Google" ? (
              <>
                <p>signed in with google via {user.user.email}</p>
                <button className="registerBtn" onClick={handlegooglelogout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <p>Signed in as {user.user.email}</p>
                <button className="registerBtn" onClick={logoutf}>
                  Logout
                </button>
              </>
            )
          ) : (
            <div className="registerSection">
              <Link to="/signin">
                <button className="signInBtn" onClick={handleLinkClick}>
                  Sign In
                </button>
              </Link>
              <Link to="/register">
                <button className="registerBtn" onClick={handleLinkClick}>
                  Register Now
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <img
        src={menu}
        alt=""
        id="menuBtn"
        className={`menuBtn ${isMenuOpen ? "" : "open"}`}
        onClick={toggleMenu}
      />
      <img
        src={cross}
        alt=""
        id="crossBtn"
        className={`crossBtn ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default NavBar;
