import React from "react";
import { Link } from "react-router-dom";
import profile from "./../img/a.png";
import email from "./../img/email.jpg";
import pass from "./../img/pass.png";

const Login = () => {
  return (
    <form action="/Home">
      <div className="main">
        <div className="sub-main">
          <div>
            <div className="imgs">
              <div className="container-image">
                <img src={profile} alt="profile" className="profile" />
              </div>
            </div>
            <div style={{ margin: "1rem" }}>
              <h1 style={{ margin: "1rem" }}>Login Page</h1>
              <div>
                <img src={email} alt="email" className="email" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
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
              <div className="login-button">
                <button className="submitBtn" type="submit" value="login">
                  Login
                </button>
              </div>

              <p className="link" style={{ width: "27%", margin: "0 auto" }}>
                <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
