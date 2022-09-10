import React from 'react'
import error from "../images/404.gif"

const Pagenotfound = () => {
  return (
 
    <>
    <div className="container">
        <div className="row">
            <div className="col-sm-6 mt-5 text-center ms-auto me-auto">
            <img src={error} className="mt-5 " height={450} alt="" />

            </div>
        </div>
    </div>
    </>
  )
}

export default Pagenotfound