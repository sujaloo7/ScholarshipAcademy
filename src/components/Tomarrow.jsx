import React from 'react'

const Tomarrow = () => {
    return (
        <>
            <div className="container-fluid tomarrow" style={{ backgroundImage: "url(' https://leverageedu.s3.ap-south-1.amazonaws.com/about-us/about-us-bg-web.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "auto", backgroundAttachment: "fixed" }}>
                <div className="row">

                    <div className="row p-5">
                        <h1 className="fw-bold ms-5  mt-5"> <span style={{ color: "#a8203b" }}> Our</span>  Mission</h1>
                        <h5 className='ms-5'>We are building

                            the <span style={{ color: "#a8203b" }}>global citizens </span> of tomorrow</h5>
                        <div className="col-sm-6 mt-4 ms-5">
                            <div className="row">
                                <div className="col-sm-2 m-2"> <img height={60} className="" src="https://leverageedu.s3.ap-south-1.amazonaws.com/about-us/UK.png" alt="" /></div>
                                <div className="col-sm-2 m-2"> <img height={60} className="" src="https://leverageedu.s3.ap-south-1.amazonaws.com/about-us/Canada.png" alt="" /> </div>

                                <div className="col-sm-2 m-2"> <img height={60} className="" src="https://leverageedu.s3.ap-south-1.amazonaws.com/about-us/US.png" alt="" /> </div>

                                <div className="col-sm-2 m-2"> <img height={60} className="" src="https://leverageedu.s3.ap-south-1.amazonaws.com/about-us/Australia.png" alt="" /> </div>
                            </div>
                            <p className='mt-4' style={{ fontSize: "13px" }}>
                                Scholarship Academy helps students figure what they should do and where they should be at - wherever that be in the world - to realise their full potential. It helps students navigate & assess their journey thus far, matches them to personalised mentors, counsels them towards their higher education dream with an employability lens, and makes sure that everyone punched way above their weight to make dreams come alive and truly be able to level up.
                            </p>
                            <button className='btn btn-primary mt-3'>Know More</button>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Tomarrow