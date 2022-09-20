import React, { useState } from "react";
import Button from "@mui/material/Button";

function Fee({ ele }) {
  const [fee, setFee] = useState(false);

  return (
    <>
      <div className="row inner-row ">
        <h5 className="mt-5" style={{ color: "#a8203b" }}>
          {ele?.course_name}
        </h5>
        <div className="col-sm-4 ">
          <ul>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Course Level
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Course Duration
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Total Course Fee
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Course Program
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Intake/Admission
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Work Experience
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Course Language
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Required Degree
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Eligibility
            </li>
            <li className="fw-bold" style={{ fontSize: "13px" }}>
              Application Fees
            </li>{" "}
            <Button
              className="text-light mt-2"
              style={{ backgroundColor: "#a8203b" }}
              onClick={(e) => setFee(!fee)}
            >
              <i class="fa-solid fa-eye"></i>&nbsp;
              {fee ? "Hide Fees" : "Show Fees"}
            </Button>
          </ul>
        </div>
        <div className="col-sm-4 ">
          <ul>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {ele?.course_level?.attribute_value}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {ele?.course_duration}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.total_course_fees}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.course_program?.attribute_value}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.admission}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.work_experience?.attribute_value}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.course_language?.language_name}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.required_degress?.attribute_value}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              {" "}
              {ele?.eligibility ? ele?.eligibility : "Unknown"}
            </li>
            <li className="fw-bold text-muted" style={{ fontSize: "13px" }}>
              Free
            </li>

            <Button
              className="text-light mt-2"
              style={{ backgroundColor: "#a8203b" }}
            >
              Apply Now
            </Button>
          </ul>
        </div>
        {fee ? (
          <div className="col-sm-6 mt-3">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Fees</th>
                </tr>
              </thead>
              <tbody>
                {ele?.fees.length > 0
                  ? ele?.fees.map((ele, index) => {
                      return (
                        <tr row="1">
                          <td>{ele.year} year</td>
                          <td>{ele.fees}</td>
                        </tr>
                      );
                    })
                  : ""}
              </tbody>
            </table>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Fee;
