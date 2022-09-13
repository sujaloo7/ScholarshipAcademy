import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import "../pages/home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { userLogin } from "../Repository/UserRepository";
import axios from "axios";
import profilepic from "../images/profile-picture.gif";
import { Button, TextField } from "@mui/material";
import search from "../images/search.gif";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Partner from "../inner-pages/Partner";
function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { user, logout } = useState();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // const userLogin = async () => {
  //   try {
  //     await axios.get('http://3ab9-122-160-30-226.ngrok.io/token', { withCredentials: true });
  //     setIsLoggedIn(true)
  //   } catch (e) {
  //     setIsLoggedIn(false)
  //     console.log(e)
  //   }
  // }
  const logOut = () => {
    localStorage.clear();
    // window.location.href = "/login";
    navigate("/login");
  };
  // const handleLogout = async () => {
  //   try {
  //       await logOut();
  //       navigate('/login')
  //   }
  //   catch (error) {
  //       console.log(error)
  //   }
  // }
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
    let authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light p-0 text-dark shadow-sm px-4 sticky-top">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            {" "}
            <img src={logo} alt="" height="40" />{" "}
          </Link>
          <button
            class="navbar-toggler border-0 outline-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-auto me-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">
                  Study Abroad{" "}
                </a>
                <div class="dropdown-content">
                  <Link to="/universities">
                    <img
                      src="https://images.leverageedu.com/landing-pages/destinations1.svg"
                      height="25"
                      alt=""
                    />{" "}
                    &nbsp;Destinations<i class="fa fa-arrow-right ms-5"></i>
                  </Link>
                  <Link to="/outeruniversities/all">
                    {" "}
                    <img
                      src="https://images.leverageedu.com/landing-pages/university1.svg"
                      height="25"
                      alt=""
                    />
                    &nbsp; Universities<i class="fa fa-arrow-right ms-5"></i>
                  </Link>
                  <Link to="/course">
                    {" "}
                    <img
                      src="https://images.leverageedu.com/landing-pages/content1.svg"
                      height="25"
                      alt=""
                    />{" "}
                    &nbsp;&nbsp;Courses&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </Link>
                  {/* <a href="#"> <img src="https://images.leverageedu.com/landing-pages/ebook1.svg" height="25" alt="" /> &nbsp;&nbsp;Ebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a> */}
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">
                  Test Prep
                </a>
                <div class="dropdown-content">
                  <a href=" https://germanshala.com/">
                    {" "}
                    Aufnahmetest
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    German Language
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    {" "}
                    Test AS
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    {" "}
                    ILETS
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    GMAT
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    {" "}
                    GRE
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    {" "}
                    SAT
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    TOEFL
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href=" https://germanshala.com/">
                    {" "}
                    PTE
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  {/* <a href="#">SAT &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a>
                  <a href="#">TOEFL &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a>
                  <a href="#">PTE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a>
                  <a href="#">Need help? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a> */}
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">
                  Finance
                </a>
                <div class="dropdown-content p-0">
                  <a href="/finance">
                    {" "}
                    <img
                      src="https://images.leverageedu.com/landing-pages/loans_icon.svg"
                      height="25"
                      alt=""
                    />{" "}
                    &nbsp; Loans
                  </a>
                  {/* <!-- <small style="">Finance your study abroad dream</small> --> */}
                  <a href="money">
                    <img
                      src="https://images.leverageedu.com/landing-pages/imt_icon.svg"
                      height="25"
                      alt=""
                    />
                    &nbsp;&nbsp;&nbsp;International Money Transfer
                  </a>
                  <a href="/bankaccount">
                    <img
                      src="https://images.leverageedu.com/landing-pages/ibt_icon.svg"
                      height="25"
                      alt=""
                    />
                    &nbsp;&nbsp;&nbsp;International Bank Account
                  </a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">
                  Community
                </a>
                <div class="dropdown-content">
                  <a href="#">
                    Study Abroad&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href="#">
                    IETLS Prep&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href="#">
                    Offer Holders&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                </div>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">Product</a>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </li> */}
              <li class="nav-item dropdown">
                <a class="nav-link dropbtn" href="#">
                  More{" "}
                </a>
                <div class="dropdown-content">
                  {/* <a href="#">About Us&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-arrow-right ms-5"></i></a> */}
                  <a href="/foruniversities">
                    For Universities&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                  <a href="/category">
                    Explore&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <i class="fa fa-arrow-right ms-5"></i>
                  </a>
                </div>
              </li>
            </ul>
            {/* <ul class="me-5">
                <li class="nav-item dropdown">
                    <a class="nav-link dropbtn p-0 pt-" href="#">
                       <img src="https://images.leverageedu.com/landing-pages/phone_icon_b.png" height="20" alt=""/>
                    </a>
                    <div class="dropdown-content">
                        <a href="#" type="tel">9782731398</a>
                      </div>
                  </li>
               </ul> --> */}
            {/* <input type="text" class=" search form-control w-25 me-3 border-0" style={{ backgroundColor: "#f5faff" }} placeholder="Search For Universities & Courses" /> */}
            <ul className="navbar-nav ">
              <li className="nav-item dropdown me-4">
                <a className="nav-link dropbtn">
                  <i
                    class="fa-solid fa-phone p-2 "
                    style={{ border: "2px solid black ", borderRadius: "6px" }}
                  ></i>{" "}
                </a>
                <div className="dropdown-content-call">
                  <a href="tel: 98870 20529">+91 98870 20529</a>
                </div>
              </li>
              {/* <li className="nav-item  me-4">
                <a href="" className="nav-link dropbtn"><i class="fa-brands fa-whatsapp p-2 fw-bold" style={{ border: "2px solid black " , borderRadius: "6px" }}></i> </a>


              </li> */}
            </ul>

            {isLoggedIn && localStorage.getItem("user_type") === "student" ? (
              <div>
                {/* <NavLink to="/profile">
                  <button className='btn btn-dark text-light'>account</button>
                </NavLink>
                 */}
                <Link to="">
                  <img
                    src={profilepic}
                    className="mb-0"
                    height={68}
                    alt=""
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                </Link>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    {" "}
                    <Link to="/profile" className="text-dark">
                      {" "}
                      Profile{" "}
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </Menu>
              </div>
            ) : isLoggedIn &&
              localStorage.getItem("user_type") === "university" ? (
              <>
                <Link to="">
                  <img
                    src={profilepic}
                    className="mb-0"
                    height={68}
                    alt=""
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                  />
                </Link>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    "aria-labelledby": "basic-button",
                  }}
                >
                  <MenuItem>
                    {" "}
                    <Link to="/universityprofile" className="text-dark">
                      {" "}
                      University{" "}
                    </Link>
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <MenuItem onClick={logOut}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <div>
                {/* <Button className='mat  ' variant="contained" size="small" color="inherit">< FiLogIn size={15} />&nbsp;Login</Button> */}
                <Link to="/login" className="btn btn-primary p-4 py-2">
                  Login
                </Link>
                {/* <Button colorScheme='teal' size='xs'>
                                Button
                            </Button> */}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
