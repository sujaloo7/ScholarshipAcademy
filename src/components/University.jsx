import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Button } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const University = () => {
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
            <div className="container p-3">
                <h6 className='mt-5 text-center' style={{ color: "#a8203b" }}>Featured Courses</h6>
                <h3 className='fw-normal text-center' style={{ fontFamily: "Manrope ,  sans-serif" }}>Explore our Popular Universities</h3>
                <div className="row mt-5">


                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }}  >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201702/oxford-university-647_022117112427.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        University of Oxford
                                    </Typography>
                                    <Typography variant="" color="text.secondary" >
                                        {/* Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale regional, national and global scale. */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://money-assets.money.com/mcp/2020/profile/243744.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Stanford University
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/* One of the world's leading research and teaching institutions. Catalyzing discovery, accelerating solutions, sustaining life on Earth, and preparing ... */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1622397333309-3056849bc70b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGFydmFyZCUyMHVuaXZlcnNpdHl8ZW58MHx8MHx8&w=1000&q=80"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Harvard University
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/* Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally. */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>
                </div>
                <div className="row mt-5">


                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://www.usnews.com/dims4/USNEWS/463ed3a/17177859217/resize/800x540%3E/quality/85/?url=https%3A%2F%2Fmedia.beam.usnews.com%2F1b%2F5ee194b917338eebca660942b5bdf3%2Fcollege-photo_6926.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        Massachusetts Institute
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" >
                                        {/* Oxford University provides world-class research and education to benefit society on a local, regional, national and global scale regional, national and global scale. */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://cdn.britannica.com/85/13085-050-C2E88389/Corpus-Christi-College-University-of-Cambridge-England.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        University of Cambridge
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/* One of the world's leading research and teaching institutions. Catalyzing discovery, accelerating solutions, sustaining life on Earth, and preparing ... */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>

                    <div className="col-md-4 mb-3" data-aos={"fade-top"}>
                        <Card className='ms-auto me-auto h-100 shadow-sm mb-3' sx={{ maxWidth: 345 }} >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://i2.wp.com/www.dailycal.org/assets/uploads/2021/08/reactions_sunnyshen_ss-900x580.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h7" component="div">
                                        University of California
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {/* Harvard University is devoted to excellence in teaching, learning, and research, and to developing leaders who make a difference globally. */}
                                    </Typography>
                                </CardContent>
                                <Button className='ms-3' style={{ color: "#a8203b", fontSize: "12px" }}>Explore Now  &nbsp;&nbsp;</Button>
                            </CardActionArea>
                        </Card>
                    </div>
                    <div className='w-100 text-center mt-4 p-4'> <Link to="/" className='text-decoration-none text-white'> <button className='btn btn-primary px-4 p-3 text-white' style={{ fontSize: "15px", borderRadius: "20px" }}>All Universities</button> </Link> </div>
                </div>
            </div>
        </>
    )
}

export default University