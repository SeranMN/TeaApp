import React,{useState} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import { useEffect } from 'react';
import CardGroup from 'react-bootstrap/CardGroup'
import Box from '@material-ui/core/Box';
import EditOrder from './EditOrder';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';
import Header from './Header';
import Footer from './Footer';
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import OrderConfirmBox from './OrderConfirmBox';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   });


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

const useStyles = makeStyles({
  
    
  bx:{
    marginLeft:150,
    marginTop:50,
    maxWidth: 1200,
    textAlign:'left',
   
  },
  typ:{
    color:'black',
  
  }
 
  
 
});

const OrderDetails = () => {

  const classes = useStyles(); 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [orders, setOrders] = useState([]);

  const [number, setNumber] = useState(1);

  const [orderdetails, setOrderDetails] = useState([])

  const [searchTerm, setSearchTerm] = useState("");

  const [open, setOpen] = React.useState(false);

  const [open2, setOpen2] = React.useState(false);

    const handleClick1 = () => {
      setOpen(true);
    };
  
    const handleClose1 = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
    
  
  
  useEffect(()=>{
    if(!searchTerm){
    function getOrders(){

    axios.get("http://localhost:5000/order/").then((res)=>{

      

      setOrders(res.data);

    }).catch((err)=> { 

      alert(err.message);

    })

  }

  getOrders()
  }

  },[orders,searchTerm])

  const findItems = (itemName) => {

    if (itemName) {

      axios.get(`http://localhost:5000/order/search/${itemName}`)



        .then((res) => {

          let arr = res.data;

          let i;

          let list = [];

          for (i = 0; i < arr.length; i++) {

            list.push(arr[i]);

          }

           setOrders(list);

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
  

  const submit1 = (order) => {
    console.log(order)
          axios.delete(`http://localhost:5000/order/delete/${order._id}`).then(() => 
            
          handleClick1()).catch((err) => alert(err))
            
        }
          // console.log(product._id)
        
      
  // useEffect(() => {
  //  console.log(order)
  // }, [])
 
  return (
    <div>
      <Header/>

      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
            vertical: "top",
            horizontal: "center"
        }}>
           <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          SuccesFully Deleted!
        </Alert>
        </Snackbar>
        

      <Box className={classes.bx}   sx={{ flexGrow: 1 }}>
      <AppBar style={{backgroundColor:"#e4e4e4"}} position="static" className={classes.ap}>
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
            marginLeft="20px"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Orders
          </Typography>
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
        </Toolbar>
      </AppBar>
    </Box>

      {orders.map((order) => 
      
      <Card className="text-center" style={{marginLeft:"150px",marginBottom:"50px",marginTop:"40px",marginRight:"30px",maxWidth:"1200px", backgroundColor: "#e0e0e0"}}>
        
       
        
      <Card.Header>Order:{order._id} </Card.Header>
      
    <Card.Body >
    <div style={{display:"flex", justifyContent:"flex-end"}}>
            <div  style={
                                      order.status === "Approved"
                                        ? { borderRight: "15px solid #0cce26",paddingRight: "8px" }
                                        : order.status == "Declined"
                                        ? { borderRight: "15px solid red",paddingRight: "8px" }
                                        : { borderRight: "15px solid orange",paddingRight: "8px" }
                                    }>{order.status} </div>
            </div>


    <Box display="flex" justifyContent="center" m={1} p={1}  width="100%"> 
    
    <Box p={1}  padding="3rem" bgcolor="grey.300" >
    <Card.Img style={{ width: '18rem' }} variant="top" src="/blacktea.jpg" />
    </Box>
    
    <Box p={1} display="flex" justifyContent="space-evenly" bgcolor="grey.300" width="60%"  >
    <Box border="solid" padding="50px">                             
    <Card.Title> <h4>Order details</h4> </Card.Title>
    <Card.Text> 
    <h6> ProductName:{order.productName}</h6> 
    <h6> Quantity:{order.quantity}</h6> <h6>  Total Price:Rs.{order.subTotal} </h6>
      </Card.Text>
      </Box>
      <Box border="solid" padding="50px">
    <Card.Title> <h4>Shipping details</h4> </Card.Title>
    
    <Card.Text>
      <h6> {order.firstName} {order.lastName} </h6>
      <h6> {order.email} </h6>
      <h6> {order.address} </h6>
      <h6> +94{order.contactNo} </h6>
      <h6> {order.city} </h6>
      <h6> {order.region} </h6>
      <h6> {order.postalCode} </h6>
    
    </Card.Text>
    </Box>
    </Box>
    </Box>
    <Box  p={1} display="flex" justifyContent="space-between">
    <Box  p={1} display="flex"  >

    <Button variant="danger" onClick={() => {setOpen2(true)}}>
            Delete
          </Button>
    
          </Box>

          <Box  p={1} display="flex"  >
              <EditOrder order={order}/>
          </Box>
          </Box>

          <OrderConfirmBox open2={open2} handleClose2={()=>setOpen2(false)} submit1={submit1} order={order} />

  </Card.Body>
  
  <Card.Footer className="text-muted">2 days ago</Card.Footer>

  

</Card>

      )}
        <Footer/>
    </div>
  )
}

export default OrderDetails


