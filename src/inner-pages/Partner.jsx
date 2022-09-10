import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar';
import "../pages/home.css";
import { Link, useNavigate } from "react-router-dom";
import globe from "../images/global.gif";
import devied from "../images/divied.gif";
import quality from "../images/quality.gif";
import support from "../images/support.gif";
import Footer from '../components/Footer';
import multi from "../images/multi.gif"
const Partner = () => {
    return (
        <>
            <Navbar />
            <div className="partner container-fluid " style={{ backgroundImage: "url('https://www.standyou.com/images/recruit-students.jpg')", height: "500px", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", overflowY: "hidden !important" }}>
                <div className="row p-5" style={{ backgroundColor: "rgb(0,0,0,0.7)", height: "510px" }}>
                    <div className="mt-5 col-sm-7 ">
                        <h3 className=' text-light fw-bold fs-1' style={{ marginTop: "100px !important" }}>Recruit Students From 90+ Countries <br></br> And Make Your Campus Diversified</h3>
                        <p className='text-light w-100 ' style={{ fontSize: "14px" }}>Standyou Helps The Universities In Recruiting The Qualified Students From All Around The Work. Our Application Makes The Application And Documentation Management Seamless</p>
                        <Link to="/universitysignup">   <Button variant='contained' className='mt-4 p-3 mb-3' style={{ backgroundColor: "#FF723A" }}>Become Partner</Button></Link>
                    </div>
                </div>
            </div>
            <h3 className='text-center mt-5 mb-5'>How Scholarship Academy Helps The Universities And Schools</h3>

            <div className="part2 container mb-3">
                <div className="row">
                    <div class="card col-md-4 mb-3 text-center border-0 " style={{ width: "20rem" }}>
                        <div className="col-sm-12 shadow h-100">
                            <div className="text-center">
                                <img src={globe} className="" height={200} width={200} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Global Presence</h5>
                                <p class="card-text" style={{ fontSize: "13px" }}>Enhance Your International Presence With Our Network Of Recruitment Partners.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-4 mb-3 text-center border-0 " style={{ width: "20rem" }}>
                        <div className="col-sm-12 shadow h-100">
                            <div className="text-center">
                                <img src={devied} className="" height={200} width={200} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Diversified Campus</h5>
                                <p class="card-text" style={{ fontSize: "13px" }}>Recruit Students From 90+ Countries To Make Your Campus Diversified.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-4 mb-3 text-center border-0 " style={{ width: "20rem" }}>
                        <div className="col-sm-12 shadow h-100">
                            <div className="text-center">
                                <img src={quality} className="" height={200} width={200} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Eligible And Quality Applications</h5>
                                <p class="card-text" style={{ fontSize: "13px" }}>Receive Application Of The Students Who Fulfill All The Eligibility Criteria.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="card col-md-4 mb-3 text-center border-0 " style={{ width: "20rem" }}>
                        <div className="col-sm-12 shadow h-100">
                            <div className="text-center">
                                <img src={support} className="" height={200} width={200} alt="..." />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Our End-To-End Support</h5>
                                <p class="card-text" style={{ fontSize: "13px" }}>Our Expert Counsellors And Recruitment Partners Provide All The Required Support To The Students To Reduce The Time And Cost Of The University.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="partner container mb-5 mt-5">
                <div className="row mb-5">
                    <div className="col-md-6 mt-5">
                        <div className="col-sm-9 mt-5">
                            <p style={{ fontSize: "14px" }}>Become Partner With Scholarship Academy To Recruit Qualified Students From All Around The World And Make Your Campus Diversified.</p>
                            <p style={{ fontSize: "14px" }}>Become Partner With Scholarship Academy To Recruit Qualified Students From All Around The World And Make Your Campus Diversified.</p>
                            <Link to="/universitysignup">   <Button variant='contained' className='mt-4 p-3 mb-3' style={{ backgroundColor: "#FF723A" }}>Become Partner</Button></Link>
                        </div>
                    </div>
                    <div className="col-md-6 text-center">
                        <img src={multi} className="multi" height={400} alt="" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Partner