import React, { useState, useEffect } from 'react'
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
import axios from 'axios';
import StockinHistory from './StockinHistory';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


const useStyles = makeStyles((theme) => ({
  root: {

    marginLeft: 230
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bx: {
    marginLeft: 300,
    marginTop: 50,
    maxWidth: 1150,
    textAlign: 'left',

  },
  typ: {
    color: 'black',

  }
}));



const In = ({ }) => {
  const classes = useStyles();
  const [productins, setproductins] = useState([])
  const [productName, setProductName] = useState()
  const [Amount, setAmount] = useState('')
  const [Date, setDate] = useState('')
  const [Note, setNote] = useState('')
  const [open, setOpen] = React.useState(false);
  const [pid, setpid] = useState();


  const onSubmit = (e) => {
    e.preventDefault()
    setOpen(true);

    console.log(productName, Amount, Date, Note)





  }
  useEffect(() => {

    function getstocks() {
      axios.get("http://localhost:5000/stock/").then((res) => {

        setproductins(res.data);
      }).catch((err) => {
        alert(err.message);
        console.log(err.message);
      })
    }
    getstocks()

  }, [])






  return (
    <div>
      <Navbar />
      <StockinHistory />
      <Box className={classes.bx} sx={{ flexGrow: 1 }}>
        <AppBar style={{ backgroundColor: "#e4e4e4" }} position="static" className={classes.ap}>
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
              Stock In
            </Typography>

          </Toolbar>
        </AppBar>
      </Box>


      <Box style display="flex" style={{ width: "1200px" }} marginLeft="270px" padding="2rem" flexDirection="row" >
        <Box p={3} marginBottom="40px" bgcolor="grey.300">
          <div className='form-content-left'><img style={{ width: "1000px", height: "670px", marginTop: "50px" }} className='image-container' src="/teah.jpg" alt="Logo" /></div>
        </Box>
        <Box p={3} width="1000px" marginBottom="40px" bgcolor="grey.300">
          <form className='add-form' onSubmit={onSubmit} >

            <div className='title'>Stock In </div>
            <div className='formcontrol'>

              <FormControl sx={{ m: 1, minWidth: 450 }}>
                <label className='form-label'>
                  Product Name

                </label>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={productName}
                  label="ProductName"
                  required
                  onChange={(e) => setProductName(e.target.value)}
                >

                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {productins.map((productin) =>
                    <MenuItem value={productin.ProductName} >{productin.ProductName}</MenuItem>
                  )}
                </Select>

              </FormControl>

            </div>
            <div className='formnote'>
              <label className='form-label'>
                Amount

              </label>

              <TextField
                name='Amount'
                type='number'

                id="outlined-start-adornment"
                style={{ marginLeft: '7px' }}

                InputProps={{
                  inputProps: { min: 1 },

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

        <Confirmationbox open={open} handleClose={() => setOpen(false)} productName={productName} Amount={Amount} Date={Date} Note={Note} setProductName={setProductName} setAmount={setAmount} setDate={setDate} setNote={setNote} />
      </Box>
    </div>
  )
}

export default In
