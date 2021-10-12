import React from "react";
import Empbtn from "./Empbtn";
import { useState, useEffect } from "react";
import Modle from "./EmpModle";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";
import EmployeeDetails from "./EmployeeDetails";
import EmpSideNavBar from "./EmpSideNavBar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Report from "./EmpReport";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import EmployeeTable from "./EmployeeTable";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  color: "black",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color: "black",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const useStyles = makeStyles({
  bx: {
    marginLeft: 25,
    marginTop: 20,
    maxWidth: "100%",
    textAlign: "left",
  },
  typ: {
    color: "black",
  },
});
const Employee = () => {
  const [modalShow, setModalShow] = useState(false);
  const [totEmp, setTot] = useState(1);
  const [reportModal, setReportModal] = useState(false);
  const [searchTerm, setSearch] = useState("");
  const [employees, setEmployee] = useState([]);

  const findItems = (itemName) => {
    if (itemName) {
      axios
        .get(`http://localhost:5000/employee/search/${itemName}`)

        .then((res) => {
          let arr = res.data;

          let i;

          let list = [];

          for (i = 0; i < arr.length; i++) {
            list.push(arr[i]);
          }

          setEmployee(list);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  };
  const classes = useStyles();
  const handleChange = (event) => {
    findItems(event.target.value);

    setSearch(event.target.value);
  };
  useEffect(() => {
    if (!searchTerm) {
      const getEmployeee = () => {
        axios
          .get("http://localhost:5000/employee")
          .then((res) => {
            setEmployee(res.data);
          })
          .catch((err) => {
            alert(err.msg);
          });
      };
      getEmployeee();
    }
  }, [searchTerm]);

  return (
    <>
      <EmpSideNavBar />
       
      <div
        style={{ marginLeft: "220px", marginTop: "15px", marginRight: "50px" }}
      >
        <Row>
          <div style={{ margin: "20px" }}></div>
          <Box className={classes.bx} sx={{ flexGrow: 1 }}>
            <AppBar
              style={{ backgroundColor: "#e4e4e4" }}
              position="static"
              className={classes.ap}
            >
              <Toolbar>
                <img
                  src="/ggg.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                />

                <Typography
                  className={classes.typ}
                  variant="h6"
                  noWrap
                  marginLeft="20px"
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  Employees
                </Typography>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    value={searchTerm}
                    onChange={handleChange}
                  />
                </Search>
                 <Empbtn onClick={() => setModalShow(true)} />
            <Button onClick={() => setReportModal(true)}>
              {" "}
              Generate Report{" "}
            </Button>
              </Toolbar>
            </AppBar>
          </Box>

         
          <br />
          <Modle
            show={modalShow}
            onHide={() => setModalShow(false)}
            type={"ADD"}
          />
          <Report show={reportModal} onHide={() => setReportModal(false)} />

          <>
            <EmployeeTable employees={employees} />
          </>
        </Row>
      </div>
    </>
  );
};

export default Employee;
