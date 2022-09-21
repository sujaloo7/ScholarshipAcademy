import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { getBlog } from "../Repository/UserRepository";
import ReactPaginate from "react-paginate";
import moment from "moment/moment";
import { imageUrl } from "../Repository/Repository";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [blogList, setBlogList] = useState([]);
  const [dataCount, setDataCount] = useState(0);
  const [pageCount, setPageCount] = useState(10);
  const [currentpage, setCurrentPage] = useState(1);
  let pagesize = 10;

  useEffect(() => {
    GetBlog();
    window.scroll(0, 0);
  }, []);
  const onPageSubmit = (value) => {
    setCurrentPage(value.selected + 1);
    console.log("value", value.selected + 1);
  };

  const GetBlog = async () => {
    let res = await getBlog({ page: currentpage, pagesize: pagesize });
    if (res.status === 1) {
      setBlogList(res.data);
      setDataCount(res.count);
      let pageCount1 = Math.ceil(res.count / pagesize);
      setPageCount(pageCount1);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <h1 className="text-center fw-bold p-5">Our Blogs</h1>
          {blogList && blogList.length > 0 ? (
            blogList.map((ele, index) => {
              return (
                <div className="col-sm-4 ">
                  <div class="card border-0 bg-light mb-4 shadow">
                    <img
                      src={`${imageUrl}${ele.image}`}
                      class="card-img-top"
                      alt="..."
                      height={230}
                    />
                    <div class="card-body">
                      <h6 class="card-title">{ele.title}</h6>
                      <p class="card-text fw-bold" style={{ fontSize: "13px" }}>
                        {ele.subtitle}
                      </p>

                      <p class="card-text">
                        <span className="fw-bold">Created At :</span>
                        <small class="text-muted">
                          {moment(ele.createdAt).format("DD-MMM-YYYY")}
                        </small>
                        <br></br>
                        <Link
                          to={`/blogdetails/${ele._id}`}
                          className="btn btn-primary mt-2 p-0 px-3 py-2"
                          style={{ fontSize: "13px" }}
                        >
                          Read More
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-sm-12 text-center">
              <h4>No Blog Found</h4>
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "auto", marginRight: "auto" }}>
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={onPageSubmit}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active "
          style={{}}
          renderOnZeroPageCount={null}

          //   renderOnZeroPageCount={null}
        />
      </div>
      <Footer />
    </>
  );
};

export default Blogs;
