import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Prililesidebar from "./Prililesidebar";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Drive from "../components/Drive";
import {
  getProfile,
  updateUserProfile,
  getLanguage,
  getStudentCountry,
  getStudentState,
  getAttributeVal,
  updateUserDetails,
} from "../Repository/UserRepository";

import { useEffect, useState } from "react";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Prifildetails = () => {
  const [profileData, setProfileData] = useState({});
  const [educationData, setEducationData] = useState({});
  const [testData, setTestData] = useState({});
  const [languageList, setLanguageList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [stateList1, setStateList1] = useState([]);
  const [educationList, setEducationList] = useState([]);
  const [testName, setTestName] = useState([]);
  const [selectCountry, setSelectCountry] = useState("");
  const [file, setFile] = useState(null);
  const [father, setFather] = useState("");
  const [lang, setLang] = useState("");
  const [dob, setDob] = useState("");
  const [geder, setGender] = useState("");
  const [citizen, setSetcizen] = useState("");
  const [passport, setPassword] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [mobile, setMobile] = useState("");
  const [alterNumber, setAlterNNumber] = useState("");
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");

  let navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    GetProfile();
    GetLanguage();
    GetCountry();
  }, []);

  useEffect(() => {
    console.log("personalData.country", profileData.country);
    const exec = async () => {
      console.log("exec");
      let isoCode;
      // countryList.map((ele, index) => {
      //   if (ele._id === personalData.country) {
      //     isoCode = ele.isoCode;
      //   }
      // });

      let selectedCountry = countryList.filter(
        (element) => element._id == profileData.country
      );

      console.log("selected country", selectedCountry);

      isoCode = selectedCountry[0].isoCode;

      console.log("iso code", isoCode);

      let res = await getStudentState({
        countryCode: isoCode,
      });
      console.log("above set state list", res);
      setStateList(res.data);
    };
    if (profileData.country && countryList.length != 0) {
      exec();
    }
  }, [profileData.country, countryList]);

  useEffect(() => {
    console.log("personal data ", profileData);
  }, [profileData]);

  const GetProfile = async () => {
    let res = await getProfile();
    setProfileData(res.data);
    setEducationData(res.data.education_details);
    setTestData(res.data.test_score);
    let stateRes = await getStudentState({ name: res.data.country });
    setStateList(stateRes.data);
  };

  const GetLanguage = async () => {
    let res = await getLanguage({
      is_all: true,
    });
    setLanguageList(res.data);
  };
  const GetCountry = async () => {
    let res = await getStudentCountry();
    setCountryList(res.data);
  };

  const fileFunction = (e) => {
    setFile(e.target.files[0]);
  };

  const educationDetail = async (e) => {
    let res = await getAttributeVal({
      attribute: "Highest Level Of Education",
      is_front: true,
    });

    setEducationList(res.data);
  };

  const testDetail = async (e) => {
    let res = await getAttributeVal({
      attribute: "English Test Score",
      is_front: true,
    });

    setTestName(res.data);
  };

  const submitData = async (e) => {
    e.preventDefault();
    let formd = new FormData();
    formd.append("data", JSON.stringify({ ...profileData, is_student: true }));
    formd.append("file", file);
    let res = await updateUserProfile(formd);
    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
      window.location.reload(false);
      // navigate("/");

      // navigate("/profiledetails");
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };
  const submitEducationData = async (e) => {
    e.preventDefault();
    let res = await updateUserDetails({
      education_detail: true,
      education_data: educationData,
    });
    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };

  const testScoreSubmit = async (e) => {
    e.preventDefault();
    let res = await updateUserDetails({
      test_score: true,
      test_data: testData,
    });
    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
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
      <div className="container mt-4 mb-5">
        <div className="row">
          <Prililesidebar />
          <div className="col-md-8 shadow p-3">
            <ul
              class="nav nav-pills mb-3 shadow "
              id="pills-tab"
              role="tablist"
              style={{ borderRadius: "20px" }}
            >
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link active px-3 m-2"
                  style={{ borderRadius: "20px ", backgroundColor: "" }}
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Personal Details
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-3 m-2"
                  style={{ borderRadius: "20px " }}
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                  onClick={educationDetail}
                >
                  Education Details
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-3 m-2"
                  id="pills-contact-tab"
                  style={{ borderRadius: "20px " }}
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                  onClick={testDetail}
                >
                  Test Score
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link px-3 m-2"
                  id="pills-disabled-tab"
                  style={{ borderRadius: "20px " }}
                  data-bs-toggle="pill"
                  data-bs-target="#pills-disabled"
                  type="button"
                  role="tab"
                  aria-controls="pills-disabled"
                  aria-selected="false"
                >
                  Upload Documents
                </button>
              </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active p-2"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabindex="0"
              >
                <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                  Personal Details
                </h6>
                <form action="" onSubmit={submitData}>
                  <div className="row p-2 mt-3">
                    <div className="col-sm-6">
                      {/* <label>Full Name</label> */}

                      <TextField
                        id="standard-basic"
                        value={profileData?.name}
                        className="w-100 mb-5"
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Full Name"
                        variant="filled"
                      />
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          First Language
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={
                            profileData.first_language
                              ? profileData.first_language
                              : ""
                          }
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              first_language: e.target.value,
                            })
                          }
                          // label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>

                          {languageList?.map((ele, index) => {
                            console.log(
                              "test",
                              ele._id,
                              "select",
                              ele.language_name
                            );

                            return (
                              <MenuItem key={index} value={ele.language_name}>
                                {ele.language_name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Gender
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={profileData.gender ? profileData.gender : ""}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              gender: e.target.value,
                            })
                          }
                          // label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>

                          <MenuItem value="Female">Female</MenuItem>
                          <MenuItem value="Male">Male</MenuItem>
                        </Select>
                      </FormControl>

                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        type="number"
                        value={profileData?.passport_number}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            passport_number: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Passport Number *"
                        variant="filled"
                      />
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        value={profileData?.email}
                        disabled
                        type="email"
                        label="Email"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Province/State *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          id="demo-simple-select-filled"
                          value={profileData.state ? profileData.state : ""}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              state: e.target.value,
                            })
                          }
                          //   value={age}
                          //   onChange={handleChange}
                        >
                          {stateList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele._id === profileData.state ? (
                              <MenuItem key={index} value={ele._id}>
                                {ele.name}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele._id}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                        {/* <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          // value={age}
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              state: e.target.value,
                            })
                          }
                          // label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {stateList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele.name === profileData.state ? (
                              <MenuItem
                                key={index}
                                value={ele._id}
                                style={{ backgroundColor: "grey" }}
                              >
                                {ele.name}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele._id}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
                        </Select> */}
                      </FormControl>

                      <TextField
                        placeholder="Address"
                        className="w-100 mb-5"
                        value={profileData.address}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            address: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Address"
                        multiline
                        variant="filled"
                        rows={1}
                        maxRows={4}
                      />
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        value={profileData.mobile}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            mobile: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        type="number"
                        label="Phone Number *"
                        variant="filled"
                      />
                    </div>
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        value={profileData.father_name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            father_name: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Father's Name"
                        variant="filled"
                      />

                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        placeholder="MM/DD/YYYY"
                        value={profileData?.dob}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            dob: e.target.value,
                          })
                        }
                        label="D o b"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />

                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Country of Citizenship *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={
                            profileData.citizenship_country
                              ? profileData.citizenship_country
                              : ""
                          }
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              citizenship_country: e.target.value,
                            })
                          }
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => (
                            <MenuItem
                              key={index}
                              value={ele.name}
                              className="h-50"
                            >
                              {ele.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Marital Status *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={
                            profileData.marital_status
                              ? profileData.marital_status
                              : ""
                          }
                          onChange={(e) =>
                            setProfileData({
                              ...profileData,
                              marital_status: e.target.value,
                            })
                          }
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value="Single">Single</MenuItem>
                          <MenuItem value="Married">Married</MenuItem>
                          <MenuItem value="Not Mentioned">
                            Not Mentioned
                          </MenuItem>
                        </Select>
                      </FormControl>

                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Country *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          value={profileData.country ? profileData.country : ""}
                          id="demo-simple-select-filled"
                          onChange={async (e) => {
                            console.log("data", e.target.value);

                            setProfileData({
                              ...profileData,
                              country: e.target.value,
                            });
                          }}
                          //   value={age}
                          //   onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => (
                            <MenuItem key={index} value={ele._id}>
                              {ele.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {/* <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={profileData.country ? profileData.country : ""}
                          onChange={async (e) => {
                            console.log("data", e.target.value);

                            setProfileData({
                              ...profileData,
                              country: e.target.value,
                            });

                            let res = await getStudentState({
                              countryCode: e.target.value.isoCode,
                            });
                            setStateList(res.data);
                          }}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele._id === profileData.country ? (
                              <MenuItem key={index} value={ele._id}>
                                {ele.name}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele._id}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
                        </Select> */}
                      </FormControl>
                      {/* 
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          City *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          // value={age}
                          // onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl> */}

                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        type="number"
                        value={profileData.pincode}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            pincode: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Postal/Zip Code *"
                        variant="filled"
                      />
                      <TextField
                        id="standard-basic"
                        type="number"
                        className="w-100 mb-5"
                        value={profileData.alternative_mobile}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            alternative_mobile: e.target.value,
                          })
                        }
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Alternate Phone Number *"
                        variant="filled"
                      />
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        type="file"
                        onChange={fileFunction}
                        label="Upload Profile Picture"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    style={{ backgroundColor: "#FF723A" }}
                    className="w-100 text-light p-2"
                  >
                    Submit
                  </Button>
                </form>
              </div>

              <div
                class="tab-pane fade p-2"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                  Education Details
                </h6>
                <form action="" onSubmit={submitEducationData}>
                  <div className="row p-2 mt-3">
                    <div className="col-sm-6">
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Highest level of education *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={
                            educationData.highest_education
                              ? educationData.highest_education
                              : ""
                          }
                          onChange={(e) =>
                            setEducationData({
                              ...educationData,
                              highest_education: e.target.value,
                            })
                          }
                          // label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {educationList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele.attribute_value ===
                              profileData.education_details
                                .highest_education ? (
                              <MenuItem key={index} value={ele.attribute_value}>
                                {ele.attribute_value}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele.attribute_value}>
                                {ele.attribute_value}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-sm-6">
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Country of Education *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          value={
                            educationData.country_of_education
                              ? educationData.country_of_education
                              : ""
                          }
                          onChange={(e) => {
                            setEducationData({
                              ...educationData,
                              country_of_education: e.target.value,
                            });
                          }}

                          // label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);

                            return (
                              <MenuItem key={index} value={ele.name}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                    Grade 10th Details
                  </h6>

                  <div className="row p-2 mt-3">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        type="text"
                        value={educationData?.grade_average}
                        onChange={(e) => {
                          setEducationData({
                            ...educationData,
                            grade_average: e.target.value,
                          });
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Grade Average * "
                        variant="filled"
                      />
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        value={educationData?.school_end}
                        onChange={(e) => {
                          setEducationData({
                            ...educationData,
                            school_end: e.target.value,
                          });
                        }}
                        label="Attended School To * "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        value={educationData?.school_start}
                        onChange={(e) => {
                          setEducationData({
                            ...educationData,
                            school_start: e.target.value,
                          });
                        }}
                        label="Attended School from * "
                        variant="filled"
                        placeholder="MM/DD/YYYY"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                      <FormControl
                        variant="filled"
                        className="w-100 mb-5"
                        sx={{}}
                      >
                        <InputLabel id="demo-simple-select-standard-label">
                          Country *
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-filled-label"
                          value={
                            educationData.school_country
                              ? educationData.school_country
                              : ""
                          }
                          id="demo-simple-select-filled"
                          onChange={async (e) => {
                            console.log("data", e.target.value);

                            setEducationData({
                              ...educationData,
                              school_country: e.target.value,
                            });
                          }}
                          //   value={age}
                          //   onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => (
                            <MenuItem key={index} value={ele._id}>
                              {ele.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {/* <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          // value={age}
                          onChange={async (e) => {
                            setEducationData({
                              ...educationData,
                              school_country: e.target.value,
                            });
                            let res = await getStudentState({
                              countryCode: e.target.value,
                            });
                            setStateList1(res.data);
                          }}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele.name === educationData.school_country ? (
                              <MenuItem
                                key={index}
                                value={ele.countryCode}
                                style={{ backgroundColor: "grey" }}
                              >
                                {ele.name}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele.countryCode}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
                        </Select> */}
                      </FormControl>
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        placeholder="Address"
                        className="w-100 mb-5"
                        label="Address"
                        value={educationData?.school_address}
                        onChange={(e) => {
                          setEducationData({
                            ...educationData,
                            school_address: e.target.value,
                          });
                        }}
                        multiline
                        InputLabelProps={{
                          shrink: true,
                        }}
                        variant="filled"
                        rows={2}
                        maxRows={2}
                      />
                    </div>
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-5"
                        type="number"
                        value={educationData?.school_zip}
                        onChange={(e) => {
                          setEducationData({
                            ...educationData,
                            school_zip: e.target.value,
                          });
                        }}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        label="Postal/Zip Code  * "
                        variant="filled"
                      />
                    </div>

                    <Button
                      type="submit"
                      style={{ backgroundColor: "#FF723A" }}
                      className="w-100 text-light p-2"
                    >
                      Submit
                    </Button>
                  </div>
                </form>
              </div>

              <div
                class="tab-pane fade p-2"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabindex="0"
              >
                <form action="" onSubmit={testScoreSubmit}>
                  <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                    IELTS Score
                  </h6>
                  <div className="row p-2 mt-3">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IELTS Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IELTS Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IELTS Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    GRE Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GRE Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GRE Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GRE Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    GMAT Score
                  </h6>
                  <div className="row p-2 mt-3">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GMAT Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GMAT Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="GMAT Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    TEST AS Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="TEST AS Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="TEST AS Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="TEST AS Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    NEET Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="NEET Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="NEET Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="NEET Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    IIT JEE Mains Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Mains Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Mains Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Mains Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    IIT JEE Advanced Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Advanced Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Advanced Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="IIT JEE Advanced Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language A1 Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A1 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A1 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A1 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language A2 Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A2 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A2 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language A2 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language B1 Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B1 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B1 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B1 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language B2 Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B2 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B2 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language B2 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language C1 Score
                  </h6>
                  <div className="row p-2 mt-0">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C1 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C1 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C1 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <h6 className="ms-2 mt-0" style={{ color: "#FF723A" }}>
                    German Language C2 Score
                  </h6>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C2 Score"
                        placeholder="Enter Your Score"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C2 Pass Year "
                        placeholder="MM/DD/YYYY"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>
                  <div className="row p-2 ">
                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        type="number"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="Pass Date As On Scorecard"
                        placeholder="Enter Mentioned Date As On Scorecard"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>

                    <div className="col-sm-6">
                      <TextField
                        id="standard-basic"
                        className="w-100 mb-3"
                        value={testData?.test_date}
                        onChange={(e) =>
                          setTestData({
                            ...testData,
                            test_date: e.target.value,
                          })
                        }
                        label="German Language C2 Marksheet "
                        // placeholder="MM/DD/YYYY"
                        type="file"
                        variant="filled"
                        InputLabelProps={{
                          shrink: true,
                        }}
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    style={{ backgroundColor: "#FF723A" }}
                    className="w-100 text-light p-2"
                  >
                    Submit
                  </Button>
                </form>
              </div>

              <div
                class="tab-pane fade p-2"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              >
                <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                  Upload Documents
                </h6>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>S.no</TableCell>
                        <TableCell>Application Id</TableCell>
                        <TableCell align="center">Country</TableCell>
                        <TableCell align="center">Course</TableCell>
                        <TableCell align="center">Specialization </TableCell>
                        <TableCell align="center">Institute Name </TableCell>
                        <TableCell align="center">Intake </TableCell>
                        <TableCell align="center">Upload </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          1
                        </TableCell>
                        {/* <TableCell align="right">1</TableCell> */}
                        <TableCell align="center">ASTY100834 </TableCell>
                        <TableCell align="center">Russia</TableCell>
                        <TableCell align="center">MBBS</TableCell>
                        <TableCell align="center">
                          {" "}
                          Studies in Cultural{" "}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          University of Russia{" "}
                        </TableCell>
                        <TableCell align="center">10:30 29/08/2022</TableCell>
                        <TableCell align="center">
                          {" "}
                          <Button
                            className="text-light"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#FF723A",
                            }}
                          >
                            Upload
                          </Button>{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          1
                        </TableCell>
                        {/* <TableCell align="right">1</TableCell> */}
                        <TableCell align="center">ASTY100834 </TableCell>
                        <TableCell align="center">Russia</TableCell>
                        <TableCell align="center">MBBS</TableCell>
                        <TableCell align="center">
                          {" "}
                          Studies in Cultural{" "}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          University of Russia{" "}
                        </TableCell>
                        <TableCell align="center">10:30 29/08/2022</TableCell>
                        <TableCell align="center">
                          {" "}
                          <Button
                            className="text-light"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#FF723A",
                            }}
                          >
                            Upload
                          </Button>{" "}
                        </TableCell>
                      </TableRow>
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          1
                        </TableCell>
                        {/* <TableCell align="right">1</TableCell> */}
                        <TableCell align="center">ASTY100834 </TableCell>
                        <TableCell align="center">Russia</TableCell>
                        <TableCell align="center">MBBS</TableCell>
                        <TableCell align="center">
                          {" "}
                          Studies in Cultural{" "}
                        </TableCell>
                        <TableCell align="center">
                          {" "}
                          University of Russia{" "}
                        </TableCell>
                        <TableCell align="center">10:30 29/08/2022</TableCell>
                        <TableCell align="center">
                          {" "}
                          {/* <Button
                            className="text-light"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#FF723A",
                            }}
                          >
                            Upload
                          </Button>{" "} */}
                          <Drive />
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Prifildetails;
