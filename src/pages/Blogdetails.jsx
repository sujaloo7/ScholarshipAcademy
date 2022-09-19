import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Avatar from "@mui/material/Avatar";
import { getBlog } from "../Repository/UserRepository";
import { imageUrl } from "../Repository/Repository";

const Blogdetails = () => {
  const [dataSet, setDataSet] = useState({});
  const [type, setType] = useState({});
  useEffect(() => {
    callApi();
    window.scrollTo(0, 0)
   
  }, []);


  let callApi = async () => {
    let typ = window.location.pathname.split("/").pop();
    if (typ !== "new") {
      let res = await getBlog({ blog_id: typ });
      if (res.status === 1) {
        setDataSet(res.data);
      }
    }
    setType(typ);
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-8 ms-auto me-auto">
            <img
              src={`${imageUrl}${dataSet?.image}`}
              alt=""
              height={350}
              className="w-100"
            />
            <h5 className="mt-4">{dataSet?.title}</h5>
            <p style={{ fontSize: "12px" }}>{dataSet?.subtitle}</p>
          </div>
          <div
            className="col-sm-8 mt-5 ms-auto me-auto"
            style={{ fontSize: "13px" }}
          >
            <p dangerouslySetInnerHTML={{ __html: dataSet?.content }}></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blogdetails;
