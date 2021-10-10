import React,{useState} from 'react'
import Addstockmodel from './Addstockmodel';
import Card1 from './Card1';
import Button from '@material-ui/core/Button';
import Navbar from '../Navbarnavod';
import { flexbox } from '@mui/system';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { withStyles, makeStyles } from '@material-ui/core/styles';




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

    
  const Addstock = ({}) => {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");

     

       
    return (

        <>
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
            marginLeft="30px"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
           Stock Details
          </Typography>
        
        </Toolbar>
      </AppBar>
    </Box>
              
            <Addstockmodel />
             <Card1 />
           
                    
                        
        </>
    )
}
 

export default Addstock
