import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from '../Navbarnavod';
import Clockn from './Clockn';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Chartboard from './Chartboard';




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
function createData(productName, availableStocks, section, stockstatus) {
  return { productName, availableStocks, section, stockstatus };
}







const useStyles = makeStyles({
  table: {
    minWidth: 700,
    marginLeft: 300,
    marginTop: 300,
    width: "75%",
    position: "absolute",
    top: 350

  },
  bx: {
    marginLeft: 300,
    marginTop: 50,
    maxWidth: 1150,
    textAlign: 'left',

  },
  typ: {
    color: 'black',

  }



});

function Dashboard() {
  const classes = useStyles();
  const [products, setproducts] = useState([]);
  const [stockinsums, setstockinsums] = useState([]);

  const map = new Map();


  useEffect(() => {
    function getstocks() {
      axios.get("http://localhost:5000/stock/").then((res) => {

        setproducts(res.data);

      }).catch((err) => {
        alert(err.message);
      })
    }
    getstocks()

  }, [])







  return (
    <div className='dashboard'>

      <Navbar />

      <Box className={classes.bx} sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "#e4e4e4" }} position="static" className={classes.ap}>
          <Toolbar>
            <img
              src='/ggg.png'
              width="40"
              height="40"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

            <Typography className={classes.typ}
              variant="h6"
              noWrap
              marginLeft="30px"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              Dashboard
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>
      <Chartboard />




      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>

              <StyledTableCell>Product Name</StyledTableCell>
              <StyledTableCell align="center">Available Amount (Kg)</StyledTableCell>
              <StyledTableCell align="center">Section&nbsp;</StyledTableCell>
              <StyledTableCell align="center">Stock Status&nbsp;</StyledTableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {/* {stockinsums.map((stockinsum)=>(
               <StyledTableRow key={stockinsum._id}>
              
               <StyledTableCell align="center">{stockinsum._id}</StyledTableCell>
 
               <StyledTableCell component="th" scope="row">
                 {stockinsum._id}
               </StyledTableCell>
               <StyledTableCell align="center">{stockinsum.total}</StyledTableCell>
              
               
             </StyledTableRow>





          ) )} */}




            {products.map((product) => (
              <StyledTableRow key={product.productID}>



                <StyledTableCell component="th" scope="row">
                  {product.ProductName}
                </StyledTableCell>
                <StyledTableCell align="center">{product.Amount}</StyledTableCell>
                <StyledTableCell align="center">{product.SectionNo}</StyledTableCell>
                <StyledTableCell align="center">{product.Amount > 0 ?
                  "Avalable"
                  :
                  "Not Available"

                }



                </StyledTableCell>

              </StyledTableRow>
            ))}

          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Dashboard
