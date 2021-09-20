import React,{useState,useEffect} from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles} from '@material-ui/core/styles';
import axios from "axios";


const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 250,
    top: 300
  }
});




const Confirmationbox=({open,handleClose,product,deleteProduct})=> {
 
  
  
        const classes =useStyles();
   
      
     


  return (
    <>
        
      <Dialog   classes={{
        paper: classes.dialog
      }}
 fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="customized-dialog-title">{"Confirm to submit"}</DialogTitle>
        <DialogContent dividers color="black">
        <DialogContentText id="alert-dialog-description" color="black">
           Are you sure to do this?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{paddingTop:"15px"}}>
          <Button onClick={handleClose} color="primary" variant="outlined">
           No
          </Button>
         
          {product?
          <Button onClick={()=>deleteProduct(product)} color="secondary" variant="outlined" autoFocus>
            Yes
          </Button>:
           <Button onClick={handleClose} color="secondary" variant="outlined" autoFocus>
           Yes
         </Button>
          }
        </DialogActions>
      </Dialog>
     
      

     
    </>
  );
}
export default Confirmationbox
