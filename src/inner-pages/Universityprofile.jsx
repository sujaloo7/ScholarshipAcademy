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
} from "../Repository/UserRepository";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { imageUrl } from "../Repository/Repository";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { type } from "@testing-library/user-event/dist/type";

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
  useEffect(() => {
    let authToken = localStorage.getItem("auth_token");
    if (!authToken) {
      Navigate("/");
    } else {
      GetProfile();
      GetCountry();
    }
  }, []);

  const onchangeDuration = (e) => {
    setCourseDuration(e.target.value);
    let array = [];
    for (let i = 0; i < Math.ceil(e.target.value); i++) {
      array.push(i);
    }
    console.log("array", array);
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

  const onchangeFees = (e, index) => {
    console.log(index, e.target.value);
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
  };

  const onsubmitCourse = async (e) => {
    e.preventDefault();
    let obj = {
      required_degress: courseDegree,
      work_experience: courseExp,
      course_duration: courseDuration,
      course_language: courseLang,
      course_program: courseProgram,
      course_level: courseLevel,
      course_name: courseName,
      admission: courseIntake,
      type: courseType,
      category_id: course,
      total_course_fees: totalFees,
    };
    let res = await addCourse(obj);
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

  return (
    <>
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
                  <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" style={{ borderRadius: "20px " }}>Personal Details</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" style={{ borderRadius: "20px ", backgroundColor: "" }}>University Details</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false" style={{ borderRadius: "20px " }}
                  >Upload course</button>
                </li>
              </ul>
              <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab"> <form action="" onSubmit={submitData}>
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
                        variant="outlined"
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
                          id="demo-simple-select-filled"
                          onChange={async (e) => {
                            console.log("data", e.target.value);

                            setPersonalData({
                              ...personalData,
                              country: e.target.value._id,
                            });

                            let res = await getStudentState({
                              countryCode: e.target.value.isoCode,
                            });
                            setStateList(res.data);
                          }}
                        //   value={age}
                        //   onChange={handleChange}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          {countryList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele._id === personalData.country ? (
                              <MenuItem
                                key={index}
                                value={ele}
                                style={{ backgroundColor: "grey" }}
                              >
                                {ele.name}
                              </MenuItem>
                            ) : (
                              <MenuItem key={index} value={ele}>
                                {ele.name}
                              </MenuItem>
                            );
                          })}
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
                        //   value={age}
                        //   onChange={handleChange}
                        >
                          {stateList?.map((ele, index) => {
                            //   console.log("test", ele._id, "select", selectState);
                            return ele._id === personalData.state ? (
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
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">  <form action="" onSubmit={UpdateDetails}>
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

                    <div className="col-md-12 mt-4">
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
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"> <div className="row">
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
                                  onchange={(e) => {
                                    console.log("running");
                                    onchangeFees(e, index);
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
