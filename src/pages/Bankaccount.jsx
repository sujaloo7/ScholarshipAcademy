import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { addGuestUser } from "../Repository/UserRepository";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Bankaccount = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [open1, setOpen1] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  const handleClose1 = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen1(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onsubmitModal = async (e) => {
    e.preventDefault();

    let res = await addGuestUser({
      name: name,
      mobile: mobile,
      email: email,
      from: "bank",
    });
    if (res.status === 1) {
      setType("success");
      setMessage("We will reach you soon");
      setOpen1(true);
      setName("");
      setMobile("");
      setEmail("");
      document.getElementById("email").value = "";
      document.getElementById("name").value = "";
      document.getElementById("mobile").value = "";
      handleClose();
    } else {
      setType("error");
      setMessage(res.message);
      setOpen1(true);
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open1}
          autoHideDuration={3000}
          onClose={handleClose1}
        >
          <Alert onClose={handleClose1} severity={type} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      <Navbar />
      <div className="container p-5 bank-account">
        <div className="row">
          <div className="col-sm-6 mt-5">
            <h2 className="text-hero-bold text-dark">
              Apply in minutes for<br></br>
              <span className="" style={{ color: "#a8203b" }}>
                International Bank Account.
              </span>
            </h2>
            <h4 className="text-muted mt-3">
              Zero application fee, completely online process, no branch visit
              required.
            </h4>
            <button
              className="btn btn-primary py-3 mt-4"
              variant="contained"
              onClick={handleClickOpen}
            >
              Request Callback
            </button>
            <Dialog open={open} onClose={handleClose}>
              <form action="" onSubmit={onsubmitModal}>
                <DialogTitle>Contact</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    We will reach you as soon as possible...please keep in touch
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email "
                    type="email"
                    fullWidth
                    variant="standard"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    label="Name"
                    type="text"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="mobile"
                    label="Mobile"
                    type="number"
                    fullWidth
                    variant="standard"
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit">Submit</Button>
                </DialogActions>
              </form>
            </Dialog>
          </div>
          <div className="col-sm-6 text-center">
            <img
              src="https://clouddevs.com/3dbay/files/preview/960x960/116469207725gnt7vrbvyk2cik4uibvftg362nmwqzsn9daiomatnflrihtz2yemlwl9kux4omtuf1yb6snzu03ozpm5kv8cjjoar0zcdje7axy.png"
              height={400}
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="container mt-5 usp-using">
        <div className="row mt-5">
          <h1 className="text-center fw-bold mt-5">Benefits</h1>

          <div className="col-sm-6 mt-5 ">
            <div
              className="row shadow m-2 p-5"
              style={{ height: "200px", borderRadius: "20px" }}
            >
              <div className="col-sm-4 text-right">
                <img
                  src="https://images.leverageedu.com/leverage-finance/assets/global_presence.svg"
                  alt=""
                  height={130}
                  className=""
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-3">Global presence</h3>
                <p>In 60+ countries.</p>
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
                  src="https://images.leverageedu.com/leverage-finance/assets/Multi_utility.svg"
                  alt=""
                  height={130}
                />
              </div>
              <div className="col-sm-8">
                <h3 className="mt-3">Multi-utility</h3>
                <p>
                  Pay your fee, rent, bills with the same International Account.
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
                  src="https://images.leverageedu.com/leverage-finance/assets/Preferential_rates.svg"
                  alt=""
                  height={130}
                  className=""
                />
              </div>
              <div className="col-sm-8">
                <h3 className="fw-bold mt-3">Preferential rates</h3>
                <p>
                  On money transfer for tuition fees and overseas
                  education-related costs.
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
                  src="https://images.leverageedu.com/leverage-finance/assets/24_7_support.svg"
                  alt=""
                  height={130}
                />
              </div>
              <div className="col-sm-8">
                <h3 className="mt-3">24*7 support</h3>
                <p>From our banking partners.</p>
              </div>
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

export default Bankaccount;
