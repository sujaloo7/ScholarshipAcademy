import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
// import "./Card.css";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { getCountry } from "../Repository/UserRepository";
import Footer from "../components/Footer";
import Universitylist from "../country-university/Universitylist";

const Universities = () => {
  const [countryList, setCountryList] = useState([]);

  const countries = async () => {
    let res = await getCountry({ is_all: true });
    console.log("this is ressss", res);
    setCountryList(res.data);
  };

  useEffect(() => {
    countries();
  }, []);

  return (
    <>
      <Navbar />
      {/* <Universitylist/> */}
      <div
        className="tags container-fluid"
        style={{
          backgroundImage:
            "url('https://i.guim.co.uk/img/media/e842fc210be953538b18cf81f1b01068177b731c/0_495_7360_4417/master/7360.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fc1b3878dcc40dedbb71a2d5e49b231c')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "auto",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="row"
          style={{ backgroundColor: "rgb(0,0,0,0.5)", height: "auto" }}
        >
          <h5 className="text-center mb-5 mt-3 text-light">
            Search Your Dream University
          </h5>

          <div className="container mb-0 px-5">
            <div className="row">
              {countryList.map((ele, index) => {
                return (
                  <Link
                    to={`/outeruniversities/${ele.country_name}`}
                    className="col-sm-3"
                  >
                    <div className="  col-sm-12 mb-3 shadow">
                      <div
                        class="button_slide slide_diagonal ripple  p-0 card border-0"
                        style={{ border: " 1px solid #000" }}
                      >
                        <div class="card-body text-center ">
                          <p className=" mt-3 text-dark fw-bold">
                            {ele.country_name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <div className="text-center mt-0  p-0">
            <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/myProfileFooter_4e9fe2.png" className='w-100 ' alt="" />
          </div> */}
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default Universities;
