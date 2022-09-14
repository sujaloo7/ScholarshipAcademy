import React from "react";
// import { Link } from 'react-router-dom';
import logo from "../images/logo.png";
import "./home.css";

import { Link } from "react-router-dom";
// import logo from "../images/logo.png"
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Brands from "../components/Brands";
import Way from "../components/Way";
import Whywe from "../components/Whywe";
import University from "../components/University";
import Stream from "../components/Stream";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { addGuestUser } from "../Repository/UserRepository";
import "./home.css";
import { useState } from "react";
import Tomarrow from "../components/Tomarrow";

const Home = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);

  const submitPopUp = async (e) => {
    e.preventDefault();

    let res = await addGuestUser({
      email: email,
      mobile: mobile,
      name: name,
      type: type,
    });

    if (res.status === 1) {
      alert("your details submit successfully...we will be in touch");
    }
  };
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Way />
      <Whywe />
      <br></br>
      <Stream />
      <University />
      <Timeline />
      <Tomarrow />

      <div class="sticky-icon">
        <a
          href="#"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          class="Instagram"
        >
          <i class="fa-solid fa-user"></i>Cunsult
        </a>
      </div>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog ">
          <div class="modal-content ">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Hyy!!
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <small className="text-center mt-3 mb-2">Submit Your Detail</small>
            <div className="text-center">
              <img
                src="https://images.leverageedu.com/assets/img/male.png"
                style={{ borderRadius: "50%" }}
                height={150}
                width={150}
                alt=""
              />
            </div>
            <div class="modal-body p-5">
              <form action="" onSubmit={submitPopUp}>
                <div className="row mb-4">
                  <TextField
                    id="filled-basic"
                    label="Email"
                    variant="filled"
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="row mb-4">
                  <TextField
                    id="filled-basic"
                    label="Full Name"
                    variant="filled"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="row mb-4">
                  <TextField
                    type="number"
                    id="filled-basic"
                    label="Phone Number"
                    variant="filled"
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
                <div className="row">
                  <FormControl variant="filled">
                    <InputLabel id="demo-simple-select-filled-label">
                      Choose your Type
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      onChange={(e) => setType(e.target.value)}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value="student">Student</MenuItem>
                      <MenuItem value="university">University</MenuItem>
                    </Select>
                  </FormControl>

                  <button
                    type="submit"
                    class="btn btn-primary w-100 mt-4"
                    data-bs-dismiss="modal"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div class="modal-footer text-center"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
