import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getAboutUs } from "../Repository/UserRepository";
import { useState, useEffect } from "react";

const AboutUs = () => {
  const [about, setAbout] = useState("");
  useEffect(() => {
    GetAbout();
  }, []);

  const GetAbout = async () => {
    let res = await getAboutUs();
    if (res.status === 1) {
      setAbout(res.data.about_us);
    }
  };

  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              <h1 class="mb-5 fw-bold">About Us</h1>
              <p dangerouslySetInnerHTML={{ __html: about ? about : "" }}></p>
            </div>
          </div>
        </div>
      </div>
     
      <Footer />
    </>
  );
};

export default AboutUs;
