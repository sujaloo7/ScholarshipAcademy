import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getWorkingPolicy } from "../Repository/UserRepository";
import { useState, useEffect } from "react";

const Workingpolicy = () => {
  const [working, setWorking] = useState("");
  useEffect(() => {
    GetWorking();
    window.scrollTo(0, 0)
  }, []);

  const GetWorking = async () => {
    let res = await getWorkingPolicy();
    if (res.status === 1) {
      setWorking(res.data.working_policy);
    }
  };

  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              <h1 class="mb-5 fw-bold">Working Policy</h1>
              <p
                dangerouslySetInnerHTML={{ __html: working ? working : "" }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Workingpolicy;
