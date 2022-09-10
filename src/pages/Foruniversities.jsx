import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Foruniversities = () => {
    return (
        <>
            <Navbar />
            <div className="container mt-5 p-5">
                <div className="row">
                    <div className="col-sm-7 mt-5">
                        <h1 className='text-hero-bold text-dark' style={{ fontFamily: "Source Sans Pro,sans-serif !important" }}>University Operating System</h1>
                        <p className='mt-3'>Built to recruit and manage high quality diverse students</p>
                        <button className='btn btn-primary mt-3'>Start Your Journey</button>
                    </div>
                    <div className="col-sm-5 text-center">
                        <img src="https://images.leverageedu.com/assets/img/university/banner-image.png" height={450} alt="" />
                    </div>

                </div>
            </div>
            <div className="container mt-5 mb-5" >
                <div className="row mb-4">
                    <div className="col-sm-8 ms-auto me-auto shadow p-3 " style={{ borderRadius: "20px" }}>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <img src="https://images.leverageedu.com/assets/img/university/student-recruitment.png" alt="" />
                                <p className='text-muted'>Student Recruitment</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <img src="https://images.leverageedu.com/assets/img/university/uniconnect-virtual-fairs.png" alt="" />
                                <p className='text-muted'>UniConnect Virtual Fairs</p>
                            </div>
                            <div className="col-sm-4 text-center">
                                <img src="https://images.leverageedu.com/assets/img/university/bespoke-marketing.png" alt="" />
                                <p className='text-muted'>Bespoke Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 p-4">
                <div className="row mt-5">
                    <div className="col-sm-6 mt-5">
                        <h2 className='ms-5 mb-4' style={{ color: "#c44464" }}>International Student Recruitment</h2>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img src="https://images.leverageedu.com/assets/img/university/magnifying-glass.png" className='ms-auto' height={60} alt="" />
                            </div>
                            <div className="col-sm-7">
                                <p className='mb-0 fw-bold'>Recruit DNA-match Students</p>
                                <small className='mt-0 text-muted' style={{ fontSize: "13px" }}>Leveraging one of our exclusive tools - the AI University Course Finder, directly connect with students who fit your cohort and requirements.</small>
                            </div>
                            <div className="col-sm-3 text-center mt-4">
                                <img src="https://images.leverageedu.com/assets/img/university/stars.png" className='ms-auto' height={60} alt="" />
                            </div>
                            <div className="col-sm-7 mt-4">
                                <p className='mb-0 fw-bold'>Unique Full Stack Service</p>
                                <small className='mt-0 text-muted' style={{ fontSize: "13px" }}>End-to-end assistance for Applicants including Education Loans, VISA Assistance, Forex, Travel and Accommodation.</small>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6 text-center">
                        <img src="https://images.leverageedu.com/assets/img/university/international-student-recruitment.png" height={450} alt="" />
                    </div>
                </div>
            </div>
            <div className="container mt-5 p-4">
                <div className="row mt-5">
                    <div className="col-sm-6 mt-5">
                        <h2 className='ms-5 mb-4' style={{ color: "#c44464" }}>Bespoke University Marketing</h2>
                        <div className="row">
                            <div className="col-sm-3 text-center">
                                <img src="https://images.leverageedu.com/assets/img/university/dart-board.png" className='ms-auto' height={60} alt="" />
                            </div>
                            <div className="col-sm-7">
                                <p className='mb-0 fw-bold'>Interactive Student Engagements</p>
                                <small className='mt-0 text-muted' style={{ fontSize: "13px" }}>Curated brand IPs support in amplifying your brand and establishing a deep connect with potential applicants.</small>
                            </div>
                            <div className="col-sm-3 text-center mt-4">
                                <img src="https://images.leverageedu.com/assets/img/university/stars.png" className='ms-auto' height={60} alt="" />
                            </div>
                            <div className="col-sm-7 mt-4">
                                <p className='mb-0 fw-bold'>Millennial first new-age digital campaigns</p>
                                <small className='mt-0 text-muted' style={{ fontSize: "13px" }}>Guaranteed success with monitored lead generation campaigns and backed by drip marketing campaigns.</small>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-6 text-center">
                        <img src="https://images.leverageedu.com/assets/img/university/bespoke-university-marketing.png" height={450} alt="" />
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Foruniversities