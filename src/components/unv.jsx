<form
    action=""
    className=""
    style={{
        marginTop: "50px !important",
        marginLeft: "100px !important",
    }}
>
    <div className="col-sm-9 ms-auto me-auto  mt-5">
        <h4 className=" fw-bold " style={{ color: "#F6AD55" }}>
            Sign Up As Student
        </h4>
        <small className="text-muted" style={{ fontSize: "13px" }}>
            Enter your email,password and other Details to sign Up
        </small>
        <div className="row">
            <div className="col-sm-6 mt-4">
                <div class="mb-2">
                    <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={{ fontSize: "13px" }}
                    >
                        {" "}
                        Full Name
                    </label>
                    <input
                        type=""
                        class="form-control p-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setName(e.target.value)}
                    />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
            </div>
            <div className="col-sm-6 mt-4">
                <div class="mb-2">
                    <label
                        for="exampleInputEmail1"
                        class="form-label"
                        style={{ fontSize: "13px" }}
                    >
                        Email address
                    </label>
                    <input
                        type="email"
                        class="form-control p-2"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <small
                        className="text-muted"
                        style={{ fontSize: "12px" }}
                    >
                        We'll never share your email with anyone else
                    </small>
                </div>
            </div>
        </div>
        <div className="col-sm-12 ">
            <div class="mb-3">
                <label
                    for="exampleInputEmail1"
                    class="form-label"
                    style={{ fontSize: "13px" }}
                >
                    Phone Number
                </label>
                <input
                    type="number"
                    class="form-control p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setMobile(e.target.value)}
                />
                {/* <small style={{ fontSize: "12px" }}>We'll never share your email with anyone else</small> */}
            </div>
        </div>
        {/* <br></br> */}
        <div className="col-sm-12">
            <div class="mb-3">
                <label
                    for="exampleInputEmail1"
                    class="form-label"
                    style={{ fontSize: "13px" }}
                >
                    Password
                </label>
                <input
                    type="password"
                    class="form-control p-2"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
            </div>
        </div>
        <div
            className="col-sm-12 mb-4 d-flex"
            style={{ marginTop: "-17px" }}
        >
            <div className="col-sm-6">
                <Link
                    to="/"
                    className="text-decoration-none"
                    style={{ fontSize: "13px", color: "#F6AD55" }}
                >
                    Forgot Password?
                </Link>
            </div>
            <div className="col-sm-6 ps-5">
                <small style={{ fontSize: "12px" }} className="ms-5">
                    Already Have Account ?
                    <Link
                        to="/login"
                        className="text-decoration-none"
                        style={{ fontSize: "13px", color: "#F6AD55" }}
                    >
                        &nbsp;Sign In
                    </Link>
                </small>
            </div>
        </div>
        <Button
            variant="contained"
            className="px-4 py-2 col-sm-12 mb-4 shadow-0 btn"
            onClick={registerUser}
            style={{ backgroundColor: "#F6AD55", borderRadius: "15px" }}
        >
            Login
        </Button>
        <Divider className="col-sm-12 mb-4">
            <Chip label="OR" />
        </Divider>
        <div className="col-sm-12 text-center">
            <Link to="/university" className="text-decoration-none">
                <Button
                    className=" px-4 py-2 col-sm-12 btn"
                    type="submit"
                    variant="outlined"
                    style={{
                        fontSize: "13px",
                        color: "#F6AD55",
                        borderColor: "#F6AD55",
                        borderRadius: "15px",
                    }}
                >
                    Are you an University?
                </Button>
            </Link>
        </div>
    </div>
</form>