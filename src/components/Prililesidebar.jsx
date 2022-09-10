import React, { useEffect, useState } from "react";
// import profilepic from "../images/profile-picture.gif";
import { imageUrl } from "../Repository/Repository";
import { getProfile } from "../Repository/UserRepository";
const Prililesidebar = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    GetProfile();
  }, []);
  const GetProfile = async () => {
    let res = await getProfile();
    setName(res.data.name);
    setImage(res.data.profile_picture);
  };

  const logOut = () => {
    localStorage.clear();
    window.location.href = "/login";
  };
  return (
    <>
      <div className="col-md-4 ">
        <div className="col-md-12 shadow">
          <div className="user-details text-center">
            <img
              src={`${imageUrl}${image}`}
              className="mb-0"
              height={150}
              style={{borderRadius:"50%"}}
              alt=""
            />
            <h5 className="mb-0">Welcome, {name}</h5>
            {/* <small style={{ color: "#FF723A" }}>ID: STY11142</small> */}
            <br></br>
            {/* <button onClick={logOut} style={{fontSize:"12px"}}  className=' btn btn-muted text-dark p-1 px-3 mb-2'>LogOut</button> */}
            <div className="profile-links"></div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Prililesidebar;
