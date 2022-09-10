import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Carousel.css";


function Carousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
              },
            },
            {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
              {
                breakpoint: 400,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                },
              },
          ],
    };

    return (
        <>

            <div className='mt-5 d-none'>
                <h2 className='mt-5 ms-3' style={{ color: "#FF723A" }}> Recommended Universities</h2>
                <Slider {...settings}>
                    <div className='slider' >
                        <div class="slider card text-center m-3 p-2 border-0 shadow" >
                            <img src="https://www.standyou.com/uploads/20200605180232Kuban-State-Medical-University-Russia.png" style={{ height: "150px", width: "150px" }} class="ms-auto me-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "#FF723A", fontSize: "14px" }}>Kuban State Medical University</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}> Krasnodar , Russia</p>
                                <i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-center m-3 p-2 border-0 shadow" >
                            <img src="https://www.standyou.com/uploads/20200605180259Kursk-State-Medical-University-Russia.jpg" style={{ height: "150px", width: "250px" }} class="ms-auto me-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "#FF723A", fontSize: "14px" }}>Kuban State Medical University</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}> Krasnodar , Russia</p>
                                <i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-center m-3 p-2 border-0 shadow" >
                            <img src="https://www.standyou.com/uploads/20200605180337Mari-State-University-Russia.png" style={{ height: "150px", width: "150px" }} class="ms-auto me-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "#FF723A", fontSize: "14px" }}>Kuban State Medical University</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}> Krasnodar , Russia</p>
                                <i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>


                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-center m-3 p-2 border-0 shadow" >
                            <img src="https://www.standyou.com/uploads/20200605180415Northern-State-Medical-University-Russia.png" style={{ height: "150px", width: "150px" }} class="ms-auto me-auto" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "#FF723A", fontSize: "14px" }}>Kuban State Medical University</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}> Krasnodar , Russia</p>
                                <i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div class="card text-center m-3 p-2 border-0 shadow" >
                            <div className='w-100 text-center'>
                                <img src="https://www.standyou.com/uploads/20200605180445Omsk-State-Medical-University-Russia.png" style={{ height: "150px", width: "150px" }} class="ms-auto me-auto" alt="..." /></div>
                            <div class="card-body">
                                <h5 class="card-title" style={{ color: "#FF723A", fontSize: "14px" }}>Kuban State Medical University</h5>
                                <p class="card-text text-muted" style={{ fontSize: "13px" }}> Krasnodar , Russia</p>
                                <i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star text-warning" style={{ fontSize: "13px" }}></i><i class="fa-solid fa-star " style={{ fontSize: "13px" }}></i>

                            </div>
                        </div>
                    </div>

                </Slider>
            </div>


        </>
    )
}

export default Carousel