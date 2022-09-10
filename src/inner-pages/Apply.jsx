import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
// import Slider from './Slider';
// import react from "react-dom"
import Carousel from "./Carousel";
import Navbar from '../components/Navbar';
// import Universitylist from '../country-university/universitylist';
const Apply = () => {
  return (
    <>
      <Navbar />

      <div className=" container-fluid apply-con" style={{ backgroundImage: "url('https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", height: "auto", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
        {/* <Button>Back</Button> */}
        <div className="row p-5" style={{ backgroundColor: "rgb(0,0,0,0.7)", height: "auto" }}>
          <h3 className='text-center fw-bolder text-light' >Peoples' Friendship University Of Russia</h3>
          <div className="row">
            <div className="col-sm-4 text-center">
              <img src="https://www.standyou.com/uploads/20200605180128Kazan-Federal-University-Russia.jpg" alt="" height={200} />
            </div>
            <div className=" col-sm-8 ">
              <div className="row mt-2">
                <div className="col-sm-4">
                  <ul>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-location-pin"></i> &nbsp;&nbsp;&nbsp;Moscow , Russia</li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-graduation-cap"></i> &nbsp;Government University</li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-building-columns"></i> &nbsp;&nbsp;Established 1960</li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-medal"></i>&nbsp;&nbsp;&nbsp;World Rank - 125</li>
                  </ul>
                </div>
                <div className=" col-sm-4 ">
                  <ul>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-star"></i> &nbsp;&nbsp;&nbsp;Rating - 4.8 Points</li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-blender-phone"></i> &nbsp;&nbsp;Accomodation&nbsp;<i class="fa-solid fa-circle-check ms-5 text-success "></i></li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-hand-holding-medical "></i> &nbsp;&nbsp;Scholarship&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-circle-xmark ms-5 text-danger"></i></li>
                    <li className='text-light fw-regular mb-2' style={{ fontSize: "15px" }}><i class="fa-solid fa-clock"></i>&nbsp;&nbsp;&nbsp;Part Time Work<i class="fa-solid fa-circle-xmark ms-5 text-danger"></i></li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="container">
            <nav className='shadow p-2 border-0  bg-white'>
              <div class="nav nav-tabs ms-5 border-0" id="nav-tab" role="tablist">
                <button class="nav-link active border-0 fw-bold text-dark" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Overview</button>
                <button class="nav-link border-0 fw-bold text-dark" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Details</button>

                <Button className='ms-5 px-4' style={{ backgroundColor: "#a8203b" }} variant='contained'>Apply</Button>
              </div>
            </nav>
            <div class="tab-content p-5" id="nav-tabContent">
              <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0"><h4 className='mt-4' style={{ color: "#a8203b" }}>About University</h4>
                <p className='text-muted' style={{ textAlign: "justify", fontSize: "14px" }}>Established In 1960, The Peoples Friendship University Offers A World-Class MBBS Education To Its Students. It Ranks 18 Among All The Medical Colleges In The Country And 1829 In The World. To Pursue MBBS In This College, The Candidate Must Secure At Least 50% Marks In Physics, Chemistry, And Biology In 10+2 Or Equivalent From A Recognized Board Or Institution. Further, The Candidate Must Also Secure Qualifying Marks In NEET Competitive Examination. A Bilingual Medium Of Teaching Is Offered To The Students That Mean Students Can Either Study In English Medium Or In The Russian Language. International Students Are Offered With Compulsory Russian Language Classes So That They Can Communicate With Their Patient Easily During The Practical Classes And During Their Internship Period. Student-Friendly On-Campus Hostel Facilities Are Available. Hostels Are Located At A Walking Distance From The Department Buildings And Under The Supervision Of The University Administration. 2-3 Bedded Rooms Are Available With Options. Practical Classes Take Place In Its Affiliated Hospital. In Case Of Emergencies, The Student Is Rushed To The Affiliated Hospital Itself To Get The Best Treatment. The Hostel Rooms Contain Facilities Like Television, Telephone As Well As Internet Connectivity. It Is Accredited And Recognized By The MCI And The World Health Organization (WHO).</p>

                <h4 className='mt-4' style={{ color: "#a8203b" }}>Peoples' Friendship University Of Russia</h4>
                <p className='text-muted' style={{ textAlign: "justify", fontSize: "14px" }}>The Peoples' Friendship University Of Russia Is A Higher Education Institution In Moscow Founded In 1960. It Allows An Influx Of About Eighty Thousand Students From One Hundred And Seventy Countries. The University Has Agreements With More Than Two Hundred And Fifty Research Centers And Foreign Universities And About One Hundred And Thirty Joint International Educational Programs. It's An A-Grade University Whose Primary Mission Is To Unite The People Of Different Cultures And Countries On A Single Platform. The University Offers Top-Quality Education And The Highest Academic Standards.
                  People's Friendship University Is The Ancient Classical University Of Russia That Has Blended Its Traditional                 Education Pattern With Modern Research And Techniques. It Is Currently Headed By Dr. Vladimir Phillipov, The                 Russian Education Minister, During 1998-2004. RUDN University Implements Various Higher Education Programs In One                 Hundred And Thirty Training Areas, Specialties, And Subjects Under Fourteen Distinct Faculties. It Has Been A                 Pioneer In Establishing And Encouraging International Relations In Research, Innovation, And Education. The High                 Academic Standards Of This University Have Many International Students From Germany, Italy, France, India, And The                 USA. About Seven Thousand Five Hundred International Students Are Residents Of This University.</p>

                <h4 className='mt-4' style={{ color: "#a8203b" }}>Features Of The University</h4>

                <p className='text-muted' style={{ textAlign: "justify", fontSize: "14px" }}>The University Has Been Recognized By MCI And Other Statutory Bodies Of Different Countries.

                  After Completing Your Education At This University, You Can Practice MBBS In Your Country.

                  Peoples' Friendship University Ranks Three Hundred And Ninety-Two As Per 2020 QS Rankings, And It Acquires Nine Hundred And Thirty-Two Place In International Rankings.

                  On-The-Job Internships Are Held In The Simulation Training Center Of The University, Where Students Consolidate And Acquire Basic Practical Skills.

                  It Is A Multidisciplinary University That Has United More Than Thirty-Three Thousand Undergraduates, Postgraduates And Graduate Students, Interns, And Residents From One Hundred And Fifty-Seven Countries.

                  RUDN Conducts Consistent Research In Medical Microbiology, Fine Chemistry, Pharmacy, Green Infrastructure, Quality Control Of Engineering Technologies, And Remote Sensing Of The Earth.

                  The Fee Structure At This University Is Flexible, And You Don't Have To Give Capitation Fees Or Donations, Unlike Universities In India.

                  It Successfully Integrates Research, Innovation, And World-Class Education In Its Comprehensive Curriculum.

                  This University's Structure Consists Of Ten Top-Notch Research Institutes, Twenty Teaching Blocks, Three Dissertation Committees, And Thirteen Hostels.

                  RUDN Faculties Train Thousands Of Residents Through Seminars, Classes, And Tutorials In English And The Native Russian Language.

                  It Provides Various International Exchange Programs, Research Projects, And Joint Education Between Affiliated Countries. The University Has International Cooperation Agreements With Over Fifty-Four Countries.

                </p>

              </div>
              <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0"> <div className="row">
                <h3 className='mt-4' style={{ color: "#a8203b" }}>Browse By Courses</h3>
                <div className="col-sm-4 mt-4">
                  <Button className='text-light' style={{ backgroundColor: "#a8203b" }}>All Courses</Button>
                  <Button variant='outlined' className='text-dark border-dark ms-4' >MBBS</Button>

                </div>
                <div className="row inner-row ">
                  <h5 className='mt-5' style={{ color: "#a8203b" }}>MBBS</h5>
                  <div className="col-sm-4 ">
                    <ul>
                      <li className='fw-bold' style={{ fontSize: "13px" }}>Course Level</li>
                      <li className='fw-bold' style={{ fontSize: "13px" }}>Course Duration</li>
                      <li className='fw-bold' style={{ fontSize: "13px" }}>Total Course Fee</li>
                      <li className='fw-bold' style={{ fontSize: "13px" }}>Application Fees</li>
                      <Link to="/apply"> <Button className='text-light mt-2' style={{ backgroundColor: "#a8203b" }}><i class="fa-solid fa-eye"></i>View Course</Button></Link>
                    </ul>
                  </div>
                  <div className="col-sm-4 ">
                    <ul>
                      <li className='fw-bold text-muted' style={{ fontSize: "13px" }}>Bachelor’s</li>
                      <li className='fw-bold text-muted' style={{ fontSize: "13px" }}>6 Years</li>
                      <li className='fw-bold text-muted' style={{ fontSize: "13px" }}> $ 37347(₹ 2726334)</li>
                      <li className='fw-bold text-muted' style={{ fontSize: "13px" }}>Free</li>
                      <Button className='text-light mt-2' style={{ backgroundColor: "#a8203b" }}>Apply Now</Button>
                    </ul>
                  </div>
                </div>
                <Carousel />
              </div>

              </div>

              <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">...</div>
              <div class="tab-pane fade" id="nav-disabled" role="tabpanel" aria-labelledby="nav-disabled-tab" tabindex="0">...</div>
            </div>
          </div>


        </div>

      </div>
    </>
  )
}

export default Apply