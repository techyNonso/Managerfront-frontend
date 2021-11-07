import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { connect } from "react-redux";
import propTypes from "prop-types";
import Auth from "Components/auth";
import logout from "../modules/logout";
import logo from "../src/img/icon.png";
import bg from "../src/img/header3.jpg";
import cloud from "../src/froala/imgs/icons/cloud.svg";
import github from "../src/froala/imgs/icons/github.svg";
import compass from "../src/froala/imgs/icons/compass.svg";
import intro from "../src/img/intro.png";
import shapes from "../src/froala/imgs/shapes/8.svg";
import draws from "../src/froala/imgs/draws/rocket.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      online: "none",
      offline: "block",
      location: "",
    };

    this.isEmpty = this.isEmpty.bind(this);
  }

  //user checker
  isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }

    return true;
  }

  //logout
  myLogout = () => {
    logout();
  };
  componentDidMount() {
    //add color to link
    this.setState({
      location: this.props.location.pathname,
    });
    //check if logged in
    if (Auth.isAuthenticated()) {
      this.setState({
        online: "block",
        offline: "none",
      });
    } else {
      this.setState({
        online: "none",
        offline: "block",
      });
    }
  }

  render() {
    const bg_image = `url(${bg})`;
    const shapes_image = `url(${shapes})`;
    return (
      <div>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top navBar">
          <div className="container" style={{ backgroundColor: "inherit" }}>
            <Link className="navbar-brand" to="/">
              <img src={logo} alt="" width="50px" />
              <span id="myLogo">Managerfront</span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link pl-2" to="/" id="active">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-2" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-2" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link pl-2" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item" style={{ display: this.state.online }}>
                  <Link className="nav-link pl-2" to="/dashboard">
                    Dashboard
                  </Link>
                </li>

                <li
                  className="nav-item"
                  style={{ display: this.state.offline }}
                >
                  <Link className="nav-link pl-2" to="/signin">
                    Sign in
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ display: this.state.offline }}
                >
                  <Link className="nav-link pl-2" to="/signup">
                    Sign up
                  </Link>
                </li>
                <li
                  className="nav-item"
                  style={{ display: this.state.online }}
                  onClick={this.myLogout.bind(this)}
                >
                  <Link className="nav-link pl-2" to="#">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header
          style={{ backgroundImage: bg_image }}
          location={this.state.location}
        >
          <div className="headershade">
            <div className="headerContent">
              <h2>We have you covered.</h2>
              <span>
                Monitor your business performance from anywhere in the world.
                Made for all SMEs' and all business that require proper
                management.
              </span>

              <div>
                <Link to="/get-started" className="btn btn-success mt-4">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </header>

        <section className="fdb-block">
          <div className="container">
            <div className="row text-center justify-content-center pt-5 p-4">
              <div className="col-12 col-sm-6 col-lg-4 pt-lg-0 p-4">
                <div className="border p-4">
                  <img alt="image" className="fdb-icon" src={cloud} />

                  <h3>
                    <strong>Accessible</strong>
                  </h3>

                  <p>Have your business in your palm anywhere in the world</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 pt-lg-0 p-4">
                <div className="border p-4">
                  <img alt="image" className="fdb-icon" src={github} />

                  <h3>
                    <strong>Secured</strong>
                  </h3>

                  <p>Business data passed through a secured channel.</p>
                </div>
              </div>

              <div className="col-12 col-sm-6 col-lg-4 pt-4 pt-lg-0">
                <div className="border p-4">
                  <img alt="image" className="fdb-icon" src={compass} />

                  <h3>
                    <strong>Accurate</strong>
                  </h3>

                  <p>Get accurate analysis of your business performance.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fdb-block block-top-adjust">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 mb-4 mb-md-0">
                <img alt="image" className="img-fluid" src={intro} />
              </div>
              <div className="col-12 col-md-6 col-lg-5 ml-md-auto text-left">
                <h1>Managerfront</h1>
                <p className="lead">
                  Managerfront is for all business that require proper and good
                  management, ranging from Boutiques, Pharmacy outlets,
                  Suppermarkets, Malls, Beauty shops and also all business where
                  management is required.
                </p>
                <p>
                  <Link to="/get-started" className="btn btn-success mt-4">
                    Get Started
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="fdb-block block-top-adjust">
          <div className="container">
            <h2 className="pb-3" id="features">
              Features
            </h2>
            <div className="row text-left">
              <div className="col-12 col-md-8 m-auto col-lg-4">
                <div className="fdb-box fdb-touch">
                  <h2>Inventory</h2>
                  <p>
                    Managerfront helps you keep a proper inventory of all your
                    stock. Monitoring quantity and life.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div className="fdb-box fdb-touch">
                  <h2>Staff management</h2>
                  <p>
                    With managerfront, you will have a record of all your your
                    staff in all your business branches.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div className="fdb-box fdb-touch">
                  <h2>Sales Record</h2>
                  <p>
                    Managerfront helps you process all forms of sales;
                    generating all assciated invoice an keeping records of them.
                  </p>
                </div>
              </div>
            </div>
            <div className="row text-left mt-3">
              <div className="col-12 col-md-8 m-auto col-lg-4">
                <div className="fdb-box fdb-touch">
                  <h2>Debt record</h2>
                  <p>
                    Managerfront helps you keep a record of all debts from
                    customers till the debts are cleared.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div className="fdb-box fdb-touch">
                  <h2>Analysis</h2>
                  <p>
                    Managerfront monitors your business to give you a proper
                    analysis of your business performance.
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-8 m-auto col-lg-4 pt-5 pt-lg-0">
                <div className="fdb-box fdb-touch">
                  <h2>Account</h2>
                  <p>
                    Managerfront gives you a proper accounting of all
                    transactions that take place in all your business premisses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="fdb-block block-top-adjust"
          style={{ backgroundImage: shapes_image }}
        >
          <div className="container">
            <div className="row text-center">
              <div className="col" id="pricing">
                <h1>Pricing Plans</h1>
              </div>
            </div>

            <div className="row mt-5 align-items-top">
              <div className="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left">
                <div className="bg-white p-3 text-center rounded sl-1 boxShadow">
                  <h3 className="font-weight-light">Standard</h3>
                  <strong className="h4">₦50,000.00</strong>
                  <br />
                  <br />
                  <strong className="h6 text-success">₦0.00 / Month</strong>
                  <p
                    className="text-center mt-4"
                    style={{ display: this.state.offline }}
                  >
                    <Link to="/signup" className="btn btn-outline-success">
                      Sign Up
                    </Link>
                  </p>

                  <hr className="mt-5 mb-5" />

                  <p>
                    <strike>Online Access</strike>
                  </p>
                  <p>Desktop Application</p>
                  <p>1 Branch</p>
                </div>
              </div>

              <div className="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-md-0">
                <div className="bg-white p-3 text-center rounded sl-1 boxShadow">
                  <h3 className="font-weight-light">Premium Pro</h3>
                  <strong className="h4">₦50,000.00</strong>
                  <br />
                  <br />
                  <strong className="h6 text-success">₦3,000.00 / Month</strong>
                  <p
                    className="text-center mt-4"
                    style={{ display: this.state.offline }}
                  >
                    <Link to="/signup" className="btn btn-outline-success">
                      Sign Up
                    </Link>
                  </p>

                  <hr className="mt-5 mb-5" />

                  <p>Online Access</p>
                  <p>Desktop Application</p>
                  <p>3 Branches</p>
                </div>
              </div>

              <div className="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">
                <div className="bg-white p-3 text-center rounded sl-1 boxShadow">
                  <h3 className="font-weight-light">Premium Maxi</h3>
                  <strong className="h4">₦50,000.00</strong>
                  <br />
                  <br />
                  <strong className="h6 text-success">₦5,550.00 / Month</strong>
                  <p
                    className="text-center mt-4"
                    style={{ display: this.state.offline }}
                  >
                    <Link to="/signup" className="btn btn-outline-success">
                      Sign Up
                    </Link>
                  </p>

                  <hr className="mt-5 mb-5" />

                  <p>Online Access</p>
                  <p>Desktop Application</p>
                  <p>5 Branches</p>
                </div>
              </div>

              <div className="col-12 col-sm-10 col-md-6 col-lg-5 m-auto col-xl-3 text-left pt-5 pt-xl-0">
                <div className="bg-white p-3 text-center rounded sl-1 boxShadow">
                  <h3 className="font-weight-light">Premium Advance</h3>
                  <strong className="h4">₦50,000.00</strong>
                  <br />
                  <br />
                  <strong className="h6 text-success">
                    ₦12,000.00 / Month
                  </strong>
                  <p
                    className="text-center mt-4"
                    style={{ display: this.state.offline }}
                  >
                    <Link to="/signup" className="btn btn-outline-success">
                      Sign Up
                    </Link>
                  </p>

                  <hr className="mt-5 mb-5" />

                  <p>Online Access</p>
                  <p>Desktop Application</p>
                  <p>Unlimited Branches</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="fdb-block block-top-adjust">
          <div className="container">
            <div className="row align-items-center text-left">
              <div className="col-12 col-md-8">
                <h1>Join In</h1>
                <p className="lead">
                  You are one step away to enjoying this awesome app. Join in
                  and get the best out of your business.
                </p>
              </div>
              <div className="col-12 col-md-3 ml-auto text-left text-md-right">
                <p>
                  <Link to="/get-started" className="btn btn-success">
                    Get Started
                  </Link>
                </p>
              </div>
            </div>

            <div className="row pt-5">
              <div className="col-6 offset-3">
                <img alt="image" className="img-fluid" src={draws} />
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.account.item,
});

export default connect(mapStateToProps, null)(Home);