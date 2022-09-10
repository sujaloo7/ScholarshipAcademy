import React from "react";
import { useState } from "react";
import login from "../images/signinback.png";
import { TextField, Button, Divider, Chip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Loginnav from "./Loginnav";
import "./main.css";
// import { NotificationContainer, NotificationManager } from 'react-notifications';
import { userLogin } from "../Repository/UserRepository";
import user from "../images/user.gif";
import hide from "../images/hide.gif";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
    let res = await userLogin({
      email: email,
      password: password,
      user_type: "student",
    });

    alert(res.message);

    localStorage.setItem("auth_token", res.data.token);
    localStorage.setItem("user_type", res.data.user_type);
    navigate("/");
  };

  return (
    <>
      <div
        class="wrapper mt-5 "
        style={{ height: "85vh", overflowY: "hidden" }}
      >
        <div class="form-left mt-4 bg-white text-center text-dark">
          <img src={user} className="mt-5" height="350" alt="" />
        </div>

        <form class="form-right mt-5 " onSubmit={loginUser}>
          <h4 class="text-uppercase text-dark mb-5">Login As Student</h4>

          <div class="mb-3">
            <label>Your Email</label>
            <input
              type="email"
              class="input-field"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="row">
            <div class="col-sm-12 mb-3">
              <label>Set Password</label>
              <input
                type="password"
                class="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          {/* <div class="mb-3">
              <label class="option">I agree to the <a href="#">Terms and Conditions</a>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div> */}

          <div
            className="redirect col-sm-12 mb-3 d-flex "
            style={{ marginTop: "-17px" }}
          >
            <div className="col-sm-6">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ fontSize: "13px", color: "#a8203b" }}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="col-sm-6">
              <small style={{ fontSize: "12px" }} className="ms-4">
                Don't Have Account ?
                <Link
                  to="/signup"
                  className="text-decoration-none"
                  style={{ fontSize: "13px", color: "#a8203b" }}
                >
                  &nbsp;Sign Up
                </Link>
              </small>
            </div>
          </div>
          <div class="form-field">
            {/* <button type="submit" value="Register" class="register w-100" name="register"><button> */}
            <button className="btn btn-primary w-100 mb-4 p-2" type="submit">
              Login
            </button>

            <Divider className="col-sm-12 mb-2">
              <Chip label="OR" />
            </Divider>

            {/* <button className="btn btn-outline-primary w-100 mb-5 p-2" >Login As University</button> */}
            <div className="w-100 text-center mb-3">
              <Link
                to="/university"
                className="mt-0 text-center"
                style={{ color: "#a8203b", fontSize: "13px" }}
              >
                Login As University
              </Link>
            </div>
          </div>
        </form>

        {/* <img src={hide} alt="" /> */}
      </div>
    </>
  );
};

export default Login;
