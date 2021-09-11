import {React,useState} from 'react'
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



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    marginBottom: 20,
    
  },

 
}));

const Card1 = ({handleClose,handleShow,setShow,show})=> {
  const classes = useStyles();
  const[products,setproducts]=useState([
    {productID : 'pr001',
     productName:'Green tea',
     sectinNo :'A1',
     Initialamount:'12',
     Date:'2021-09-14'
    },
    {productID : 'pr002',
    productName:'black tea',
    sectinNo :'B1',
    Initialamount:'20',
    Date:'2021-09-14'
   },
   {productID : 'pr003',
   productName:'White tea',
   sectinNo :'c1',
   Initialamount:'32',
   Date:'2021-09-14'
  },
  {productID : 'pr003',
  productName:'White tea',
  sectinNo :'c1',
  Initialamount:'32',
  Date:'2021-09-14'
 }, {productID : 'pr003',
 productName:'White tea',
 sectinNo :'c1',
 Initialamount:'32',
 Date:'2021-09-14'
},


])
  return (
    <>
  
    {/* <div   style={{ display:"flex",marginLeft:"250px",padding:"3rem",flexWrap:"wrap"}}  >     */}
    <Box display="flex" flexWrap="wrap" marginLeft="260px" padding="3rem"  flexDirection="row" bgcolor="background.paper" >
    {products.map((product)=>


    // <div  style={{ width: '400px',marginBottom:"25px",flexBasis:"30%",display:"flex" }}  >    

   
     
     <Box p={3} m={1} marginBottom="40px" marginLeft="40px" bgcolor="grey.300">
        
        
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Tea"
          height="140"
          image="./product.jpg"
          title={product.productName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         
           
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          <List style={{color:"black"}}>
          <ListItem> Product ID : {product.productID}</ListItem>
          <ListItem>  Product Name : {product.productName}</ListItem>
          <ListItem>  Section No : {product.sectinNo}</ListItem>
          <ListItem> Date : {product.Date}</ListItem>
          </List>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        
       <Addstockmodel product={product}  />
        <Button variant="contained" size="small" color="secondary" startIcon={<DeleteIcon />}>
          Delete
        </Button>
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