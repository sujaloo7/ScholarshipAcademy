// import logo from './logo.svg';
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Universitylogin from "./components/Universitylogin";
import Signup from "./components/Signup";
import Universitysignup from "./components/Universitysignup";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Universities from "./inner-pages/Universities";
import Universitiesdetails from "./inner-pages/Universitiesdetails";
import Outeruniverities from "./inner-pages/Outeruniverities";
import Apply from "./inner-pages/Apply";
import Profile from "./inner-pages/profile";
import Profiledetails from "./components/Profildetails";
import Coaching from "./inner-pages/Coaching";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pagenotfound from "./inner-pages/Pagenotfound";
import Partner from "./inner-pages/Partner";
import Course from "./pages/Course";
import Universityprofile from "./inner-pages/Universityprofile";
import Privacypolicy from "./inner-pages/Privacypolicy";
import Termandconditions from "./inner-pages/Termandconditions";
import Workingpolicy from "./inner-pages/WorkingPolicy";
import AboutUs from "./inner-pages/AboutUs";
import ContactUs from "./inner-pages/ContactUs";
import FAQ from "./inner-pages/Faq";
import Student from "./inner-pages/Student";
import Finance from "./pages/Finance";
import Money from "./pages/Money";
import Bankaccount from "./pages/Bankaccount";
import Blogs from "./pages/Blogs";
import Foruniversities from "./pages/Foruniversities";

// import { Authcontextprovider } from './context/Authcontext';

function App() {
  return (
    <>
      {/* <Authcontextprovider> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/university" element={<Universitylogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/universitysignup" element={<Universitysignup />} />
          <Route path="/category" element={<Category />} />
          <Route path="/universities" element={<Universities />} />
          <Route path="/outeruniversities/:id" element={<Outeruniverities />} />
          <Route
            path="/universities-details"
            element={<Universitiesdetails />}
          />
          <Route path="/apply/:id" element={<Apply />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profiledetails" element={<Profiledetails />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="*" element={<Pagenotfound />} />
          <Route path="partner" element={<Partner />} />
          <Route path="course" element={<Course />} />
          <Route path="universityprofile" element={<Universityprofile />} />
          <Route path="privacy-policy" element={<Privacypolicy />} />
          <Route path="term-and-condition" element={<Termandconditions />} />
          <Route path="working-policy" element={<Workingpolicy />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="student" element={<Student />} />
          <Route path="finance" element={<Finance />} />
          <Route path="money" element={<Money />} />
          <Route path="bankaccount" element={<Bankaccount />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="foruniversities" element={<Foruniversities />} />
        </Routes>
      </BrowserRouter>

      {/* </Authcontextprovider> */}
    </>
  );
}

export default App;
