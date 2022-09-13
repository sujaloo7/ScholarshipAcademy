import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Bankaccount = () => {
    return (
        <>
            <Navbar />
            <div className="container p-5 bank-account">
                <div className="row">
                    <div className="col-sm-6 mt-5">
                        <h2 className='text-hero-bold text-dark'>Apply in minutes for<br></br>
                            <span className='' style={{ color: "#a8203b" }}>International Bank Account.</span></h2>
                        <h4 className='text-muted mt-3'>Zero application fee, completely online process, no branch visit required.</h4>
                        <button className='btn btn-primary py-3 mt-4' variant="contained">Request Callback</button>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img src="https://clouddevs.com/3dbay/files/preview/960x960/116469207725gnt7vrbvyk2cik4uibvftg362nmwqzsn9daiomatnflrihtz2yemlwl9kux4omtuf1yb6snzu03ozpm5kv8cjjoar0zcdje7axy.png" height={400} alt="" />
                    </div>
                </div>
            </div>

            <div className="container mt-5 usp-using">
                <div className="row mt-5">
                    <h1 className='text-center fw-bold mt-5'>Benefits</h1>

                    <div className="col-sm-6 mt-5 ">
                        <div className="row shadow m-2 p-5" style={{ height: "200px", borderRadius: "20px" }}>
                            <div className="col-sm-4 text-right">
                                <img src="https://images.leverageedu.com/leverage-finance/assets/global_presence.svg" alt="" height={130} className='' />
                            </div>
                            <div className="col-sm-8">
                                <h3 className='fw-bold mt-3'>Global presence</h3>
                                <p>In 60+ countries.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 ">
                        <div className="row  m-2 p-5 shadow" style={{ height: "200px", borderRadius: "20px" }}>
                            <div className="col-sm-4">
                                <img src="https://images.leverageedu.com/leverage-finance/assets/Multi_utility.svg" alt="" height={130} />
                            </div>
                            <div className="col-sm-8">
                                <h3 className='mt-3'>Multi-utility</h3>
                                <p>Pay your fee, rent, bills with the same International Account.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 ">
                        <div className="row shadow m-2 p-5" style={{ height: "200px", borderRadius: "20px" }}>
                            <div className="col-sm-4 text-right">
                                <img src="https://images.leverageedu.com/leverage-finance/assets/Preferential_rates.svg" alt="" height={130} className='' />
                            </div>
                            <div className="col-sm-8">
                                <h3 className='fw-bold mt-3'>Preferential rates</h3>
                                <p>On money transfer for tuition fees and overseas education-related costs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-5 ">
                        <div className="row  m-2 p-5 shadow" style={{ height: "200px", borderRadius: "20px" }}>
                            <div className="col-sm-4">
                                <img src="https://images.leverageedu.com/leverage-finance/assets/24_7_support.svg" alt="" height={130} />
                            </div>
                            <div className="col-sm-8">
                                <h3 className='mt-3'>24*7 support</h3>
                                <p>From our banking partners.</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className="container-fluid mt-5" style={{ backgroundColor: "#c44464", height: "300px" }}>
                <div className="row pt-5" >
                    <h1 className='fw-bold text-center mt-5 text-light'>Trusted by 9 Million+ Students.</h1>



                </div>
            </div>
            <Footer />
        </>
    )
}

export default Bankaccount