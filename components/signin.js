import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import Header from "./header";
import Footer from "./footer";
import axiosInstance from "Modules/axiosInstance";
import { saveUser } from "Store/actions/accountAction";
import validate from "Components/formHandler/validateInfo";
import useForm from "Components/formHandler/useForm";
import in_img from "../src/img/login-img.jpg";

function Signin(props) {
  const history = useHistory();
  const initialFormData = Object.freeze({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const { handleChange, values, errors, handleSubmit } = useForm(
    validate,
    history,
    "signin",
    setLoading,
    saveUser
  );

  return (
    <div>
      <Header location={props.location.pathname} />
      <div className="main">
        <section className="sign-in">
          <div className="container formContainer">
            <div className="signin-content">
              <div className="signin-image">
                <figure>
                  <img src={in_img} alt="sign in image" />
                </figure>
              </div>

              <div className="signin-form">
                <h2 className="form-title">Login</h2>
                <form method="POST" className="register-form" id="login-form">
                  {errors.credentials && (
                    <p className="formError">{errors.credentials}</p>
                  )}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="formError">{errors.email}</p>}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="your_pass"
                      placeholder="Password"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.password && (
                    <p className="formError">{errors.password}</p>
                  )}
                  {/**
                   <div className="form-group">
                    <input
                      type="checkbox"
                      name="remember-me"
                      id="remember-me"
                      className="agree-term"
                    />
                    <label className="label-agree-term">
                      <span>
                        <span></span>
                      </span>
                      Remember me
                    </label>
                  </div>
                  */}
                  <div className="form-group form-button mb-2">
                    <input
                      type="submit"
                      name="signin"
                      id="signin"
                      className="btn btn-small btn-success"
                      value="Log in"
                      disabled={loading}
                      onClick={handleSubmit}
                    />
                    <br />
                    <br />
                    <Link
                      to="/reset-password"
                      className="signup-image-link"
                      style={{ textDecoration: "underline" }}
                    >
                      Forgot password
                    </Link>
                    <br />
                    <Link
                      to="/signup"
                      className="signup-image-link"
                      style={{ textDecoration: "underline" }}
                    >
                      Create an account
                    </Link>
                  </div>
                </form>
                {/**
                <div className="social-login">
                  <span className="social-label">Or login with</span>
                  <ul className="socials">
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="display-flex-center zmdi zmdi-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

Signin.propTypes = {
  saveUser: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.account.item,
  company: state.companies.item,
});

export default connect(mapStateToProps, { saveUser })(Signin);
