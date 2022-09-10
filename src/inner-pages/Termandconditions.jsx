import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getTermAndCondition } from "../Repository/UserRepository";
import { useState, useEffect } from "react";

const Termandconditions = () => {
  const [term, setTerm] = useState("");
  useEffect(() => {
    GetTerm();
  }, []);

  const GetTerm = async () => {
    let res = await getTermAndCondition();
    if (res.status === 1) {
      setTerm(res.data.term_and_condition);
      console.log(res.data.term_and_condition);
    }
  };
  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              <h1 class="mb-5 fw-bold">Term And Conditions</h1>
              <p dangerouslySetInnerHTML={{ __html: term ? term : "" }}></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Termandconditions;
