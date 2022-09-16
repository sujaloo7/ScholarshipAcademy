import React from "react";
// import "./home.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategory } from "../Repository/UserRepository";

const Course = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    GetCourse();
  }, []);

  const GetCourse = async () => {
    let res = await getCategory({ is_all: true });
    setCourseList(res.data);
  };
  return (
    <>
      <Navbar />
      <div
        className="container-fluid "
        style={{
          backgroundImage:
            "url('https://leverageedunew.s3.amazonaws.com/study-master/cp2020-04-02_28_cpgermany-cover.jpg')",
          height: "auto",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-100 p-4 text-center ">
          <Button
            className="text-center  p-4  text-light"
            style={{ backgroundColor: "#a8203b" }}
            disabled
          >
            Select Courses
          </Button>
        </div>
        <div className="row">
          <div className="container">
            <div className="row">
              {courseList && courseList.length > 0 ? (
                courseList.map((ele, index) => {
                  return (
                    <div className="col-sm-3 " style={{ color: "black " }}>
                      <div className="course-card col-sm-12">
                        <Link to={`/outeruniversities/${ele._id}`}>
                          <Card
                            className="   shadow border-0 text-center "
                            style={{ height: "100px" }}
                          >
                            <CardActionArea>
                              <CardContent>
                                <Typography
                                  variant="body2"
                                  color="text.secondary"
                                >
                                  <br></br>
                                  <small
                                    className="text-center mt-5 text-dark text-center"
                                    style={{ fontSize: "15px" }}
                                  >
                                    {" "}
                                    {ele?.category_name}
                                  </small>
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                          </Card>
                        </Link>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ textAlign: "center", color: "black" }}>
                  <br />
                  <Card className="shadow border-0">
                    <CardActionArea>
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <p className="text-center"> No Course Found</p>
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                  <br />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Course;
