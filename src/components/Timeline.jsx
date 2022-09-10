import React from 'react';
import "./timeline.css";

const Timeline = () => {
    return (
        <>

            <h6 className='mt-5 text-center' style={{ color: "#FF723A" }}>Offerings</h6>
            <h3 className='fw-normal text-center' style={{ fontFamily: "Manrope ,  sans-serif" }}>For all your study abroad needs</h3>

            <ul class="timeline">

                <li>
                    <div class="direction-l">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">

                            {/* <span class="flag wbg">April 2022</span> */}
                            <span class="time-wrapper hide"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">WooCommerce integration, release of Point of Sale system</div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">

                            <span class="time-wrapper hide"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">WooCommerce integration, release of Point of Sale system</div>
                    </div>
                </li>




                <li>
                    <div class="direction-r">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">
                            <span class="flag wbg">March 2022</span>
                            <span class="time-wrapper hide"><span class="time">2013 - present</span></span>
                        </div>
                        <div class="desc">WooCommerce integration, release of Point of Sale system</div>
                    </div>
                </li>


                <li>
                    <div class="direction-l">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">
                            <span class="flag xl">May 2022 </span>
                            <span class="time-wrapper hide"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">WooCommerce integration, release of Point of Sale system</div>
                    </div>
                </li>


                <li>
                    <div class="direction-r">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">
                            <span class="flag wbg">June 2022</span>
                            <span class="time-wrapper hide"><span class="time">2008 - 2011</span></span>
                        </div>
                        <div class="desc">Shopify integration, Cometa Token private sale for early investors and ICO
                        </div>
                    </div>
                </li>

                <li>
                    <div class="direction-l">
                        <img src="https://images.leverageedu.com/homepage/Leverage-Media-1.png" height={100} alt="" />
                        <div class="flag-wrapper">
                            <span class="flag wbg">July</span>
                            <span class="time-wrapper hide"><span class="time">2011 - 2013</span></span>
                        </div>
                        <div class="desc">Shopify integration, Cometa Token private sale for early investors and ICO</div>
                    </div>
                </li>


            </ul>
        </>
    )
}

export default Timeline