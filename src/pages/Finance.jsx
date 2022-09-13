import { Button } from '@mui/material'
import React from 'react'
import Navbar from '../components/Navbar';
import "./home.css";
import banks from "../images/banks.PNG"
import Footer from '../components/Footer';
import TextField from '@mui/material/TextField';


const Finance = () => {
    return (
        <>
            <Navbar />

            <div className="container p-5 finance">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <h2 className='text-hero-bold text-dark'>Finance your study
                            <span className='' style={{ color: "#a8203b" }}> Abroad dream.</span></h2>
                        <h4 className='text-muted mt-3'>With Affordable Loans From Scholar Finance</h4>
                        <button className='btn btn-primary py-3 mt-4' variant="contained">Check Your Eligibility</button>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img src="https://clouddevs.com/3dbay/files/preview/1280x1066/11633023143hrov2clvc7brli5mtqrwbwkgwv55g6pvfpavbutv0qv6b4ljlvpymuux2osohji9bhbt7nisbdrshvas9gktlqh7yxwvk8fwmfkt.png" className='image' height={400} alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="container mt-5">
                <div className="row mb-4">
                    <div className="mt-5 text-center p-3 ">
                        <img src={banks} alt="" />
                    </div>
                </div>
            </div> */}
            <div className="container-fluid  mt-5" >
                <div className="row">
                    <h2 className='fw-bold text-center p-5 pb-5'>Why <span className='' style={{ color: "#a8203b" }}>Choose Us?</span></h2>

                    <div className="part2 container mb-3">
                        <div className="row p-5">
                            <div class="card col-md-4 mb-3 text-center border-0 mb-4 " >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/dedicated-loan-expert.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Dedicated loan expert</h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="card col-md-4 mb-3 text-center border-0 mb-4" >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/best-interest-rates.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Best interest rates</h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div> <div class="card col-md-4 mb-3 text-center border-0 mb-4" >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/zero-service-fee.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Zero service fee</h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="card col-md-4 mb-3 mt-4 text-center border-0 mb-4" >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/multiple-loan-providers.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Multiple loan providers
                                        </h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                            <div class="card col-md-4 mb-3 mt-4 text-center border-0 mb-4" >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/comparative-analysis.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Comparative analysis
                                        </h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div> <div class="card col-md-4 mt-4 mb-3 text-center border-0 mb-4" >
                                <div className="col-sm-12  h-100">
                                    <div className="text-center">
                                        <img src="https://images.leverageedu.com/assets/img/leverage-finance/loans/why-choose-us/collateral-free.svg" className="" height={100} width={200} alt="..." />
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title fw-bold ">Collateral free*
                                        </h4>

                                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container p-4">
                <h2 className='fw-bold text-center p-5 pb-5'>Check Your  <span className='' style={{ color: "#a8203b" }}>Eligibility.</span></h2>
                <div className="row">
                    <div className="col-sm-6">
                        <TextField id="outlined-basic" label="FullName" className='w-100' variant="outlined" />

                    </div>
                    <div className="col-sm-6">
                        <TextField id="outlined-basic" label="Amount Required" type="number" className='w-100' variant="outlined" />

                    </div>
                    <div className="col-sm-6 mt-5">
                        <TextField id="outlined-basic" label="Email" type="email" className='w-100' variant="outlined" />

                    </div>
                    <div className="col-sm-6 mt-5">
                        <TextField id="outlined-basic" label="Mobile Number" type="number" className='w-100' variant="outlined" />


                    </div>
                    <div className="col-sm-6">
                        <button className='btn btn-primary mt-4 px-5'>Submit</button>
                    </div>

                </div>
            </div>

            <div className="container-fluid mt-5" style={{ backgroundColor: "#c44464", height: "300px" }}>
                <div className="row pt-5" >
                    <h1 className='fw-bold text-center mt-5 text-light'>Trusted by 9 Million+ Students.</h1>



                </div>
            </div>

            <div className="container mt-5 p-5 mb-5">
                <div className="row text-center mb-5">
                    <h1 className='fw-bold'>We Are <span className='' style={{ color: "#a8203b" }}>Just A Call Away!</span></h1>
                    <div className="col-sm-12">
                    <button className='btn btn-primary mt-3'>Check Your Eligibility</button>
                    </div>
                </div>
            </div>
            <Footer />

        </>
    )
}

export default Finance