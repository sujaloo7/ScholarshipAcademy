import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getFaq } from "../Repository/UserRepository";
import { useState, useEffect } from "react";
import { Card, Cardbody } from "@mui/material";

const FAQ = () => {
  const [faq, setFaq] = useState([]);
  useEffect(() => {
    window.scrollTo(0, 0);
    GetFaq();
  }, []);

  const GetFaq = async () => {
    let res = await getFaq({ is_all: true });
    if (res.status === 1) {
      setFaq(res.data);
    }
  };

  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              {/* {faq.map((ele, index) => {
                return (
                  <Card>
                    <strong>
                      <span>Q.{index + 1} &nbsp;</span>{" "}
                      <span>{ele?.question}</span>
                    </strong>
                    <p>Ans.</p>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: ele?.answer,
                      }}
                    ></p>
                    <br />
                  </Card>
                );
              })} */}
              <div className="col-sm-12 text-center">
                <img
                  src="https://images.leverageedu.com/assets/img/scholarships/faq-ico.svg"
                  alt=""
                />
                <h1 class="mb-5 fw-bold mt-4">Frequently Asked Questions</h1>
              </div>
              <div className="col-sm-12">
                <div class="accordion" id="accordionExample">
                  {faq.map((ele, index) => {
                    return (
                      <div class="accordion-item">
                        <h2 class="accordion-header" id={index}>
                          <p
                            // class="accordion-button"
                            // data-bs-toggle="collapse"
                            // data-bs-target={`#${index}`}
                            // aria-expanded="true"
                            aria-controls={index}
                            disabled
                            style={{
                              color: "#c44464",
                              fontSize: "13px",
                              backgroundColor: "#cfe2ff",
                            }}
                            className=" p-4"
                          >
                            Q.{index + 1} &nbsp;
                            {ele?.question}
                          </p>
                        </h2>
                        <div
                          id={index}
                          class="accordion-collapse collapse show"
                          aria-labelledby={index}
                          data-bs-parent={index}
                        >
                          <div
                            class="accordion-body p-0"
                            style={{ fontSize: "13px" }}
                          >
                            <p
                              dangerouslySetInnerHTML={{
                                __html: ele?.answer,
                              }}
                              className="ms-3"
                            ></p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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

export default FAQ;
