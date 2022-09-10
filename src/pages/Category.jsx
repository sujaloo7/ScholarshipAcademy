import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import "./category.css";
// import Course from './Course';

const Category = () => {
    return (
        <>
            {/* <Navbar /> */}
            <section style={{ height: "100vh" }}>
                <main class="this">
                    <div class="this-image">
                        <img src="https://i.guim.co.uk/img/media/e842fc210be953538b18cf81f1b01068177b731c/0_495_7360_4417/master/7360.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=fc1b3878dcc40dedbb71a2d5e49b231c" alt="Image" />
                    </div>


                    <div class="this-title">
                        <Link to="/outeruniversities" className=''>  <h3 className='bg-dark'>University</h3></Link>

                    </div>
                </main>

                <main class="this">
                    <div class="this-image">
                        <img src="https://travellemming.com/wp-content/uploads/2020-Travel-Destinations.jpg" alt="Image" />
                    </div>


                    <div class="this-title">
                        <Link to="/universities">  <h3 className='bg-dark'>Destination</h3></Link>
                    </div>
                </main>


                <main class="this">
                    <div class="this-image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Oxford_Matriculation_2003.jpg/1280px-Oxford_Matriculation_2003.jpg" alt="Image" />
                    </div>
                    <div class="this-title">
                        <Link to="/course">   <h3 className='bg-dark'>Courses</h3></Link>
                    </div>
                </main>
            </section>
        </>
    )
}

export default Category