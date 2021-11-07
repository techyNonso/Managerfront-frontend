import React from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "react-external-link";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div>
      <footer className="fdb-block footer-large bg-dark">
        <div className="container" style={{ backgroundColor: "inherit" }}>
          <div className="row align-items-top text-center">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
              <strong>Quick Link</strong>
              <nav className="nav flex-column">
                <Link className="nav-link active" to="/">
                  Home
                </Link>

                <AnchorLink className="nav-link" href="#features">
                  Features
                </AnchorLink>
                <AnchorLink className="nav-link" href="#pricing">
                  Pricing
                </AnchorLink>

                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </nav>
            </div>

            <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
              <strong>Other Links</strong>
              <nav className="nav flex-column">
                <Link className="nav-link active" to="/privacy">
                  Privacy Policy
                </Link>
                <Link className="nav-link" to="/terms">
                  Terms
                </Link>
                <Link className="nav-link" to="faq">
                  FAQ
                </Link>
              </nav>
            </div>

            <div className="col-12 col-md-4 col-lg-3 text-md-left mt-5 mt-md-0">
              <strong>About Us</strong>
              <p>
                We are an African Company working with Africa in mind. We are
                Focused on developing softwares to aid business growth.
              </p>
            </div>

            <div className="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
              <strong>Follow Us</strong>
              <p className="lead">
                <ExternalLink
                  href="https://web.facebook.com/profile.php?id=100009564907771"
                  style={{
                    color: "	#4267B2",
                    display: "inline-block",
                    padding: "10px",
                  }}
                >
                  {" "}
                  <i className="uil uil-facebook"></i>
                </ExternalLink>
                <ExternalLink
                  href="#"
                  style={{
                    color: "	#1DA1F2",
                    display: "inline-block",
                    padding: "10px",
                  }}
                >
                  <i className="uil uil-twitter"></i>
                </ExternalLink>
              </p>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col text-center">
              © 2021 managerfront. All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;