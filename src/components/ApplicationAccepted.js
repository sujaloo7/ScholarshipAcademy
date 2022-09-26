import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Prililesidebar from "./Prililesidebar";

import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Drive from "../components/Drive";
import { getApplication } from "../Repository/UserRepository";

import { useEffect, useState } from "react";
import moment from "moment";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";
import ReactPaginate from "react-paginate";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ApplicationAccepted = () => {
  const [appData, setAppData] = useState([]);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("message");
  const [dataCount, setDataCount] = useState(0);
  const [pageCount, setPageCount] = useState(1);
  const [currentpage, setCurrentPage] = useState(1);
  let pagesize = 5;

  let navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onPageSubmit = (value) => {
    setCurrentPage(value.selected + 1);
    console.log("value", value.selected + 1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    GetApplication();
  }, []);

  const GetApplication = async () => {
    let res = await getApplication({ page: currentpage, pagesize: pagesize });
    if (res.status === 1) {
      let c = 0;
      let arr = [];
      res.data.map((ele) => {
        if (ele.status === "approved") {
          arr.push(ele);
          c = c + 1;
        }
      });
      setAppData(arr);

      console.log(c);

      setDataCount(c);
      let pageCount1 = Math.ceil(c / pagesize);
      setPageCount(pageCount1);
    }
  };

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
        >
          <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
            {message}
          </Alert>
        </Snackbar>
      </Stack>
      <Navbar />
      <div className="container mt-4 mb-5">
        <div className="row">
          <Prililesidebar />
          <div className="col-md-8 shadow p-3">
            <TableContainer component={Paper} style={{ height: "400px" }}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>S.no</TableCell>
                    <TableCell>Course Name</TableCell>

                    <TableCell>University Name</TableCell>
                    <TableCell>Status </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {appData.map((ele, index) => {
                    return (
                      <TableRow
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {index + 1}
                        </TableCell>

                        <TableCell>{ele?.course_id?.course_name} </TableCell>
                        <TableCell>{ele?.university_id?.name} </TableCell>

                        <TableCell>{ele?.status}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <div style={{ display: "flex" }}>
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={onPageSubmit}
                pageRangeDisplayed={5}
                pageCount={pageCount ? pageCount : 1}
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
                activeClassName="active"
                renderOnZeroPageCount={null}

                //   renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ApplicationAccepted;
