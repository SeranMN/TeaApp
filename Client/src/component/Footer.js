import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import {  AiOutlineYoutube } from "react-icons/ai";
import {  ImLocation } from "react-icons/im";
import {  FaWhatsappSquare } from "react-icons/fa";
import {  MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <Box
        style={{padding:"0px"}}
        px={{ xs: 3, sm: 10 }}
        py={{ xs: 5, sm: 10 }}
        // bgcolor="text.secondary"
        color="white"
      >
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
              <Box><div style={{color:"black",fontWeight:"bold"}}>Gangasiri Tea</div></Box>
              <Box style={{marginTop:"5px"}}>
                <Link href="/" color="primary">
                  Home
                </Link>
              </Box>
              <Box>
                <Link href="/" color="primary">
                  Support
                </Link>
              </Box>
              <Box>
                <Link href="/" color="primary">
                  Privacy
                </Link>
              </Box>
              <Box>
                <Link href="/" color="primary">
                  Privacy
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{color:"black",fontWeight:"bold"}}>Share & Follow us On</Box>
              <div style={{marginLeft:"55px"}}>
              <Box style={{marginTop:"5px"}}>
                
                    <AiOutlineFacebook size={30} color={"#4267B2"}/>
                
              </Box>
              <Box> 
                <AiOutlineTwitter size={30} color={"#1DA1F2"}/>
              </Box>
              <Box>
                <AiOutlineInstagram size={30} color={"#E1306C"}/>
              </Box>
              <Box>
                < AiOutlineYoutube size={30} color={"#FF0000"}/>
              </Box>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box style={{color:"black",fontWeight:"bold"}} >Contact Us On</Box>
              <Box style={{marginTop:"5px"}}>
                    <AiFillPhone size={30} color={"#4267B2"}  />
              </Box>
              <Box>
                    <ImLocation size={30} color={"#1DA1F2"} />
              </Box>
              <Box>
                    <FaWhatsappSquare size={30} color={"#25D366"} />
              </Box>
              <Box>
                    <  MdEmail size={30} color={"#FF0000"}/>
              </Box>
              
              
            </Grid>
          </Grid>
          <Box style={{color:"black"}} textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}>
            Material UI Workshop &reg; {new Date().getFullYear()}
          </Box>
        </Container>
      </Box>
    </footer>
  )
}

export default Footer