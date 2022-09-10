import { Button } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Filterbar from "./Filterbar";
import "./outer.css";
import "./filter.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';
// import Slider from './Slider';
// import webroukCustomRange from "https://cdn.skypack.dev/webrouk-custom-range@latest";
import { Link } from "react-router-dom";
import Universitylist from "../country-university/Universitylist";
// import { Button } from '@mui/material';

const Outeruniverities = () => {
  return (
    <>
      <Navbar />
      {/* <Filterbar/> */}

      {/* <Universitylist/> */}
      <div className="lists container-fluid ">
        <h3 className="text-center">MBBS COLLEGES IN RUSSIA</h3>
        <Button
          className=" text-light"
          style={{ backgroundColor: "#a8203b" }}
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasWithBothOptions"
          aria-controls="offcanvasWithBothOptions"
        >
          <i class="fa-solid fa-bars"></i>&nbsp;Course Filters
        </Button>
        <div className="row mt-5">
          <div
            class="offcanvas offcanvas-start p-0"
            style={{ overflowX: "hidden !important" }}
            data-bs-scroll="false"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              {/* <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5> */}
              <h4 className="text-left">Course Filter</h4>

              <button
                type="button"
                class="btn-close ms-auto "
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div id="sidebar" className="">
                <header></header>

                <Box sx={{ minWidth: 120 }} className="">
                  <label>Course Type</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Course Type"
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Course Level</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Select
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Course Level"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Course Program</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Choose Course Program
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Course Program Entrance"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Course</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">MBBS</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Course"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Country</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Russia
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Country"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Specialization</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">MBBS</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Specialization"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <div className="row">
                  <div className="col-sm-6">
                    <Box sx={{ minWidth: 120 }} className="mt-3">
                      <label>Intake</label>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select Month
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value=""
                          label="Intake"
                          className="border-0"
                          style={{ border: "none" }}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                  <div className="col-sm-6">
                    <Box sx={{ minWidth: 120 }} className="mt-3">
                      <label className="text-white">Specialization</label>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Select Year
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value=""
                          label="Specialization"
                          className="border-0"
                          style={{ border: "none" }}
                        >
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </div>
                </div>
                <header>
                  <h4 className="text-left mt-3">Eligibility Filter</h4>
                </header>

                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label className="">Required Degree</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Entrance Exam{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Required Degree"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>

                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Grading Scheme</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Entrance Exam{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Grading Scheme"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Grading Average</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Entrance Exam{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Grading Average"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Box sx={{ minWidth: 120 }} className="mt-3">
                  <label>Entrance Exam</label>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Entrance Exam{" "}
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value=""
                      label="Entrance Exam"
                      className="border-0"
                      style={{ border: "none" }}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Button
                  className=" text-right text-light mt-3 ms-auto "
                  style={{ backgroundColor: "#a8203b" }}
                >
                  Reset
                </Button>
                <Button
                  className=" text-right text-light mt-3 ms-3 "
                  style={{ backgroundColor: "#a8203b" }}
                >
                  Apply Filter
                </Button>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6  ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              class="card mb-3 border-0 shadow p-3 ms-auto me-auto"
              style={{ maxWidth: "760px" }}
            >
              <div class="row g-0">
                <div class="col-md-5 text-center">
                  <img
                    src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg"
                    class="img-fluid rounded-start"
                    style={{ height: "120px" }}
                    alt="..."
                  />
                  <h5 style={{ fontSize: "14px" }}>Kazan Federal University</h5>
                  <small className="text-muted fw-regular">
                    Kazan , Russia
                  </small>
                  <br></br>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i
                    class="fa-solid fa-star text-warning"
                    style={{ fontSize: "13px" }}
                  ></i>
                  <i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>
                </div>
                <div class="col-md-7">
                  <div class="card-body">
                    <h5 class="card-title">MBBS</h5>
                    <div className="row inner-row">
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Level
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Course Duration
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Total Course Fee
                          </li>
                          <li className="fw-bold" style={{ fontSize: "13px" }}>
                            Application Fees
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              <i class="fa-solid fa-eye"></i>View Course
                            </Button>
                          </Link>
                        </ul>
                      </div>
                      <div className="col-sm-6 col-md-6">
                        <ul>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Bachelor’s
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            6 Years
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            {" "}
                            $ 37347(₹ 2726334)
                          </li>
                          <li
                            className="fw-bold text-muted"
                            style={{ fontSize: "13px" }}
                          >
                            Free
                          </li>
                          <Link to="/apply">
                            {" "}
                            <Button
                              className="text-light mt-2"
                              style={{ backgroundColor: "#a8203b" }}
                            >
                              Apply Now
                            </Button>
                          </Link>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Outeruniverities;
