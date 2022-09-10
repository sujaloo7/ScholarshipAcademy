import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getContactUs } from "../Repository/UserRepository";
import { useState, useEffect } from "react";

const ContactUs = () => {
  const [contact, setContact] = useState("");
  useEffect(() => {
    GetContact();
  }, []);

  const GetContact = async () => {
    let res = await getContactUs();
    if (res.status === 1) {
      setContact(res.data.contact_us);
    }
  };

  return (
    <>
      <Navbar />

      <div class="container-fluid p-0">
        <div class=" container p-5">
          <div class=" conainer">
            <div class="row">
              <h1 class="mb-5 fw-bold">Contact Us</h1>
              <p
                dangerouslySetInnerHTML={{ __html: contact ? contact : "" }}
              ></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
