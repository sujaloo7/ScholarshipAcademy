import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import profile from "../images/universityprofile.gif";
import Editor from "../components/Editor";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ReactPaginate from "react-paginate";

import {
  getUniversityProfile,
  getStudentCountry,
  getStudentState,
  updateUserProfile,
  updateUniversityDetail,
  getCategory,
  getAttributeVal,
  getLanguage,
  addCourse,
  getCourse,
  updateCourse,
} from "../Repository/UserRepository";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { imageUrl } from "../Repository/Repository";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { type } from "@testing-library/user-event/dist/type";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Universityprofile = () => {
  const [personalData, setPersonalData] = useState({});
  const [detailData, setDetailData] = useState({});
  const [accomodation, setAccomodation] = useState(false);
  const [scholarship, setScholarship] = useState(false);
  const [categoryList, setCategoryList] = useState([]);
  const [degreeList, setDegreeList] = useState([]);
  const [courseDuration, setCourseDuration] = useState(0);
  const [tableList, setTableList] = useState([]);
  const [programList, setProgramList] = useState([]);
  const [typeList, setTypeList] = useState([]);
  const [levelList, setLevelList] = useState([]);
  const [expList, setExpList] = useState([]);
  const [langList, setLangList] = useState([]);
  const [work, setWork] = useState(false);
  const [file, setFile] = useState(null);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState("");
  const [courseName, setCourseName] = useState("");
  const [totalFees, setTotalFees] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseType, setCourseType] = useState("");
  const [courseExp, setCourseExp] = useState("");
  const [courseProgram, setCourseProgram] = useState("");
  const [courseLang, setCourseLang] = useState("");
  const [courseDegree, setCourseDegree] = useState("");
  const [courseIntake, setCourseIntake] = useState("");
  const [eleg, setEleg] = useState("");
  const [open, setOpen] = useState(false);
  const [feeArray, setFeeArray] = useState({});
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");
  const [dataCount, setDataCount] = useState(0);
  const [pageCount, setPageCount] = useState(10);
  const [currentpage, setCurrentPage] = useState(1);
  const [ref, setRef] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [courseData, setCourseData] = useState({});

  const pagesize = 5;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleClickOpen = async (id) => {
    setOpen2(true);
    setCourseId(id);
    onclickUpload();
    let res = await getCourse({ course_id: id });
    if (res.status === 1) {
      setCourseData(res.data);
      setTableList(res.data.fees);
    }
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  const onsubmitModal = async (e) => {
    e.preventDefault();
    setCourseData({ ...courseData, fees: tableList });
    let res = await updateCourse({
      ...courseData,
      fees: tableList,
      course_id: courseId,
    });
    if (res.status === 1) {
      handleClose2();
      setType("success");
      setMessage(res.message);
      setOpen(true);
      setRef(!ref);
      setTableList([]);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };

  const onchangeCourseEdit = async (id) => {
    setCourseId(id);
  };

  useEffect(() => {
    console.log("fees structure ", tableList);
  }, [tableList, courseList]);

  useEffect(() => {
    let authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      Navigate("/");
    } else {
      GetProfile();
      GetCountry();
    }
    window.scroll(0, 0);
  }, [ref]);

  useEffect(() => {
    console.log("personalData.country", personalData.country);
    const exec = async () => {
      console.log("exec");
      let isoCode;
      // countryList.map((ele, index) => {
      //   if (ele._id === personalData.country) {
      //     isoCode = ele.isoCode;
      //   }
      // });

      let selectedCountry = countryList.filter(
        (element) => element._id == personalData.country
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
    if (personalData.country && countryList.length != 0) {
      exec();
    }
  }, [personalData.country, countryList]);

  useEffect(() => {
    console.log("personal data ", personalData);
  }, [personalData]);

  useEffect(() => {
    onclickCourse();
  }, [ref, currentpage]);

  const onclickCourse = async () => {
    let res = await getCourse({ page: currentpage, pagesize: pagesize });
    if (res.status === 1) {
      setCourseList(res?.data);
      setDataCount(res?.count);
      let pageCount1 = Math.ceil(res?.count / pagesize);
      setPageCount(pageCount1);
    }
  };

  const onchangeDuration = (e) => {
    setCourseDuration(e.target.value);
    let array = [];
    for (let i = 0; i < Math.ceil(e.target.value); i++) {
      array.push({ year: i + 1, fees: "" });
    }
    setTableList(array);
  };

  const GetProfile = async () => {
    let res = await getUniversityProfile({ for_country: true });
    if (res.status === 1) {
      setPersonalData(res.data[0]);
      setDetailData(res.data[0].university_details);
      setAccomodation(res.data[0].university_details.accomodation);
      setScholarship(res.data[0].university_details.scholarship);
      setWork(res.data[0].university_details.part_time_work);
      console.log(res.data.name, "dddd");
    }
    console.log("ko", res);
  };

  const onclickUpload = async () => {
    let res = await getCategory({ is_all: true });
    if (res.status === 1) {
      setCategoryList(res.data);
    }
    let res1 = await getAttributeVal({ is_all: true });
    if (res1.status === 1) {
      let degree = [];
      let exp = [];
      let courseType = [];
      let program = [];
      let level = [];

      res1.data.forEach((ele) => {
        if (ele.attribute_id.attribute === "Degree Required") {
          degree.push(ele);
        } else if (ele.attribute_id.attribute === "Work Experience") {
          exp.push(ele);
        } else if (ele.attribute_id.attribute === "Course Type") {
          courseType.push(ele);
        } else if (ele.attribute_id.attribute === "Course Program") {
          program.push(ele);
        } else if (ele.attribute_id.attribute === "Course Level") {
          level.push(ele);
        }
      });

      setDegreeList(degree);
      setLevelList(level);
      setProgramList(program);
      setTypeList(courseType);
      setExpList(exp);
    }

    let res2 = await getLanguage({ is_all: true });
    if (res2.status === 1) {
      setLangList(res2.data);
    }
  };

  const GetCountry = async () => {
    let res = await getStudentCountry();
    if (res.status === 1) {
      setCountryList(res.data);
    }
  };

  const fileFunction = async (e) => {
    setFile(e.target.files[0]);
  };

  const onchangeCourseDelete = async (id) => {
    let res = await updateCourse({
      course_id: id,
      is_delete: true,
    });
    console.log("why this is undefine", res);
    if (res.status === 1) {
      console.log("this is success", res);
      setRef(!ref);
      setType("success");
      setMessage(res.message);
      setOpen(true);
    } else {
      console.log("this is success", res.message);

      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };

  const onchangeFees = (e, index) => {
    let obj = { index: e.target.value };
    // setFeeArray({ ...feeArray, index: e.target.value });
    console.log("sdsadsd", obj);
  };

  const submitData = async (e) => {
    e.preventDefault();
    let formd = new FormData();
    formd.append(
      "data",
      JSON.stringify({ ...personalData, is_university: true })
    );
    formd.append("file", file);
    let res = await updateUserProfile(formd);
    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
      window.location.reload(false);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
  };
  const UpdateDetails = async (e) => {
    e.preventDefault();
    console.log("accop", accomodation);
    let res = await updateUniversityDetail({
      ...detailData,
      accomodation: accomodation,
      part_time_work: work,
      scholarship: scholarship,
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

  const onsubmitCourse = async (e) => {
    e.preventDefault();
    console.log("fees array", feeArray);

    let obj = {
      required_degress: courseDegree,
      work_experience: courseExp,
      course_duration: courseDuration,
      course_language: courseLang,
      course_program: courseProgram,
      course_level: courseLevel,
      course_name: courseName,
      admission: courseIntake,
      eligibility: eleg,
      type: courseType,
      category_id: course,
      total_course_fees: totalFees,
      fees: tableList,
    };
    let res = await addCourse(obj);
    if (res.status === 1) {
      setType("success");
      setMessage(res.message);
      setOpen(true);
    } else {
      setType("error");
      setMessage(res.message);
      setOpen(true);
    }
    console.log("this is res", res);
    console.log(
      courseDegree,
      courseExp,
      courseDuration,
      courseLang,
      courseProgram,
      courseLevel,
      courseName,
      courseIntake,
      courseType,
      course,
      totalFees
    );
  };

  const onPageSubmit = (value) => {
    setCurrentPage(value.selected + 1);
    console.log("value", value.selected + 1);
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <div className="col-sm-12 shadow text-center">
              <img
                src={`${imageUrl}${personalData?.profile_picture}`}
                height={150}
                className="shadow-sm"
                style={{ borderRadius: "50%" }}
                alt=""
              />
              <h5 className="mb-0 mt-3">welcome, {personalData?.name}</h5>
              <br />
            </div>
          </div>
          <div className="col-sm-8 shadow">
            <div className="col-sm-12">
              <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="pills-home-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-home"
                    type="button"
                    role="tab"
                    aria-controls="pills-home"
                    aria-selected="true"
                    style={{ borderRadius: "20px " }}
                  >
                    Personal Details
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-profile-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-profile"
                    type="button"
                    role="tab"
                    aria-controls="pills-profile"
                    aria-selected="false"
                    style={{ borderRadius: "20px ", backgroundColor: "" }}
                  >
                    University Details
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-contact-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-contact"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    style={{ borderRadius: "20px " }}
                    onClick={onclickUpload}
                  >
                    Upload course
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="pills-course-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-course"
                    type="button"
                    role="tab"
                    aria-controls="pills-contact"
                    aria-selected="false"
                    style={{ borderRadius: "20px " }}
                    onClick={onclickCourse}
                  >
                    See Courses
                  </button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="pills-home"
                  role="tabpanel"
                  aria-labelledby="pills-home-tab"
                >
                  {" "}
                  <form action="" onSubmit={submitData}>
                    <h6 className="ms-3 mt-2" style={{ color: "#FF723A" }}>
                      Personal Details
                    </h6>
                    <div className="row p-3">
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="University Name"
                          value={personalData?.name}
                          onChange={(e) =>
                            setPersonalData({
                              ...personalData,
                              name: e.target.value,
                            })
                          }
                          variant="filled"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={personalData?.email}
                          label="university Email"
                          type="email"
                          variant="filled"
                          disabled
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Country{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            value={
                              personalData.country ? personalData.country : ""
                            }
                            id="demo-simple-select-filled"
                            onChange={async (e) => {
                              console.log("data", e.target.value);

                              setPersonalData({
                                ...personalData,
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
                        </FormControl>
                      </div>
                      <div className="col-md-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            State{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={personalData.state ? personalData.state : ""}
                            onChange={(e) =>
                              setPersonalData({
                                ...personalData,
                                state: e.target.value,
                              })
                            }
                            //   value={age}
                            //   onChange={handleChange}
                          >
                            {stateList?.map((ele, index) => {
                              //   console.log("test", ele._id, "select", selectState);
                              return ele._id === personalData.state ? (
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
                        </FormControl>
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={personalData?.mobile}
                          onChange={(e) =>
                            setPersonalData({
                              ...personalData,
                              mobile: e.target.value,
                            })
                          }
                          label="Phone Number"
                          variant="filled"
                          type="number"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={personalData?.official_website}
                          onChange={(e) =>
                            setPersonalData({
                              ...personalData,
                              official_website: e.target.value,
                            })
                          }
                          label="Official Website"
                          variant="filled"
                          type="link"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          placeholder="Address"
                          className="w-100 "
                          value={personalData?.address}
                          onChange={(e) =>
                            setPersonalData({
                              ...personalData,
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
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          placeholder="ZipCode"
                          value={personalData?.pincode}
                          onChange={(e) =>
                            setPersonalData({
                              ...personalData,
                              pincode: e.target.value,
                            })
                          }
                          className="w-100 "
                          label="ZipCode"
                          variant="filled"
                          type="number"
                          rows={1}
                          maxRows={4}
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
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
                      variant="contained"
                      type="submit"
                      className=" mt-3 p-3 bg-dark w-100"
                    >
                      Submit
                    </Button>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-profile"
                  role="tabpanel"
                  aria-labelledby="pills-profile-tab"
                >
                  {" "}
                  <form action="" onSubmit={UpdateDetails}>
                    <h6 className="ms-3 " style={{ color: "#FF723A" }}>
                      university Details{" "}
                    </h6>
                    <div className="row p-3">
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={detailData?.university_type}
                          onChange={(e) =>
                            setDetailData({
                              ...detailData,
                              university_type: e.target.value,
                            })
                          }
                          label="university Type"
                          variant="filled"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>

                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={detailData?.world_rank}
                          onChange={(e) =>
                            setDetailData({
                              ...detailData,
                              world_rank: e.target.value,
                            })
                          }
                          label="university Rank(World Rank)"
                          variant="filled"
                          type="number"
                          required
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>

                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={detailData?.established_year}
                          onChange={(e) =>
                            setDetailData({
                              ...detailData,
                              established_year: e.target.value,
                            })
                          }
                          label="Established  Year"
                          variant="filled"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      <div className="col-md-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          value={detailData?.rating}
                          onChange={(e) =>
                            setDetailData({
                              ...detailData,
                              rating: e.target.value,
                            })
                          }
                          label="Rating"
                          variant="filled"
                          type="number"
                          InputLabelProps={{
                            shrink: true,
                          }}
                        />
                      </div>
                      {/* <div className="col-md-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Course Program{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                          </Select>
                        </FormControl>
                      </div> */}
                      <div class="form-check col-sm-3 mt-4 ms-3">
                        <input
                          class="form-check-input mt-2"
                          type="checkbox"
                          onChange={(e) => setAccomodation(!accomodation)}
                          id="flexCheckDefault"
                          checked={accomodation}
                        />
                        <label
                          class="form-check-label text-dark"
                          for="flexCheckDefault"
                          style={{ fontSize: "13px" }}
                        >
                          Accomodation
                        </label>
                      </div>
                      <div class="form-check col-sm-3 mt-4">
                        <input
                          class="form-check-input mt-2"
                          type="checkbox"
                          value=""
                          onChange={(e) => setWork(!work)}
                          id="flexCheckDefault"
                          checked={work}
                        />
                        <label
                          class="form-check-label text-dark"
                          for="flexCheckDefault"
                          style={{ fontSize: "13px" }}
                        >
                          Part Time Work
                        </label>
                      </div>
                      <div class="form-check col-sm-3 mt-4">
                        <input
                          class="form-check-input mt-2"
                          type="checkbox"
                          value=""
                          onChange={(e) => setScholarship(!scholarship)}
                          id="flexCheckDefault"
                          checked={scholarship}
                        />
                        <label
                          class="form-check-label text-dark"
                          for="flexCheckDefault"
                          style={{ fontSize: "13px" }}
                        >
                          Scholarship
                        </label>
                      </div>

                      <div className="col-sm-12  mt-4">
                        <label
                          for="exampleFormControlInput1"
                          class="form-label text-muted"
                        >
                          About University
                        </label>
                        <CKEditor
                          editor={ClassicEditor}
                          data={detailData?.about}
                          config={{ placeholder: "enter details ..." }}
                          onChange={(event, editor) => {
                            const data = editor.getData();
                            setDetailData({ ...detailData, about: data });
                          }}
                        />
                      </div>

                      <Button
                        variant="contained"
                        type="submit"
                        className=" mt-3 p-3 bg-dark"
                      >
                        Submit
                      </Button>
                    </div>
                  </form>
                </div>
                <div
                  class="tab-pane fade"
                  id="pills-contact"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  {" "}
                  <div className="row">
                    <h6 className="ms-2 mt-2" style={{ color: "#FF723A" }}>
                      Upload Courses
                    </h6>
                  </div>
                  <form action="" onSubmit={onsubmitCourse}>
                    <div className="row p-3">
                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Select Course
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourse(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            {categoryList?.map((ele, index) => {
                              //   console.log("test", ele._id, "select", selectState);
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.category_name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="Course Name	"
                          type="text"
                          variant="filled"
                          onChange={(e) => setCourseName(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="Total Course Fees	"
                          type="number"
                          variant="filled"
                          onChange={(e) => setTotalFees(e.target.value)}
                        />
                      </div>

                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Course Level
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseLevel(e.target.value)}
                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            {levelList.map((ele, index) => {
                              console.log("level lsit", ele);
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.attribute_value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>

                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Course Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseType(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {typeList.map((ele, index) => {
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.attribute_value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>

                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Work Experience
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseExp(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {expList.map((ele, index) => {
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.attribute_value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Course Program{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseProgram(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {programList.map((ele, index) => {
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.attribute_value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Course Language{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseLang(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {langList.map((ele, index) => {
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.language_name}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-6 mt-4">
                        <FormControl variant="filled" className="w-100">
                          <InputLabel id="demo-simple-select-filled-label">
                            Degree Required{" "}
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            onChange={(e) => setCourseDegree(e.target.value)}

                            //   value={age}
                            //   onChange={handleChange}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {degreeList.map((ele, index) => {
                              return (
                                <MenuItem key={index} value={ele._id}>
                                  {ele.attribute_value}
                                </MenuItem>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </div>
                      <div className="col-sm-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="Course Duration		"
                          variant="filled"
                          onChange={onchangeDuration}
                        />
                      </div>

                      <div className="col-sm-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="Intake/Admission	"
                          variant="filled"
                          onChange={(e) => setCourseIntake(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-6 mt-4">
                        <TextField
                          id="filled-basic"
                          className="w-100"
                          label="Eligibility	"
                          variant="filled"
                          onChange={(e) => setEleg(e.target.value)}
                        />
                      </div>
                      <div className="col-sm-12">
                        <h6
                          className="ms-2 mt-5 mb-5"
                          style={{ color: "#FF723A" }}
                        >
                          Fees Structure (Per Year)
                        </h6>
                        {tableList.map((ele, index) => {
                          return (
                            <div className="row">
                              <div className="col-sm-6 p-3">
                                <p className="ms-3">{index + 1} Year Fees</p>
                              </div>
                              <div className="col-sm-6">
                                <TextField
                                  id="filled-basic"
                                  className="w-100"
                                  label={`${index + 1} Year Fees`}
                                  variant="filled"
                                  value={ele.fees}
                                  onChange={(e) => {
                                    let object = JSON.parse(
                                      JSON.stringify(ele)
                                    );
                                    let array = JSON.parse(
                                      JSON.stringify(tableList)
                                    );
                                    object.fees = e.target.value;
                                    array[index] = object;
                                    setTableList(array);
                                  }}
                                />
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <Button
                      variant="contained"
                      type="submit"
                      className=" mt-3 p-3 bg-dark w-100"
                    >
                      Upload Course
                    </Button>
                  </form>
                </div>

                <Dialog open={open2} onClose={handleClose2}>
                  <form action="" onSubmit={onsubmitModal}>
                    <DialogTitle>Course Details</DialogTitle>
                    <DialogContent>
                      <div className="row ">
                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Select Course
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={
                                courseData?.category_id
                                  ? courseData?.category_id
                                  : ""
                              }
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  category_id: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              {categoryList?.map((ele, index) => {
                                //   console.log("test", ele._id, "select", selectState);
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.category_name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <TextField
                            id="filled-basic"
                            className="w-100"
                            label="Course Name	"
                            value={
                              courseData?.course_name
                                ? courseData?.course_name
                                : ""
                            }
                            type="text"
                            variant="filled"
                            onChange={(e) =>
                              setCourseData({
                                ...courseData,
                                course_name: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-sm-6 mt-4">
                          <TextField
                            id="filled-basic"
                            className="w-100"
                            value={
                              courseData?.total_course_fees
                                ? courseData?.total_course_fees
                                : ""
                            }
                            label="Total Course Fees	"
                            type="number"
                            variant="filled"
                            InputLabelProps={{
                              shrink: true,
                            }}
                            onChange={(e) =>
                              setCourseData({
                                ...courseData,
                                total_course_fees: e.target.value,
                              })
                            }
                          />
                        </div>

                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Course Level
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={
                                courseData?.course_level
                                  ? courseData?.course_level
                                  : ""
                              }
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  course_level: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>

                              {levelList.map((ele, index) => {
                                console.log("level lsit", ele);
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.attribute_value}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>

                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Course Type
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={courseData?.type ? courseData?.type : ""}
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  type: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {typeList.map((ele, index) => {
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.attribute_value}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>

                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Work Experience
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  work_experience: e.target.value,
                                })
                              }
                              value={
                                courseData?.work_experience
                                  ? courseData?.work_experience
                                  : ""
                              }
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {expList.map((ele, index) => {
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.attribute_value}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Course Program{" "}
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={
                                courseData?.course_program
                                  ? courseData?.course_program
                                  : ""
                              }
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  course_program: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {programList.map((ele, index) => {
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.attribute_value}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Course Language{" "}
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={
                                courseData?.course_language
                                  ? courseData?.course_language
                                  : ""
                              }
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  course_language: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {langList.map((ele, index) => {
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.language_name}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <FormControl variant="filled" className="w-100">
                            <InputLabel id="demo-simple-select-filled-label">
                              Degree Required{" "}
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-filled-label"
                              id="demo-simple-select-filled"
                              value={
                                courseData?.required_degress
                                  ? courseData?.required_degress
                                  : ""
                              }
                              onChange={(e) =>
                                setCourseData({
                                  ...courseData,
                                  required_degress: e.target.value,
                                })
                              }

                              //   value={age}
                              //   onChange={handleChange}
                            >
                              <MenuItem value="">
                                <em>None</em>
                              </MenuItem>
                              {degreeList.map((ele, index) => {
                                return (
                                  <MenuItem key={index} value={ele._id}>
                                    {ele.attribute_value}
                                  </MenuItem>
                                );
                              })}
                            </Select>
                          </FormControl>
                        </div>
                        <div className="col-sm-6 mt-4">
                          <TextField
                            id="filled-basic"
                            className="w-100"
                            value={
                              courseData?.course_duration
                                ? courseData?.course_duration
                                : ""
                            }
                            label="Course Duration		"
                            variant="filled"
                            onChange={(e) => {
                              onchangeDuration(e);
                              setCourseData({
                                ...courseData,
                                course_duration: e.target.value,
                              });
                            }}
                          />
                        </div>

                        <div className="col-sm-6 mt-4">
                          <TextField
                            id="filled-basic"
                            className="w-100"
                            label="Intake/Admission	"
                            variant="filled"
                            value={
                              courseData?.admission ? courseData?.admission : ""
                            }
                            onChange={(e) =>
                              setCourseData({
                                ...courseData,
                                admission: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-sm-6 mt-4">
                          <TextField
                            id="filled-basic"
                            className="w-100"
                            label="Eligibility	"
                            variant="filled"
                            value={
                              courseData?.eligibility
                                ? courseData?.eligibility
                                : ""
                            }
                            onChange={(e) =>
                              setCourseData({
                                ...courseData,
                                eligibility: e.target.value,
                              })
                            }
                          />
                        </div>
                        <div className="col-sm-12">
                          <h6
                            className="ms-2 mt-5 mb-5"
                            style={{ color: "#FF723A" }}
                          >
                            Fees Structure (Per Year)
                          </h6>
                          {tableList.map((ele, index) => {
                            return (
                              <div className="row">
                                <div className="col-sm-6 p-3">
                                  <p className="ms-3">{index + 1} Year Fees</p>
                                </div>
                                <div className="col-sm-6">
                                  <TextField
                                    id="filled-basic"
                                    className="w-100"
                                    label={`${index + 1} Year Fees`}
                                    variant="filled"
                                    value={ele.fees}
                                    onChange={(e) => {
                                      let object = JSON.parse(
                                        JSON.stringify(ele)
                                      );
                                      let array = JSON.parse(
                                        JSON.stringify(tableList)
                                      );
                                      object.fees = e.target.value;
                                      array[index] = object;
                                      setTableList(array);
                                    }}
                                  />
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose2}>Cancel</Button>
                      <Button type="submit">Update</Button>
                    </DialogActions>
                  </form>
                </Dialog>

                <div
                  class="tab-pane fade"
                  id="pills-course"
                  role="tabpanel"
                  aria-labelledby="pills-contact-tab"
                >
                  <div className="col-sm-12 mt-3">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th scope="col">Course Name</th>
                          <th scope="col">Course Category</th>
                          <th scope="col">Total Fees</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {courseList.length > 0
                          ? courseList.map((ele, index) => {
                              return (
                                <tr row="1">
                                  <td>{ele?.course_name} </td>
                                  <td>{ele?.category_id?.category_name}</td>
                                  <td>{ele?.total_course_fees} </td>
                                  <td>
                                    <i
                                      class="fa-solid fa-pen-to-square"
                                      onClick={(e) => {
                                        handleClickOpen(ele._id);
                                      }}
                                      style={{ cursor: "pointer" }}
                                    ></i>
                                    &nbsp;
                                    <i
                                      class="fa-solid fa-trash"
                                      onClick={(e) => {
                                        onchangeCourseDelete(ele._id);
                                      }}
                                      style={{ cursor: "pointer" }}
                                    />
                                  </td>
                                </tr>
                              );
                            })
                          : ""}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ display: "flex" }}>
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel="next >"
                      onPageChange={onPageSubmit}
                      pageRangeDisplayed={5}
                      pageCount={pageCount ? pageCount : 1}
                      previousLabel="< previous"
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName="pagination"
                      activeClassName="active"
                      renderOnZeroPageCount={null}

                      //   renderOnZeroPageCount={null}
                    />
                    <br />
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Universityprofile;
