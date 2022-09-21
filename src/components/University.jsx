import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getUniversitiesProfile } from "../Repository/UserRepository";
import { useState } from "react";
import { imageUrl } from "../Repository/Repository";

const University = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
    GetUni();
  }, []);

  const GetUni = async () => {
    let res = await getUniversitiesProfile({
      is_all: true,
      for_country: true,
      page: 1,
      pagesize: 6,
    });
    if (res.status === 1) {
      setList(res.data);
    }
  };
  return (
    <>
      <div className="container p-3">
        <h6 className="mt-5 text-center" style={{ color: "#a8203b" }}>
          Featured Courses
        </h6>
        <h3
          className="fw-normal text-center"
          style={{ fontFamily: "Manrope ,  sans-serif" }}
        >
          Explore our Popular Universities
        </h3>

        <div className="row mt-5">
          {list.length > 0
            ? list.map((ele, index) => {
                return (
                  <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                    <Link to={`apply/${ele?._id}`}>
                      <Card
                        className="ms-auto me-auto h-100 shadow mb-4"
                        sx={{ maxWidth: 345 }}
                      >
                        <CardActionArea>
                          <div className="text-center">
                            <img
                              height="200px"
                              src={
                                ele.profile_picture
                                  ? `${imageUrl}${ele.profile_picture}`
                                  : `${imageUrl}/public/no-university-image.png`
                              }
                              className="text-center"
                              alt="green iguana"
                            />

                            <CardContent>
                              <Typography
                                gutterBottom
                                variant="h7"
                                component="div"
                              >
                                {ele?.name}
                              </Typography>
                              <Typography variant="" color="text.secondary">
                                {/* Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale regional, national and global scale. */}
                              </Typography>
                            </CardContent>
                            <Button
                              className="ms-3"
                              style={{ color: "#a8203b", fontSize: "12px" }}
                            >
                              Explore Now &nbsp;&nbsp;
                            </Button>
                          </div>
                        </CardActionArea>
                      </Card>
                    </Link>
                  </div>
                );
              })
            : ""}

          <div className="w-100 text-center mt-4 p-4">
            {" "}
            <Link
              to="/outeruniversities/all"
              className="text-decoration-none text-white"
            >
              {" "}
              <button
                className="btn btn-primary px-4 p-3 text-white"
                style={{ fontSize: "15px", borderRadius: "20px" }}
              >
                All Universities
              </button>{" "}
            </Link>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default University;
