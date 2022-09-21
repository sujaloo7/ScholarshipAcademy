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
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  const navigate = useNavigate();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const loginUser = async (e) => {
    e.preventDefault();
    let res = await userLogin({
      email: email,
      password: password,
      user_type: "student",
    });

    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
      localStorage.setItem("auth_token", res.data.token);
      localStorage.setItem("user_type", res.data.user_type);
      setTimeout(() => navigate("/"), 2000);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>

      <div
        class="wrapper mt-5 "
        style={{ height: "85vh", overflowY: "hidden" }}
      >
        <div class="form-left mt-4 bg-white text-center text-dark">
          <Link
            to="/"
            className="me-auto"
            style={{ textDecoration: "none", color: "#a8203b" }}
          >
            {" "}
            {"back to home"}
          </Link>
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
                required
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
