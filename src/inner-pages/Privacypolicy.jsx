import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getPrivacyPolicy } from "../Repository/UserRepository";
import { useState, useEffect } from "react";

const Privacypolicy = () => {
  const [privacy, setPrivacy] = useState("");
  useEffect(() => {
    GetPrivacy();
    window.scrollTo(0, 0)
  }, []);

  const GetPrivacy = async () => {
    let res = await getPrivacyPolicy();
    if (res.status === 1) {
      setPrivacy(res.data.privacy_policy);
      console.log(res.data.privacy_policy);
    }
  };

  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              <h1 class="mb-5 fw-bold">Privacy Policy</h1>
              <p
                dangerouslySetInnerHTML={{ __html: privacy ? privacy : "" }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Privacypolicy;
