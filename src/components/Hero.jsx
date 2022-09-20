import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import "../pages/home.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();

    
  }, []);
  return (
    <>
      <section className="hero mb-5 mt-5">
        <div className="container">
          <div className="row p-4">
            <div className="col-sm-6" data-aos={"fade-left"}>
              <div className="copy">
                <div className="text-label text-dark shadow-0">
                  Changes your bussiness is more better
                </div>
                <div className="text-hero-bold">
                  Grow Up Your Mind In the future
                </div>
                <div className="text-hero-regular">
                  There are so many variations passages of management Your
                  mindset about bussiness in your company or agency
                </div>
                <div className="cta">
                  <a
                    href="#getstarted"
                    className="but btn btn-primary shadow-none px-5"
                  >
                    Get Started
                  </a>
                  <Link
                    to="/category"
                    className="but btn btn-secondary shadow-none px-5 ms-3"
                  >
                    See Universities
                  </Link>
                  {/* <Link to="/outeruniversities" className='but2 btn btn-secondary shadow-none ms-3'>See Universities</Link> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6" data-aos={"fade-right"}>
              <img
                src="https://growup-demo.netlify.app/assets/img/illustration/Hero%20Image.svg"
                height={400}
                className="w-100"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
