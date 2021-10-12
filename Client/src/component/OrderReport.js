import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from './NavbarAshen'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';



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
      marginLeft:300,
      marginTop:50,
      maxWidth: 1150,
      textAlign:'left',
     
    },
    typ:{
      color:'black',
    
    }
   
    
   
  });
  function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  
function Report() {
    const classes = useStyles(); 
    const[products,setproducts]=useState([]);
    const [rows, setRows] = useState();
      
    const [orders, setOrders] = useState([]);

    // useEffect(()=>{
    //     function getstocks(){
    //     axios.get("http://localhost:5000/stock/").then((res)=>{
          
    //         setRows(res.data);
          
    //     }).catch((err)=> { 
    //       alert(err.message);
    //     })
    //   }
    //   getstocks()
    
    //   },[])
    useEffect(()=>{

      function getOrders(){
  
      axios.get("http://localhost:5000/order/").then((res)=>{
  
        
  
        setRows(res.data);
  
      }).catch((err)=> { 
  
        alert(err.message);
      })
    }
    getOrders()

    },[])

    
    const columns = [
      
      {
        field: 'productName',
        headerName: 'Product Name',
        width: 200,
        editable: true,
      },
        {
            field: 'firstName',
            headerName: 'First Name',
            width: 200,
            editable: true,
          },
       
        {
          field: 'lastName',
          headerName: 'Last Name',
          width: 200,
          editable: true,
        },
        {
          field: 'email',
          headerName: 'Email',
          width: 255,
          
        },
        {
          field: 'contactNo',
          headerName: 'Contact No.',
          width: 160,
          editable: true,
        },
        {
          field: 'address',
          headerName: 'Address',
          width: 160,
          editable: true,
        },
        {
          field: 'city',
          headerName: 'City',
          width: 160,
          editable: true,
        },
        {
          field: 'region',
          headerName: 'Region',
          width: 160,
          editable: true,
        },
        {
          field: 'postalCode',
          headerName: 'postalCode',
          width: 160,
          editable: true,
        },
        
        {
          field: 'quantity',
          headerName: 'Quantity',
          width: 160,
          editable: true,
        },
        {
          field: 'subTotal',
          headerName: 'Sub Total',
          width: 160,
          editable: true,
        },
        
        
      ];
    
    
    return (
        <div>
             <Navbar/>
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
           Report
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{ height: 400, width: '80%',marginLeft:300,marginTop:100 }}>
    {rows && (
    <DataGrid
    components={{
        Toolbar: CustomToolbar,
      }}
         getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    )}
      </div>
        </div>
    )
}

export default Report
