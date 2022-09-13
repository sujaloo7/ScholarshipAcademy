import React from 'react';
import react from "../images/react.svg"
import doctor from "../images/doctor.svg"
import engineer from "../images/engineer.svg"
import artist from "../images/artist.svg"
import alien from "../images/alien.svg"
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';


const Stream = () => {
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
      <div className="container mt-5">
        <h4 className=' text-center' style={{ color: "#a8203b" }}>Browse Categories</h4>
        <h6 className=' text-center' style={{ fontFamily: "Manrope ,  sans-serif" }}>Explore our Popular Streams</h6>
        <div className="row p-4 mt-3">

          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" style={{ borerRadius: "10px !important" }} >
            <img src={react} height={80} alt="" />
            <p className='mt-1'>Web Developer</p><small style={{ fontSize: "13px" }}>126+ Universites Available</small>
          </div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" > <img src={doctor} height={80} alt="" />
            <p className='mt-1'>M.B.B.S</p>
            <small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3 " > <img src={engineer} height={80} alt="" />
            <p className='mt-1'>Engineer</p> <small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" > <img src={artist} height={80} alt="" />
            <p className='mt-1'>Artist</p> <small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" > <img src={alien} height={80} alt="" />
            <p className='mt-1'>Scientist</p><small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" > <img src={artist} height={80} alt="" />
            <p className='mt-1'>Artist</p><small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className="stream col-sm-3 text-center  p-4 m-0 mb-3" > <img src={alien} height={80} alt="" />
            <p className='mt-1'>Scientist</p><small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>
          <div className=" stream col-sm-3 text-center  p-4 m-0 mb-3 " > <img src={doctor} height={80} alt="" />
            <p className='mt-1'>M.B.B.S</p><small style={{ fontSize: "13px" }}>126+ Universites Available</small></div>



        </div>
        <div className='w-100 text-center'> <Link to="/" className='  text-decoration-none text-white '> <button className='btn btn-primary px-4 p-3 text-white' style={{ fontSize: "15px", borderRadius: "20px" }}>All Categories</button> </Link> </div>
      </div>
    </>
  )
}

export default Stream