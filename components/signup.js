import React, { Component } from "react";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import axiosInstance from "Modules/axiosInstance";
import validate from "Components/formHandler/validateInfo";
import useForm from "Components/formHandler/useForm";
import up_img from "../src/img/sigup-img.jpg";
function Signup(props) {
  const history = useHistory();
  //handle states
  const [firstName, setFname] = useState("");
  const [lastName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setFPassword] = useState("");
  const [password2, setSPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const { handleChange, values, errors, handleSubmit } = useForm(
    validate,
    history,
    "signup",
    setLoading
  );

  return (
    <div>
      <Header location={props.location.pathname} />
      <div className="main">
        <section className="signup">
          <div className="container formContainer">
            <div className="signup-content">
              <div className="signup-form">
                <h2 className="form-title">Sign up</h2>

                <form
                  method="POST"
                  className="register-form"
                  id="register-form"
                >
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="fname"
                      placeholder="First Name"
                      value={values.firstname}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.firstname && (
                    <p className="formError">{errors.firstname}</p>
                  )}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-account material-icons-name"></i>
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="/name"
                      placeholder="Last Name"
                      value={values.lastname}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.lastname && (
                    <p className="formError">{errors.lastname}</p>
                  )}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.email && <p className="formError">{errors.email}</p>}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-email"></i>
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="Your phone number"
                      value={values.phone}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.phone && <p className="formError">{errors.phone}</p>}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-lock"></i>
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="pass"
                      placeholder="Password eg. Smith12?"
                      value={values.password}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.password && (
                    <p className="formError">{errors.password}</p>
                  )}
                  <div className="form-group">
                    <label>
                      <i className="zmdi zmdi-lock-outline"></i>
                    </label>
                    <input
                      type="password"
                      name="password2"
                      id="re_pass"
                      placeholder="Repeat your password"
                      value={values.password2}
                      onChange={handleChange}
                    />
                  </div>
                  {errors.password2 && (
                    <p className="formError">{errors.password2}</p>
                  )}
                  <div className="form-group">
                    <input
                      type="checkbox"
                      name="agree-term"
                      id="agree-term"
                      className="agree-term"
                    />
                    <label className="label-agree-term" htmlFor="agree-term">
                      <span>
                        <span></span>
                      </span>
                      I agree to
                      <Link
                        to="/terms"
                        className="term-service"
                        style={{ textDecoration: " underline" }}
                      >
                        Terms of service
                      </Link>
                    </label>
                  </div>
                  <div className="form-group form-button">
                    <input
                      type="submit"
                      name="signup"
                      id="signup"
                      className="btn btn-small btn-success"
                      value="Register"
                      disabled={loading}
                      onClick={handleSubmit}
                    />

                    <br />
                    <br />
                    <Link
                      to="/signin"
                      className="signup-image-link"
                      style={{ textDecoration: "underline" }}
                    >
                      I am already member
                    </Link>
                  </div>
                </form>
              </div>
              <div className="signup-image">
                <figure>
                  <img src={up_img} alt="sign up image" />
                </figure>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

export default Signup;
