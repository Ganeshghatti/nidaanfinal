import React,{useEffect} from "react";
import { HashLink } from "react-router-hash-link";
import arrow from "../../Assets/arrow-right-bk.svg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetSection = document.querySelector(location.hash);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <>
      <div className="footerContainer">
        <div className="upperFooter">
          <div className="footerItem">
            <h3 className="footerHeading">Platform</h3>
            <div className="footerLinkContainer">
              <Link to="/#homeTop" className="footerLink">
                Home
              </Link>
              <Link to="/meetneo/#chatBot" className="footerLink">
                Meet Neo
              </Link>

              <Link to="/pricing#priceTop" className="footerLink">
                Pricing
              </Link>
              {/* 
              <a href="/blogs" className="footerLink">
                Blogs
              </a> */}
            </div>
          </div>

          <div className="footerItem">
            <h3 className="footerHeading">Company</h3>
            <div className="footerLinkContainer">
              <HashLink smooth to="/contact#aboutUs" className="footerLink">
                About Us
              </HashLink>
              <Link to="/contact/#contactTop" className="footerLink">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="footerItem">
            <h3 className="footerHeading">Trust</h3>
            <div className="footerLinkContainer">
              <a
                href="https://sites.google.com/view/nidaantech/terms-of-use"
                target="_blank"
                className="footerLink"
              >
                Terms of Use
              </a>
              <a
                href="https://sites.google.com/view/nidaantech/privacy-policy"
                target="_blank"
                className="footerLink"
              >
                Privacy Policy
              </a>
              {/* <a href="" className="footerLink">Cookie Policy</a> */}
            </div>
          </div>

          <div className="footerItem">
            <h3 className="footerHeading">Connect</h3>
            <div className="footerLinkContainer">
              <a
                href="https://instagram.com/nidaan_ai?igshid=NzZlODBkYWE4Ng=="
                target="_blank"
                className="footerLink"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61551775981818"
                target="_blank"
                className="footerLink"
              >
                Facebook
              </a>
              <a
                href="https://youtube.com/@Nidaan-AI?si=Mzzrn0pSmgibD89U"
                target="_blank"
                className="footerLink"
              >
                Youtube
              </a>
              <a
                href="https://www.linkedin.com/company/nidaantech"
                target="_blank"
                className="footerLink"
              >
                LinkedIn
              </a>

              {/* <span className="footerLink">Twitter</span> */}
            </div>
          </div>

          <div className="footerItem" id="newsLetter">
            <h3 className="footerHeading" id="newsLetterHeading">
              Stay Updated
            </h3>
            <div className="newsLetter">
              <input
                type="email"
                name=""
                id=""
                className="newsLetterEmailInput"
                placeholder="Email address..."
              />
              <button className="newsLetterBtn">
                Subscribe Now
                <img src={arrow} alt="" />
              </button>
            </div>
            <p className="newsLetterText">
              You will receives some occasionally email from team Nidaan. You
              will get unsubscribe option in each mail.
            </p>
          </div>
        </div>
        <div className="lowerFooter">© 2023 Nidaan. All rights reserved.</div>
      </div>
    </>
  );
};

export default Footer;
