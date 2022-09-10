import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import phone from "../images/phone-operator.svg";
import student from "../images/graduate.svg";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';



const Way = () => {

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
                <div className="row mt-5 p-3">
                    <h4 className='mt-5 text-center' style={{ color: "#a8203b" }}>University & Students</h4>
                    <h6 className=' text-center' style={{ fontFamily: "Manrope ,  sans-serif" }}>What you Looking For?</h6>
                    <div className="col-sm-6 mt-5" data-aos={"fade-left"}>

                        <div class="card col-sm-8 ms-auto me-auto border-0 shadow-sm p-3 text-center h-100" style={{ borderRadius: "14px" }}>
                            <img src={phone} class="card-img-top" alt="..." height={100} />
                            <div class="card-body">
                                <h5 style={{ fontFamily: "Manrope ,  sans-serif" }}>Do you want to teach here?</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="/universitysignup" className="text-decoration-none">
                                    <Button className='text-center mt-2 p-2 px-3' variant='outlined' style={{ borderRadius: "20px", color: " #a8203b", borderColor: "#a8203b" }}>Register Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5" data-aos={"fade-right"}>
                        <div class="card col-sm-8 ms-auto me-auto border-0 shadow-sm p-3 text-center h-100" style={{ borderRadius: "14px" }}>
                            <img src={student} class="card-img-top" alt="..." height={100} />
                            <div class="card-body">
                                <h5 style={{ fontFamily: "Manrope ,  sans-serif" }}>Do you want to learn here?</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <Link to="signup" className="text-decoration-none">
                                    <Button className='text-center mt-2   border-0 p-2 px-3 text-white' variant='outlined' style={{ borderRadius: "20px", backgroundColor: "#a8203b" }}>Register Now</Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Way