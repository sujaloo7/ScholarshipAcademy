import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import logo from "../images/footer-logo.png";

function Footer() {
  return (
    <>
      <div className="text-center mt-5">
        <img
          src="https://html.crumina.net/html-olympus/img/group-bottom.webp"
          className="w-50"
          alt=""
        />
      </div>
      <footer class="footer_area section_padding_130_0">
        <div class="container">
          <div class="row ">
            <div class="col-12 col-sm-6 col-lg-4">
              <div class="single-footer-widget section_padding_0_130">
                <div class="footer-logo mb-3">
                  {" "}
                  <img
                    src={logo}
                    alt=""
                    height={50}
                    style={{ marginTop: "-40px" }}
                  />{" "}
                </div>
                <p style={{ fontSize: "15px" }}>
                  B-6, Rajendra Marg, Maharani Appartment <br></br>Bapu
                  Nagar,Jaipur-302015
                </p>

                <div class="copywrite-text mb-5">
                  <p class="mb-0" style={{ fontSize: "13px" }}>
                    Made <i class="lni-heart mr-1"></i>by
                    <a class="ml-1" href="/" style={{ fontSize: "13px" }}>
                      &nbsp;Scholarship-academy
                    </a>
                  </p>
                </div>

                <div class="footer_social_area">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i class="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Pinterest"
                  >
                    <i class="fa-brands fa-pinterest"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Skype"
                  >
                    <i class="fa-brands fa-skype"></i>
                  </a>
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i class="fa-brands fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h6 class="widget-title">About Academy</h6>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <a href="/blogs">Blog</a>
                    </li>

                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/contact-us">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/faq">FAQs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h6 class="widget-title">Student Resources</h6>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <Link to="/course">Higher Education</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h6 class="widget-title">Academy Services</h6>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <Link to="/student">Students</Link>
                    </li>
                    {localStorage.getItem("auth_token") ? (
                      localStorage.getItem("user_type") === "university" ? (
                        <>
                          <li>
                            <Link to="/login">Log in as Student</Link>
                          </li>
                          <li>
                            <Link to="/universityprofile">
                              Log in as University
                            </Link>
                          </li>
                        </>
                      ) : (
                        <>
                          <li>
                            <Link to="/profile">Log in as Student</Link>
                          </li>
                          <li>
                            <Link to="/university">Log in as University</Link>
                          </li>
                        </>
                      )
                    ) : (
                      <>
                        <li>
                          <Link to="/login">Log in as Student</Link>
                        </li>
                        <li>
                          <Link to="/university">Log in as University</Link>
                        </li>
                      </>
                    )}
                    <li>
                      <Link to="/university">Universities</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg">
              <div class="single-footer-widget section_padding_0_130">
                <h6 class="widget-title">Legal</h6>

                <div class="footer_menu">
                  <ul>
                    <li>
                      <Link to="/term-and-condition">
                        {" "}
                        Terms and Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link to="/working-policy">Working Policy</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
