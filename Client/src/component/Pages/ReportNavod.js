import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Navbar from '../Navbarnavod';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';




 
  const useStyles = makeStyles({
  
    
    bx:{
      marginLeft:300,
      marginTop:50,
      maxWidth: 1150,
      textAlign:'left',
     
    },
    typ:{
      color:'black',
    
    },
    dt:{
        
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
      
    useEffect(()=>{
        function getstocks(){
        axios.get("http://localhost:5000/stock/").then((res)=>{
          
            setRows(res.data);
          
        }).catch((err)=> { 
          alert(err.message);
        })
      }
      getstocks()
    
      },[])
    
    const columns = [
        
        {
            field: 'productID',
            headerName: 'Product id',
            width: 180,
            editable: true,
          },
       
        {
          field: 'ProductName',
          headerName: 'Product name',
          width: 200,
          editable: true,
        },
        {
          field: 'Amount',
          headerName: 'Available Amount (Kg)',
          width: 255,
          
        },
        {
          field: 'SectionNo',
          headerName: 'Section',
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
        
        </Toolbar>
      </AppBar>
    </Box>
    <div style={{ height: 400, width: '55%',marginLeft:400,marginTop:100,backgroundColor:'#7bb9a2' }}>
    {rows && (
    <DataGrid className={classes.dt}
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

