import React, { useState, useEffect } from 'react'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const useStyles = makeStyles({
  dialog: {
    position: 'absolute',
    left: 250,
    top: 300
  }
});




const Confirmationbox = ({ open, handleClose, product, deleteProduct, productName, Amount, Date, Note, setProductName, setAmount, setDate, setNote }) => {



  const classes = useStyles();
  const [open1, setOpen1] = React.useState(false);
  const [pid, setpid] = useState()
  const [existingAmount, setExistingAmount] = useState("")
  const handleClick1 = () => {
    setOpen1(true);
  };

  const handleClose1 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen1(false);
  };

  const handleclick = () => {

    const newstockin = {
      "productName": productName,
      "Amount": Amount,
      "Date": Date,
      "SpecialNote": Note
    }
    axios.post("http://localhost:5000/stockin/add", newstockin).then(() => {
      handleClick1()
      setProductName("");
      setAmount("");
      setDate("");
      setNote("");
    }).catch((err) => {
      alert(err)

    })
    handleClose()

    let total = (parseFloat(existingAmount) + parseFloat(Amount))
    console.log(total)
    const updatestock = {
      "Amount": total,

    }

    axios.put(`http://localhost:5000/stock/update/${pid}`, updatestock).then((res) =>
      console.log(res)).catch((err) => alert(err))
    handleClose()


  }
  useEffect(() => {
    console.log("abc", productName)
    if (productName) {
      async function getamount() {
        axios.get(`http://localhost:5000/stock/${productName}`).then((res) => {
          console.log(productName)
          setpid(res.data[0]._id)
          setExistingAmount(res.data[0].Amount)
          console.log(res.data)


        }).catch((err) => {
          alert(err)
        })
      }
      getamount()
    }
  }, [open])

  const onClickDelete = (product) => {
    deleteProduct(product);
    handleClose()
  }

  return (
    <>
      <Snackbar open={open1} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>

        <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
          `Sucessfully Added`
        </Alert>

      </Snackbar>


      <Dialog classes={{
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
        <DialogActions style={{ paddingTop: "15px" }}>
          <Button onClick={handleClose} color="primary" variant="outlined">
            No
          </Button>

          {product ?
            <Button onClick={() => onClickDelete(product)} color="secondary" variant="outlined" autoFocus>
              Yes
            </Button> :
            <Button onClick={handleclick} color="secondary" variant="outlined" autoFocus>
              Yes
            </Button>
          }
        </DialogActions>
      </Dialog>




    </>
  );
}
export default Confirmationbox
