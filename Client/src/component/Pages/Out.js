import React,{useState} from 'react'


import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import './In.css'
import Button from '@material-ui/core/Button';
import Confirmationbox from './Confirmationbox';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Navbar from '../Navbarnavod';



const useStyles = makeStyles((theme) => ({
    root: {
 
      marginLeft:230
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  


const Out = ({}) => {
    const classes = useStyles();
    const[productID,setproductID] = useState('')
    const[Amount,setAmount] = useState('')
    const[Date,setDate] = useState('')
    const[Note,setNote] = useState('')
    const [open, setOpen] = React.useState(false);
    

    const onSubmit =(e) =>{
        e.preventDefault()
        setOpen(true);
       
        console.log(productID,Amount,Date,Note)
        
    
    }
    
              
    
    return (
        <div>
            <Navbar/>
            <Box display="flex"style={{width:"1200px"}}    marginLeft="230px" padding="2rem"  flexDirection="row" bgcolor="background.paper" >
            <Box p={3}  marginBottom="40px"  bgcolor="grey.300"> 
            <div className='form-content-left'><img style={{width:"1000px",height:"670px",marginTop:"50px"}} className='image-container' src="/teah.jpg" alt="Logo" /></div> 
             </Box>
             <Box p={3} width="1000px"  marginBottom="40px" bgcolor="grey.300">   
        <form  className='add-form' onSubmit={onSubmit} >
            
            <div className='title'>Stock Out </div>
            <div className='formcontrol'>
                 
                    <label className='form-label'>
                        Product ID

                    </label>
                    <input
                        type='text'
                        name='productID'
                        className='form-input'
                        placeholder=' product ID'
                        value={productID}
                        onChange={(e) => setproductID(e.target.value)}
                        required
                    
                    />
                  
            </div>
                <div className='formnote'>    
                     <label className='form-label'>
                        Amount

                    </label>
                 
                    <TextField
                         name='Amount'
                         type='number'
                         id="outlined-start-adornment"
                         style={{marginLeft: '7px'}}
                         
                        InputProps={{
                            

                         endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                         }}
                        fullWidth
                        variant="outlined"
                        
                        value={Amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required    
                     />
                   </div>    
                 
                
                <div className='formcontrol'>                    
                    <label className='form-label'>
                        Date
                    </label>
                    <input
                        type='date'
                        name='Date'
                        value={Date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    
                    />
                   

                </div>
                <div className='formnote'>                    
                     <label className='form-label'>
                        Special Note

                    </label>
                  
                     <TextField
                         id="outlined-multiline-static"
                         value={Note}
                         placeholder='Note'
                         multiline
                         fullWidth
                         rows={5}
                         defaultValue="Default Value"
                         variant="outlined"
                         onChange={(e) => setNote(e.target.value)}
                    />
                   
                </div>
               
                <Button fullWidth="true" type='submit' fullwidth="true" variant="contained" color="primary"> 
                            OK
                </Button>
            </form>
            </Box>
                    
            <Confirmationbox open={open} handleClose={()=>setOpen(false)} />
            </Box>
            </div>             
    )
}

export default Out