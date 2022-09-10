import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
// import Videosection from './Videosection';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import "./stream.css";


const Whywe = () => {
    useEffect(() => {
        AOS.init(
            {
                duration: 1500
            }
        );
        AOS.refresh();
    }, []);
    return (
        <>
            <div className="why container  p-4 ">
                <div className=" row mt-5">
                    <h6 className='mt-5' style={{ color: "#B3B6B7", textTransform: "capitalize" }}>Explore Scholarship academy</h6>
                    <h3 className='fw-normal' style={{ fontFamily: "Manrope ,  sans-serif" }}>Why Choose Scholarship-academy?</h3>
                    <div className="col-sm-6 mb-5 " >
                        {/* <p className='mb-3 text-muted' style={{ fontSize: "15px" }}>There are many variations of passages of Lorem Ipsum available,<br></br> but the majority have suffered alteration in some form.</p> */}
                        <ul className='text-muted mt-3' style={{ marginLeft: "-40px", fontSize: "13px" }}>
                            <li className='mb-2 ms-5' style={{ listStyle: "none", fontFamily: "Manrope ,  sans-serif" }}> <img src="https://images.leverageedu.com/homepage/bullet-check.svg" alt="" />&nbsp;
                                There are many variations of passages of .
                            </li>
                            <li className='mb-2 ms-5' style={{ listStyle: "none", fontFamily: "Manrope ,  sans-serif" }}> <img src="https://images.leverageedu.com/homepage/bullet-check.svg" alt="" />&nbsp;
                                There are many variations of passages of .
                            </li>
                            <li className='ms-5' style={{ listStyle: "none", fontFamily: "Manrope ,  sans-serif" }}> <img src="https://images.leverageedu.com/homepage/bullet-check.svg" alt="" />&nbsp;
                                There are many variations of passages of.
                            </li>
                        </ul>
                        <Link to="signup" className="text-decoration-none">
                            <Button className='text-center mt-3 border-0 p-2 px-3 text-white' variant='outlined' style={{ borderRadius: "20px", backgroundColor: "#a8203b" }}>Register Now</Button>
                        </Link>
                    </div>
                    <div className="  col-md-6" >
                        <div className="col-sm-6 ms-auto me-auto">

                            <img src="https://www.thepioneertech.com/wp-content/uploads/2022/03/hero.39e52ff.svg" alt="" className='we' height={400} style={{ marginTop: "-90px" }} />
                        </div>

                        {/* <Videosection /> */}
                    </div>

                </div>
            </div>
        </>
    )
}

export default Whywe