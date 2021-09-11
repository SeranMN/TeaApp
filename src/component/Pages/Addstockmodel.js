import React,{useState,useEffect} from 'react'
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



    const useStyles = makeStyles({
        field:{
            marginTop:20,
            marginBottom:20,
            display:'block',
            marginLeft:190,
           
        },
        btn1:{
            
              
        },
        lbl:{
            color:'black',
            marginTop:10,
            marginBottom:20,
            display:'block',
            marginLeft:15
        },
        datetext:{
            width:50
        },
       
       
    })
   
  const Addstockmodel = ({product}) => {
        

        const classes=useStyles()
        
        const[productID,setproductID]=useState('')
        const[productName,setproductName]=useState('')
        const[sectionNo,setsectionNo]=useState('')
        const[amount,setamount]=useState('')
        const[date,setdate]=useState('')
        
        const [show, setShow] = useState(false);
  
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        const onsubmit =(e) =>{
            e.preventDefault()

        console.log(productID,productName,sectionNo,amount,date)

        }
        useEffect(() => {
            console.log(product)
            if(product){
                setproductID(product.productID) 
                setproductName(product.productName)
                setsectionNo(product.sectinNo)
                setdate(product.date)
             }
        }, [])
    return (

        <>

           {product? <Button variant="contained" id="edt" size="small" color="primary" startIcon={<EditIcon />} onClick={handleShow}>
                Edit
            </Button>
            :
          <center>
            <Button style={{position:"absolute",marginTop:"10px"}} className={classes.btn1}   variant="contained" color="primary"onClick={handleShow}>
            Add New Stock
            </Button></center>}
            
       <Modal dialogClassName="modal-90w" show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    {product?
                    <Modal.Title>Edit</Modal.Title>
                    :
                    <Modal.Title>Add New Stock</Modal.Title>
                    }                 
                </Modal.Header>
                <Modal.Body>
                <form onSubmit={onsubmit} >
                    <FormControl>
                    <InputLabel className={classes.lbl}>Product ID </InputLabel>
                    
                    <TextField
                        id="outlined-helperText"
                        variant="outlined"
                        className={classes.field}
                        required
                        value={productID}
                        onChange ={(e) => setproductID(e.target.value)}
                    />
                    </FormControl>

                    <FormControl>
                     <InputLabel className={classes.lbl}>Product Name</InputLabel>
                    <TextField
                        id="outlined-helperText"
                        variant="outlined"
                        className={classes.field}
                        required
                        value={productName}
                        onChange={(e) =>setproductName(e.target.value)}
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
                        onChange={(e) =>setdate(e.target.value)}
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
                        onChange={(e) =>setsectionNo(e.target.value)}
                    />
                    </FormControl>
                    { !product&&
                        
                   
                    <FormControl>
                      
                    <InputLabel className={classes.lbl}>Initial stock Amount</InputLabel>
                    <TextField
                        id="outlined-helperText"
                        type="number"
                        variant="outlined"
                        className={classes.field}
                        required
                        InputProps={{
                            endAdornment: <InputAdornment position="end">Kg</InputAdornment>,
                        }}
                        value={amount}
                        onChange={(e) => setamount(e.target.value)}
                    />
                    </FormControl>
  }
                   
                    
                      <center> <Button fullWidth style={{marginTop:"15px"}}  type='submit' variant="contained" color="secondary"> 
                            Add
                        </Button></center>
                        </form>
                </Modal.Body>

               
            </Modal>
                    
                        
        </>
    )
}
 

export default Addstockmodel