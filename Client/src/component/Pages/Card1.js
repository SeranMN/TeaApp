import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Addstock from './Addstock';
import Addstockmodel from './Addstockmodel';
import Box from '@material-ui/core/Box';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginBottom: 20,

  },


}));

const Card1 = ({ handleClose, handleShow, setShow, show }) => {
  const classes = useStyles();
  const [products, setproducts] = useState([]);
  const [open2, setOpen2] = useState(false);


  const handleClick1 = () => {
    setOpen2(true);
    console.log("sacsasc")

  };

  const handleClose2 = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen2(false);
  };






  useEffect(() => {

    function getstocks() {
      axios.get("http://localhost:5000/stock/").then((res) => {

        setproducts(res.data);
      }).catch((err) => {
        alert(err.message);
        console.log(err.message);
      })
    }
    getstocks()

  }, [products])



  const deleteProduct = (product) => {

    axios.delete(`http://localhost:5000/stock/delete/${product._id}`).then(() =>
      handleClick1()).catch((err) => alert(err))
    console.log(product._id)


  }





  return (
    <>
      <Snackbar open={open2} autoHideDuration={3000} onClose={handleClose2} anchorOrigin={{
        vertical: "top",
        horizontal: "center"
      }}>

        <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>

          Sucessfully Deleted!


        </Alert>




      </Snackbar>
      {/* <div   style={{ display:"flex",marginLeft:"250px",padding:"3rem",flexWrap:"wrap"}}  >     */}
      <Box display="flex" flexWrap="wrap" marginLeft="260px" padding="3rem" flexDirection="row" bgcolor="background.paper" >
        {products.map((product) =>


          // <div  style={{ width: '400px',marginBottom:"25px",flexBasis:"30%",display:"flex" }}  >    



          <Box p={3} m={1} marginBottom="40px" marginLeft="40px" bgcolor="grey.300">


            <Card className={classes.root}>

              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Tea"
                  height="140"
                  image={"/product.jpg"}
                  title={product.productName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">


                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    <List style={{ color: "black" }}>
                      <ListItem> Product ID : {product.productID}</ListItem>
                      <ListItem>  Product Name : {product.ProductName}</ListItem>
                      <ListItem>  Section No : {product.SectionNo}</ListItem>
                      <ListItem> Date : {product.Date}</ListItem>
                    </List>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>

                <Addstockmodel product={product} deleteProduct={deleteProduct} />

              </CardActions>
            </Card>
          </Box>


          // </div>

        )}
      </Box>
      {/* </div> */}

    </>
  );

}
export default Card1