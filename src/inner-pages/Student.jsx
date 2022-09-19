import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../pages/home.css";
import { Link, useNavigate } from "react-router-dom";
import globe from "../images/global.gif";
import devied from "../images/divied.gif";
import quality from "../images/quality.gif";
import support from "../images/support.gif";
import Footer from "../components/Footer";
import multi from "../images/multi.gif";
import { Button } from "@mui/material";
import best from "../images/best.gif";

const Student = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />
      <div
        className="partner container-fluid "
        style={{
          backgroundImage:
            "url('https://www.standyou.com/images/parker-gibbons.jpg')",
          height: "500px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          overflowY: "hidden !important",
        }}
      >
        <div
          className="row p-5"
          style={{ backgroundColor: "rgb(0,0,0,0.7)", height: "510px" }}
        >
          <div className="mt-5 col-sm-7 ">
            <h3
              className=" text-light fw-bold fs-1"
              style={{ marginTop: "100px !important" }}
            >
              Increase Your Chance Of Section At World’s Best Universities
            </h3>
            <p className="text-light w-100 " style={{ fontSize: "14px" }}>
              Fulfill Your Dream Of Studying Abroad, Enroll For The Best Suited
              Course Program For You By Submitting The Common Application. Get
              Complete End-To-End Support By Our Experts
            </p>
            <Link to="/course">
              {" "}
              <Button
                variant="contained"
                className="mt-4 p-3 mb-3"
                style={{ backgroundColor: "#a8203b" }}
              >
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <h3 className="text-center mt-5 mb-5">How Standyou Helps The Students</h3>

      <div className="part2 container mb-3">
        <div className="row">
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12  h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/desktop.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">
                  Search The Right Course Program And University
                </h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  Our AI Enabled Platform Helps You In Finding The Best Course
                  And University For You As Per Your Educational Interest,
                  Scores, Profile And Financials..
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12  h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/application.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Fill The Common Application</h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  Apply For Your Selected University And Program By Filling The
                  Online Profile. Pay The Application Fees If Any. Submit The
                  Required Documents.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12 h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/letter.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Get Acceptance Letter</h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  If Your Application Gets Accepted By The University You Will
                  Receive The Acceptance Letter From The University.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12  h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/visa.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">It’s Time For Visa Applicationy</h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  With The Help Of Our Expert Team Apply And Get The Visa.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12 h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/assistance.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Our End-To-End Assistance</h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  Our Team Of Experts Will Help You In Documentation, Visa
                  Applications And Getting Finance. You Can Chat With University
                  Representative And Standyou Team By Login Into Your Dashboard.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
          <div class="card col-md-4 mb-3 text-center border-0 ">
            <div className="col-sm-12  h-100">
              <div className="text-center">
                <img
                  src="https://www.standyou.com/images/tickets.svg"
                  className=""
                  height={100}
                  width={200}
                  alt="..."
                />
              </div>
              <div class="card-body">
                <h5 class="card-title">Book Tickets And Fly</h5>
                <p class="card-text" style={{ fontSize: "13px" }}>
                  After Receiving The University Acceptance Letter And Visa You
                  Are All Ready To Start The Journey To Fulfill Your Career
                  Dreams.
                </p>
                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="partner container mb-5 mt-5">
        <div className="row mb-5 p-5">
          <div className="col-md-6 mt-5">
            <div className="col-sm-9 mt-5">
              <p style={{ fontSize: "14px" }}>
                Discover And Apply For The Best Course Program For You, Offered
                By Any Of The Institute In The World.
              </p>
              <p style={{ fontSize: "14px" }}>
                Get Access To Our Scholarship Programs, Financial Support And
                End To End Support To Realize Your Higher Education Dreams.
              </p>
              <Link to="/course">
                {" "}
                <Button
                  variant="contained"
                  className="mt-4 p-3 mb-3"
                  style={{ backgroundColor: "#a8203b" }}
                >
                  Discover Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="col-md-6 partner1 text-center">
            <img
              src={best}
              style={{ borderRadius: "100%" }}
              className="multi"
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;
