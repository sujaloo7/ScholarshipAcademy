import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import "./home.css";
import { addGuestUser } from "../Repository/UserRepository";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Money = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const formSubmit = async (e) => {
    e.preventDefault();

    let res = await addGuestUser({
      name: name,
      mobile: mobile,
      email: email,
      from: "money",
    });
    if (res.status === 1) {
      setType("success");
      setMessage("We will connect to you very soon");
      setOpen(true);
      setName("");
      setMobile("");
      setEmail("");
      document.getElementById("exampleInputEmail1").value = "";
      document.getElementById("exampleInputEmail2").value = "";
      document.getElementById("exampleInputEmail3").value = "";
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
      <div
        className="container-fluid p-5 mb-5 money-back"
        style={{
          backgroundImage:
            "url('	https://leverageedunew.s3.us-east-1.amazonaws.com/assets/img/leverage-finance/map-bg.svg')",
          height: "450px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div className="row p-5 mb-5">
          <div className="col-sm-6">
            <h1 className="text-hero-bold">
              Send money abroad in just a few taps.
            </h1>
            <h3 className="text-muted">quicker transfers</h3>
            <a href="#hwo">
              <button
                className="btn mt-4 transfer"
                style={{ border: "1px solid black" }}
              >
                &nbsp;See how it works
              </button>
            </a>
          </div>

          <div className="col-sm-6">
            <form action="" onSubmit={formSubmit}>
              <div
                className="col-sm-6 shadow bg-white p-3 ms-auto me-auto form"
                style={{ borderRadius: "20px" }}
              >
                <div class="mb-3">
                  <label
                    for="exampleInputEmail1"
                    class="form-label text-muted mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputEmail2"
                    class="form-label text-muted mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control p-2"
                    id="exampleInputEmail2"
                    aria-describedby="emailHelp"
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div class="mb-3">
                  <label
                    for="exampleInputEmail3"
                    class="form-label text-muted mb-0"
                    style={{ fontSize: "13px" }}
                  >
                    Mobile
                  </label>
                  <input
                    type="number"
                    class="form-control p-2"
                    id="exampleInputEmail3"
                    aria-describedby="emailHelp"
                    required
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary w-100 mb-4 mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container mt-5 usp-using">
        <div className="row mt-5">
          <h1 className="text-center fw-bold mt-5">
            USP of using our{" "}
            <span style={{ color: "#a8203b" }}>Forex Services.</span>
          </h1>

          <div className="col-sm-6 mt-5 ">
            <div
              className="row shadow m-2 p-5"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4 text-right">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/cost-effective.svg"
                  alt=""
                  height={130}
                  className=""
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-3">Cost effective</h3>
                <p>Best real time exchange rates in the market.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5 ">
            <div
              className="row  m-2 p-5 shadow"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/transparent.svg"
                  alt=""
                  height={130}
                />
              </div>
              <div className="col-sm-8">
                <h3 className="mt-3">Transparent</h3>
                <p>No hidden fees.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5 ">
            <div
              className="row shadow m-2 p-5"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4 text-right">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/instant-payment.svg"
                  alt=""
                  height={130}
                  className=""
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-3">Instant payment</h3>
                <p>
                  Would take approximate 8-10 minutes. For the repeat customers,
                  less than 5 minutes.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5 ">
            <div
              className="row  m-2 p-5 shadow"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/no-paper-work.svg"
                  alt=""
                  height={130}
                />
              </div>
              <div className="col-sm-8">
                <h3 className="mt-3">No paper work</h3>
                <p>
                  Only Aadhaar / Driving License / Passport and PAN of the
                  Remitter required.
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5 ">
            <div
              className="row shadow m-2 p-5"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4 text-right">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/entirely-digital.svg"
                  alt=""
                  height={130}
                  className=""
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-3">Entirely digital</h3>
                <p>Best real time exchange rates in the market.</p>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-5 ">
            <div
              className="row  m-2 p-5 shadow"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/forex-service/quick.svg"
                  alt=""
                  height={130}
                />
              </div>
              <div className="col-sm-8">
                <h3 className="mt-3">Quick</h3>
                <p>2 minute onboarding.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5 how-it-work">
        <div className="row" id="hwo">
          <h1 className="fw-bold text-center p-5">
            How it <span style={{ color: "#a8203b" }}>Works.</span>
          </h1>

          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-6 text-center">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/how-it-work/location.svg"
                  alt=""
                />
                <h3>Where?</h3>
                <small>Select where you want to send the money.</small>
              </div>
              <div className="col-sm-6 text-center">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/how-it-work/how-much.svg"
                  alt=""
                />
                <h3>How Much?</h3>
                <small>Enter the amount you want to send.</small>
              </div>
              <div className="col-sm-6 text-center mt-3">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/how-it-work/who.svg"
                  alt=""
                />
                <h3>Who?</h3>
                <small>Select or Add recipient’s account details</small>
              </div>
              <div className="col-sm-6 text-center mt-3">
                <img
                  src="https://images.leverageedu.com/assets/img/leverage-finance/how-it-work/payment.svg"
                  alt=""
                />
                <h3>Payment Complete</h3>
                <small>
                  International Money Transfer completed within minutes.
                </small>
              </div>
            </div>
          </div>
          <div className="col-sm-6 ">
            <div
              className="col-sm-8 text-center ms-auto me-auto shadow p-4"
              style={{ borderRadius: "20px" }}
            >
              <img
                src="https://images.leverageedu.com/assets/img/leverage-finance/how-it-work/how-it-works.svg"
                height={260}
                alt=""
              />
              <br />
              <br />
              <br />
              {/* <button className="btn btn-primary mt-5">
                <i class="fa-regular fa-circle-play pt-2"></i>&nbsp;See how it
                works
              </button> */}
            </div>
          </div>
        </div>
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
      <Footer />
    </>
  );
};

export default Money;
