import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Prililesidebar from "../components/Prililesidebar";

const Profile = () => {
  useEffect(() => {
    let authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      window.location.href = "/";
    }
  }, []);

  return (
    <>
      {/* <h1>hello</h1> */}
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="row">
          <Prililesidebar />
          <div className="col-md-8 shadow p-3">
            <div className="row">
              <Link to="/profiledetails" className="col-sm-4">
                <div
                  className="col-sm-12 m-2 shadow-sm p-5 text-light"
                  style={{ backgroundColor: "#a8203b" }}
                >
                  <p className="text-center ">Profile Status</p>
                </div>
              </Link>
              <Link to="/" className="col-sm-4">
                <div
                  className="col-sm-12 m-2 shadow-sm p-5 text-light"
                  style={{ backgroundColor: "#a8203b" }}
                >
                  <p className="text-center">Application Filled</p>
                </div>
              </Link>
              <Link to="/" className="col-sm-4">
                <div
                  className="col-sm-12 m-2 shadow-sm p-5 text-light"
                  style={{ backgroundColor: "#a8203b" }}
                >
                  <p className="text-center">Application Accepted</p>
                </div>
              </Link>
              <Link to="/" className="col-sm-4">
                <div
                  className="col-sm-12 m-2 shadow-sm p-5 text-light"
                  style={{ backgroundColor: "#a8203b" }}
                >
                  <p className="text-center">Confirmed Admission</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
