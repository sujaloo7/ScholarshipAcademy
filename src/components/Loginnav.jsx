import React from 'react';
import { Link } from 'react-router-dom';
// import { IoRocket } from "react-icons/io";


const Loginnav = () => {
    return (
        <>       <div className="col-sm-8 ms-auto me-auto">
            <nav class="container navbar navbar-expand-lg bg-light p-4 mt-3 shadow" style={{ borderRadius: "20px", backdropFilter: "blur(31px)" }}>

                <div class="container">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        {/* <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disabled</a>
        </li>
      </ul> */}

                        <Link to="/signup" className='ms-auto text-decoration-none text-muted' style={{fontSize:"13px"}}><i class="fa-solid fa-rocket"></i>&nbsp;Sign Up</Link>

                    </div>
                </div>
            </nav>
        </div>

        </>
    )
}

export default Loginnav