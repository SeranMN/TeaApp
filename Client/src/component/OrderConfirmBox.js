import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
  
      maxWidth: 400,
      marginBottom: 20,
  
    },
  
  }));


const OrderConfirmBox = ({submit1,handleClose2,open2,order}) => {

    const classes = useStyles();

    const onClickDelete = (order) => {

        submit1(order);
        handleClose2()
    
      }

    return (
        <div>

    

<Dialog classes={{

paper: classes.dialog

}}

fullWidth

open={open2}

onClose={handleClose2}

aria-labelledby="alert-dialog-title"

aria-describedby="alert-dialog-description"

>

<DialogTitle id="customized-dialog-title">{"Confirm to submit"}</DialogTitle>

<DialogContent dividers color="black">

  <DialogContentText id="alert-dialog-description" color="black">
    Are you sure to do this?
  </DialogContentText>

</DialogContent>

<DialogActions style={{ paddingTop: "15px" }}>

  <Button onClick={handleClose2} color="primary" variant="outlined">
    No
  </Button>

  

    <Button onClick={() => onClickDelete(order)} color="secondary" variant="outlined" autoFocus>
      Yes
    </Button> 
    

  

</DialogActions>
</Dialog>
            
        </div>
    )
}

export default OrderConfirmBox
