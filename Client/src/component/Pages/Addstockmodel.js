import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Addstock from './Addstock'
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import EditIcon from '@material-ui/icons/Edit';
import { FormGroup } from '@material-ui/core';
import axios from "axios";
import DeleteIcon from '@material-ui/icons/Delete';
import Confirmationbox from './Confirmationbox';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block',
        marginLeft: 190,

    },
    btn1: {


    },
    lbl: {
        color: 'black',
        marginTop: 10,
        marginBottom: 20,
        display: 'block',
        marginLeft: 15
    },
    datetext: {
        width: 50
    },


})

const Addstockmodel = ({ product, deleteProduct }) => {


    const classes = useStyles()

    const [productID, setproductID] = useState('')
    const [productName, setproductName] = useState('')
    const [sectionNo, setsectionNo] = useState('')
    const [date, setdate] = useState('')
    const [amount, setAmount] = useState('')
    const [pid, setPID] = useState('')
    const [confirm, setConfirm] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);


    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = () => {
        setOpen1(true);
    };

    const handleClose1 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen1(false);
    };

    const onsubmit = (e) => {
        e.preventDefault()


        console.log(productID, productName, sectionNo, date)

        const newstock = {
            "productID": productID,
            "ProductName": productName,
            "SectionNo": sectionNo,
            "Date": date,
            "Amount": 0
        }
        const newstock1 = {
            "productID": productID,
            "ProductName": productName,
            "SectionNo": sectionNo,
            "Date": date,
            "Amount": amount
        }

        if (!product) {

            axios.post("http://localhost:5000/stock/add", newstock).then((res) => {
                if (res.data.message) {
                    alert(res.data.message)

                }
                else {
                    handleClick()
                }

                setproductID("");
                setproductName("");
                setsectionNo("");
                setdate("");
                handleClose()
            }).catch((err) => {
                console.log(err)

            })
        }
        else if (product) {

            console.log(pid)
            console.log(newstock)
            axios.put(`http://localhost:5000/stock/update/${pid}`, newstock1).then(() =>
                handleClick()).catch((err) => alert(err))
            handleClose()

        }


    }
    useEffect(() => {
        console.log(product)
        if (product) {
            setPID(product._id)
            setproductID(product.productID)
            setproductName(product.ProductName)
            setAmount(product.Amount)
            console.log(product.Amount)
            setsectionNo(product.SectionNo)
            setdate(product.Date)
        }
    }, [])




    return (

        <>

            <Snackbar open={open1} autoHideDuration={3000} onClose={handleClose1} anchorOrigin={{
                vertical: "top",
                horizontal: "center"
            }}>

                <Alert onClose={handleClose1} severity="success" sx={{ width: '100%' }}>
                    {product ?
                        `Sucessfully Edited!`
                        :
                        `Sucessfully Added!`
                    }
                </Alert>




            </Snackbar>

            <Confirmationbox product={product} open={open} handleClose={() => setOpen(false)} deleteProduct={deleteProduct} />
            {product ?
                <Button variant="contained" id="edt" size="small" color="primary" startIcon={<EditIcon />} onClick={handleShow}>
                    Edit
                </Button>



                :

                <div style={{ display: "flex", justifyContent: 'center', marginLeft: "170px", marginTop: "30px", marginBottom: "30px" }}>
                    <Button style={{ position: "absolute", marginTop: "10px" }} className={classes.btn1} variant="contained" color="primary" onClick={handleShow}>
                        Add New Product
                    </Button>
                </div>

            }
            {product &&
                <Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />} onClick={() => { setOpen(true) }}   >
                    Delete
                </Button>}


            <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {product ?
                        <Modal.Title>Edit</Modal.Title>
                        :
                        <Modal.Title>Add New Product</Modal.Title>
                    }
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={onsubmit} >
                        <FormControl>
                            <InputLabel className={classes.lbl}>Product ID </InputLabel>

                            {product ?
                                <TextField
                                    id="outlined-helperText"
                                    variant="outlined"
                                    disabled
                                    className={classes.field}
                                    required
                                    value={productID}
                                    onChange={(e) => setproductID(e.target.value)}
                                />

                                :

                                <TextField
                                    id="outlined-helperText"
                                    variant="outlined"
                                    className={classes.field}
                                    required
                                    value={productID}
                                    onChange={(e) => setproductID(e.target.value)}
                                />
                            }
                        </FormControl>

                        <FormControl>
                            <InputLabel className={classes.lbl}>Product Name</InputLabel>
                            <TextField
                                id="outlined-helperText"
                                variant="outlined"
                                className={classes.field}
                                required
                                value={productName}
                                onChange={(e) => setproductName(e.target.value)}
                            />
                        </FormControl>

                        <FormControl>
                            <InputLabel className={classes.lbl}>Date</InputLabel>
                            <TextField className={classes.datetext}
                                type="date"
                                id="outlined-helperText"
                                variant="outlined"
                                className={classes.field}
                                required
                                value={date}
                                onChange={(e) => setdate(e.target.value)}
                            />
                        </FormControl>
                        <FormControl>
                            <InputLabel className={classes.lbl}>Section No</InputLabel>
                            <TextField
                                id="outlined-helperText"

                                variant="outlined"
                                className={classes.field}
                                required
                                value={sectionNo}
                                onChange={(e) => setsectionNo(e.target.value)}
                            />
                        </FormControl>




                        <Button fullWidth style={{ marginTop: "15px" }} type='submit' variant="contained" color="secondary"   >
                            {product ?
                                "Edit"
                                :
                                "Add"
                            }
                        </Button>



                    </form>
                </Modal.Body>


            </Modal>




        </>
    )
}


export default Addstockmodel