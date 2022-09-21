import React, { useState, useEffect } from "react";
import login from "../images/university.svg";
import { TextField, Button, Divider, Chip } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import {
  userRegister,
  getStudentCountry,
  getStudentState,
} from "../Repository/UserRepository";
import user from "../images/signup.gif";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Universitysignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [website, setWebsite] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  useEffect(() => {
    countries();
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const countries = async () => {
    let res = await getStudentCountry();
    setCountryList(res.data);
  };

  const navigate = useNavigate();
  const onchangeCountry = async (e) => {
    console.log(e.target.value);
    setCountry(e.target.value._id);
    let code = e.target.value.isoCode;
    let res = await getStudentState({
      countryCode: code,
    });
    if (res.status === 1) {
      setStateList(res.data);
    }
  };
  const registerUser = async (e) => {
    e.preventDefault();
    let res = await userRegister({
      name: name,
      email: email,
      mobile: mobile,
      password: password,
      country: country,
      state: state,
      official_website: website,
      user_type: "university",
    });

    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
      setTimeout(() => navigate("/university"), 2000);
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
      <div class="wrapper p-2">
        <div class="form-left bg-white text-center text-dark">
          <Link
            to="/"
            className="me-auto"
            style={{ textDecoration: "none", color: "#a8203b" }}
          >
            {" "}
            {"back to home"}
          </Link>
          <img src={user} height="350" alt="" />
          <h2 class="text-uppercase">University Registration</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <Link to="/signup" className="mt-5" style={{ color: "#a8203b" }}>
            Register As Student
          </Link>
          {/* <p class="text">
              <span>Sub Head:</span>
              Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.
            </p> */}
          <div class="form-field">
            {/* <input type="submit" class="account" value="Have an Account?" /> */}
            {/* <Link to="/login" className="btn btn-secondary">Already Have Account</Link> */}
          </div>
        </div>
        <form class="form-right" onSubmit={registerUser}>
          <h2 class="text-uppercase text-dark"> Registration</h2>
          <div class="row">
            <div class="col-sm-6 mb-3">
              <label>First Name</label>
              <input
                type="text"
                class="input-field"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div class=" col-sm-6 mb-3">
              <label>Your Email</label>
              <input
                type="email"
                class="input-field"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-6 ">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Country
                </label>
                <Select
                  // labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={age}
                  // label="selected country"
                  variant="filled"
                  style={{ width: "100%" }}
                  onChange={onchangeCountry}
                  required
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {countryList?.map((ele, index) => {
                    //   console.log("test", ele._id, "select", selectState);
                    return (
                      <MenuItem key={index} value={ele}>
                        {ele.name}
                      </MenuItem>
                    );
                  })}
                </Select>
                {/* <select
                    class="form-select input-field"
                    aria-label="Default select example"
                    onChange={onchangeCountry}
                  >
                    <option selected> </option>
                    {countryList.map((ele, index) => {
                      return <option value={ele}>{ele.name}</option>;
                    })}
                  </select> */}
                {/* <small style={{ fontSize: "12px" }}>We'll never share your email with anyone else</small> */}
              </div>
            </div>
            {/* <br></br> */}
            <div className="col-sm-6 mb-3">
              <label for="exampleInputEmail1" class="form-label ">
                State
              </label>
              <Select
                variant="filled"
                style={{ width: "100%" }}
                class="input-field form-select "
                label="Default select example"
                required
                onChange={(e) => setState(e.target.value)}
              >
                {stateList.map((ele, index) => {
                  console.log("ele", ele._id);
                  return (
                    <MenuItem key={index} value={ele._id}>
                      {ele.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6 mb-3">
              <label>Official Website</label>
              <input
                type="text"
                class="input-field"
                required
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label>Mobile Number</label>
              <input
                type="number"
                class="input-field"
                required
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
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
          <div className="col-sm-12 mb-4 d-flex" style={{ marginTop: "-17px" }}>
            <div className="col-sm-6">
              <Link
                to="/"
                className="text-decoration-none"
                style={{ fontSize: "13px", color: "#a8203b" }}
              >
                Forgot Password?
              </Link>
            </div>
            <div className="col-sm-6 ">
              <small style={{ fontSize: "12px" }} className="ms-4">
                Already Have Account ?
                <Link
                  to="/university"
                  className="text-decoration-none"
                  style={{ fontSize: "13px", color: "#a8203b" }}
                >
                  &nbsp;Sign In
                </Link>
              </small>
            </div>
          </div>
          {/* <div class="mb-3">
              <label class="option">I agree to the <a href="#">Terms and Conditions</a>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div> */}
          <div class="form-field">
            {/* <button type="submit" value="Register" class="register w-100" name="register"><button> */}
            <button className="btn btn-primary w-100" type="submit">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Universitysignup;
