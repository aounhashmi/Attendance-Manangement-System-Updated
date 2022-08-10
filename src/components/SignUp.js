import React from "react";
import { Link } from "react-router-dom";
import profile from "./../img/a.png";
import email from "./../img/email.jpg";
import pass from "./../img/pass.png";
const SignUp = () => {
  return (
    <form action="/">
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div style={{ padding: "0.1rem" }}>
              <h1 style={{ padding: "1.5rem" }}>SignUp Page</h1>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="name"
                  required={true}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="name"
                  required={true}
                />
              </div>
              <div className="second-input">
                <img src={pass} alt="pass" className="email" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Confirm Password"
                  className="name"
                  required={true}
                />
              </div>
              <div className="login-button">
                <button className="submitBtn" type="submit" value="SignUp">
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
export default SignUp;
