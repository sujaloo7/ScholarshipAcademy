import { Button } from "@mui/material";
import React from "react";
import Navbar from "../components/Navbar";
import "./home.css";
import banks from "../images/banks.PNG";
import Footer from "../components/Footer";
import TextField from "@mui/material/TextField";
import { addGuestUser } from "../Repository/UserRepository";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Finance = () => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  useEffect(() => {}, [refresh]);
  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    let res = await addGuestUser({
      name: name,
      amount: amount,
      email: email,
      mobile: mobile,
      from: "loan",
    });
    if (res.status === 1) {
      setType("success");
      setMessage("We will provide feedback very soon");
      setOpen(true);
      setRefresh(true);
      setName("");
      setAmount("");
      setEmail("");
      setMobile("");
      document.getElementById("outlined-basic1").value = "";
      document.getElementById("outlined-basic2").value = "";
      document.getElementById("outlined-basic3").value = "";
      document.getElementById("outlined-basic4").value = "";
      navigate("/finance");
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };
  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      <Navbar />

      <div className="container p-5 finance">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <h2 className="text-hero-bold text-dark">
              Finance your study
              <span className="" style={{ color: "#a8203b" }}>
                {" "}
                Abroad dream.
              </span>
            </h2>
            <h4 className="text-muted mt-3">
              With Affordable Loans From Scholar Finance
            </h4>
            <a href="#why">
              {" "}
              <button className="btn btn-primary py-3 mt-4" variant="contained">
                Check Your Eligibility
              </button>
            </a>
          </div>
          <div className="col-sm-6 text-center">
            <img
              src="https://clouddevs.com/3dbay/files/preview/1280x1066/11633023143hrov2clvc7brli5mtqrwbwkgwv55g6pvfpavbutv0qv6b4ljlvpymuux2osohji9bhbt7nisbdrshvas9gktlqh7yxwvk8fwmfkt.png"
              className="image"
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* <div className="container mt-5">
                <div className="row mb-4">
                    <div className="mt-5 text-center p-3 ">
                        <img src={banks} alt="" />
                    </div>
                </div>
            </div> */}
      <div className="container-fluid  mt-5">
        <div className="row">
          <h2 className="fw-bold text-center p-5 pb-5">
            Why{" "}
            <span className="" style={{ color: "#a8203b" }}>
              Choose Us?
            </span>
          </h2>

          <div className="part2 container mb-3">
            <div className="row p-5">
              <div class="card col-md-4 mb-3 text-center border-0 mb-4 ">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/dedicated-loan-expert.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Dedicated loan expert</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div class="card col-md-4 mb-3 text-center border-0 mb-4">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/best-interest-rates.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Best interest rates</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>{" "}
              <div class="card col-md-4 mb-3 text-center border-0 mb-4">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/zero-service-fee.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Zero service fee</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div class="card col-md-4 mb-3 mt-4 text-center border-0 mb-4">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/multiple-loan-providers.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Multiple loan providers</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
              <div class="card col-md-4 mb-3 mt-4 text-center border-0 mb-4">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/comparative-analysis.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Comparative analysis</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>{" "}
              <div class="card col-md-4 mt-4 mb-3 text-center border-0 mb-4">
                <div className="col-sm-12  h-100">
                  <div className="text-center">
                    <img
                      src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/collateral-free.svg"
                      className=""
                      height={100}
                      width={200}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h4 class="card-title fw-bold ">Collateral free*</h4>

                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container p-4" id="why">
        <h2 className="fw-bold text-center p-5 pb-5">
          Check Your{" "}
          <span className="" style={{ color: "#a8203b" }}>
            Eligibility.
          </span>
        </h2>
        <form action="" onSubmit={submitForm}>
          <div className="row">
            <div className="col-sm-6">
              <TextField
                id="outlined-basic1"
                required
                label="FullName"
                className="w-100"
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <TextField
                id="outlined-basic2"
                required
                label="Amount Required"
                type="number"
                className="w-100"
                variant="outlined"
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="col-sm-6 mt-5">
              <TextField
                id="outlined-basic3"
                required
                label="Email"
                type="email"
                className="w-100"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-sm-6 mt-5">
              <TextField
                id="outlined-basic4"
                required
                label="Mobile Number"
                type="number"
                className="w-100"
                variant="outlined"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>
            <div className="col-sm-6">
              <button className="btn btn-primary mt-4 px-5" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div
        className="container-fluid mt-5"
        style={{ backgroundColor: "#c44464", height: "300px" }}
      >
        <div className="row pt-5">
          <h1 className="fw-bold text-center mt-5 text-light">
            Trusted by 9 Million+ Students.
          </h1>
        </div>
      </div>

      <div className="container mt-5 p-5 mb-5">
        <div className="row text-center mb-5">
          <h1 className="fw-bold">
            We Are{" "}
            <span className="" style={{ color: "#a8203b" }}>
              Just A Call Away!
            </span>
          </h1>
          <div className="col-sm-12">
            <a href="tel: 98870 20529">
              <button className="btn btn-primary mt-3">Call Now</button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Finance;
