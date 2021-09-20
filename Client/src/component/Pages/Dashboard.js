import React from 'react'

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Navbar from '../Navbarnavod';


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

  const status='available';

 
  
  const rows = [
    createData('Green Tea', 50, '1A',status ),
    createData('Black Tea', 30, '2A',status ),
    createData('White Tea', 40, '3A',status ),
    createData('Fruit Tea', 30, '4A', status)
    
  ];

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
      marginLeft:300,
      marginTop:300,
      width:"75%"
      
    },
  });

function Dashboard() {
    const classes = useStyles();
    
      
    return (
        <div className='dashboard'>
          <Navbar/>
         
             <TableContainer component={Paper}>
      <Table   className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Available Amount (Kg)</StyledTableCell>
            <StyledTableCell align="right">Secton&nbsp;(g)</StyledTableCell>
            <StyledTableCell align="right">Stock Status&nbsp;(g)</StyledTableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productName}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.availableStocks}</StyledTableCell>
              <StyledTableCell align="right">{row.section}</StyledTableCell>
              <StyledTableCell align="right">{row.stockstatus}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default Dashboard
