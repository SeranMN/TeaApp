import React,{useState,useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  color:'black',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    color:'black',
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

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
  

  const useStyles = makeStyles({
    table: {
     
     
     
     
      
    },
  });

  

const StockoutHistory = () => {
    const classes = useStyles();
    const [show, setShow] = useState(false);

    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [stockouts,setstockouts]=useState([])
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(()=>{
      if(!searchTerm){
        function getstocksouts(){
        axios.get("http://localhost:5000/stockout/").then((res)=>{
          
          setstockouts(res.data);
        }).catch((err)=> { 
          alert(err.message);
        })
      }
      getstocksouts()
    }
      },[stockouts,searchTerm])

      const findItems = (itemName) => {
        if (itemName) {
          axios.get(`http://localhost:5000/stockout/search/${itemName}`)
    
            .then((res) => {
              let arr = res.data;
              let i;
              let list = [];
              for (i = 0; i < arr.length; i++) {
                list.push(arr[i]);
              }
               setstockouts(list);
            })
            .catch((err) => {
              console.log(err);
            });
         
        }
      };


       
      const handleChange = (event) => {
        findItems(event.target.value);
        setSearchTerm(event.target.value);
       
      };
     

     
    
    
     
      
      
    return (
        <div>
            <Button onClick={handleShow} style={{marginLeft:"1230px",marginTop:"30px"}}  type='submit'  variant="contained" color="primary"> 
                            View History
                
            </Button>

            <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{marginLeft:"140px"}}>Stock Out History</Modal.Title>
                
                </Modal.Header>
                <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                  <StyledInputBase
                      placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    value={searchTerm}
                    onChange={handleChange}
                   
                  />
                  </Search>
               
                <Modal.Body>
                <Table  className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Product Name</StyledTableCell>
                            <StyledTableCell align="center"> Amount (Kg)</StyledTableCell>
                            <StyledTableCell align="center">Date&nbsp;</StyledTableCell>
                            <StyledTableCell align="center">Note&nbsp;</StyledTableCell>
          
                        </TableRow>
                    </TableHead>
                <TableBody>
                    {stockouts.map((stockout) => (
                    <StyledTableRow key={stockout.productID}>
                    <StyledTableCell component="th" scope="row">
                        {stockout.productName}
                    </StyledTableCell>
                    <StyledTableCell align="center">{stockout.Amount}</StyledTableCell>
                    <StyledTableCell align="center">{stockout.Date}</StyledTableCell>
                    <StyledTableCell align="center">{stockout.SpecialNote}</StyledTableCell>
              
                    </StyledTableRow>
                     ))}
                </TableBody>
                </Table>

                </Modal.Body>


            </Modal>
        </div>
    )
}

export default StockoutHistory
