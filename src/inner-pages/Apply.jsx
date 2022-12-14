import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
// import Slider from './Slider';
// import react from "react-dom"
import Carousel from "./Carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Fee from "../components/Fee";

import {
  getUniversitiesProfile,
  getCourse,
} from "../Repository/UserRepository";
import { imageUrl } from "../Repository/Repository";
// import Universitylist from '../country-university/universitylist';
const Apply = () => {
  const [type, setType] = useState("");
  const [university, setUniversity] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [fee, setFee] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);

    let typ = window.location.pathname.split("/").pop();

    GetUniversity(typ);

    setType(typ);
  }, []);

  const GetUniversity = async (typ) => {
    let res = await getUniversitiesProfile({ user_id: typ, for_country: true });
    if (res.status === 1) {
      setUniversity(res.data[0]);
    }
  };

  return (
    <>
      <Navbar />

      <div
        className=" container-fluid apply-con"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        {/* <Button>Back</Button> */}
        <div
          className="row p-5"
          style={{ backgroundColor: "rgb(0,0,0,0.7)", height: "auto" }}
        >
          <h3 className="text-center fw-bolder text-light">
            {university?.name}
          </h3>
          <div className="row">
            <div className="col-sm-4 text-center">
              <img
                src={`${imageUrl}${
                  university?.profile_picture
                    ? university.profile_picture
                    : "/public/no-university-image.png"
                }`}
                alt=""
                height={200}
              />
            </div>
            <div className=" col-sm-8 ">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <ul>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-location-pin"></i>{" "}
                      &nbsp;&nbsp;&nbsp;{university?.state_detail?.name} ,
                      {university?.country_detail?.name}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-graduation-cap"></i> &nbsp;
                      {university?.university_details?.university_type
                        ? university?.university_details?.university_type
                        : "Unknown"}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-building-columns"></i> &nbsp;&nbsp;{" "}
                      {university?.university_details?.established_year
                        ? university?.university_details?.established_year
                        : "Unknown"}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-medal"></i>&nbsp;&nbsp;&nbsp;World
                      Rank -
                      {university?.university_details?.world_rank
                        ? university?.university_details?.world_rank
                        : "Unknown"}
                    </li>
                  </ul>
                </div>
                <div className=" col-sm-4 ">
                  <ul>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-star"></i> &nbsp;&nbsp;&nbsp;Rating
                      -{" "}
                      {university?.university_details?.rating
                        ? university?.university_details?.rating
                        : "Unknown"}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-blender-phone"></i>{" "}
                      &nbsp;&nbsp;Accomodation&nbsp;
                      {university?.university_details?.accomodation ? (
                        <i class="fa-solid fa-circle-check ms-5 text-success "></i>
                      ) : (
                        <i class="fa-solid fa-circle-xmark ms-5 text-danger"></i>
                      )}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-hand-holding-medical "></i>{" "}
                      &nbsp;&nbsp;Scholarship&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {university?.university_details?.scholarship ? (
                        <i class="fa-solid fa-circle-check ms-5 text-success "></i>
                      ) : (
                        <i class="fa-solid fa-circle-xmark ms-5 text-danger"></i>
                      )}
                    </li>
                    <li
                      className="text-light fw-regular mb-2"
                      style={{ fontSize: "15px" }}
                    >
                      <i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;Part
                      Time Work
                      {university?.university_details?.part_time_work ? (
                        <i class="fa-solid fa-circle-check ms-5 text-success "></i>
                      ) : (
                        <i class="fa-solid fa-circle-xmark ms-5 text-danger"></i>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <nav className="shadow p-2 border-0  bg-white">
              <div
                class="nav nav-tabs ms-5 border-0"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active border-0 fw-bold text-dark"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Overview
                </button>
                <button
                  class="nav-link border-0 fw-bold text-dark"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                  onClick={async (e) => {
                    let res = await getCourse({
                      user_id: type,
                      page: 1,
                      pagesize: 10,
                    });
                    if (res.status === 1) {
                      setCourseList(res.data);
                    }
                  }}
                >
                  Details
                </button>
                {/* <a href="#course123">
                  <Button
                    className="ms-5 px-4"
                    style={{ backgroundColor: "#a8203b" }}
                    variant="contained"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Apply
                  </Button>
                </a> */}
              </div>
            </nav>
            <div class="tab-content p-5" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                <h4 className="mt-4" style={{ color: "#a8203b" }}>
                  About University
                </h4>
                <p
                  dangerouslySetInnerHTML={{
                    __html: university?.university_details?.about,
                  }}
                  className="text-muted"
                  style={{ textAlign: "justify", fontSize: "14px" }}
                ></p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                {" "}
                <div className="row" id="course123">
                  <h3 className="mt-4" style={{ color: "#a8203b" }}>
                    Browse By Courses
                  </h3>
                  <div className="col-sm-4 mt-4">
                    <Button
                      className="text-light"
                      style={{ backgroundColor: "#a8203b" }}
                    >
                      All Courses
                    </Button>
                    <Button
                      variant="outlined"
                      className="text-dark border-dark ms-4"
                    >
                      MBBS
                    </Button>
                  </div>
                  {courseList.map((ele, index) => {
                    return <Fee ele={ele} />;
                  })}
                  <Carousel />
                </div>
              </div>

              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="nav-disabled"
                role="tabpanel"
                aria-labelledby="nav-disabled-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Apply;
