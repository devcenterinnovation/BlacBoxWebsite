import { Box, Button, Grid, List, Stack, Typography,  ListItem,
  ListItemText } from "@mui/material"
import {BsSquareFill} from "react-icons/bs"
const serviceList = [
  "Bank Services","KYC Verification","Payments and Wallet API’s","OTP’s NOtification SERvices","Virtual account Services"
]

export default function DocumentationPage() {
  return (
    <Box>
      <Stack direction={{xs:"column",md:"row"}} container minHeight={{xs:"240px", sm:"383px", md:"543px"}} >
        <Box width={"100%"} maxWidth={{xs:"113px", sm:"180px", md:"255px"}}  alignSelf="flex-end">
          
        </Box>
        <Box maxWidth={{xs:"362px", sm:"578px", md:"820px"}} width="100%"  alignSelf="center" >
          <Typography variant="h2" fontWeight={"600"} textAlign="center">
            Well documented and <br/> easy-to-use APIs for
            <Typography textTransform={"uppercase"} component={"span"}variant="h2" fontWeight={"600"}  color="primary"> developers</Typography>
          </Typography>
          <Button variant="contained" sx={{mt:{xs:"15px", sm:"17px", md:"25px"}}}>Read API doc</Button>
        </Box>
      </Stack>

      <Box>
        <Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <List></List>
          </Grid>
        </Grid>
      </Box>
      <Box pl={{xs:"60px", sm:"95px", md:"135px"}} pt={{xs:"34px", sm:"54px", md:"77px"}} pb={{xs:"42px", sm:"68px", md:"96px"}} mt={{xs:"16px", sm:"25px", md:"36px"}}  borderRadius={{xs:"105px 0 0 0 ", sm:"168px 0 0 0 ", md:"239px 0 0 0 "}} 
      bgcolor="#F6F6F6">
        <Box   maxWidth={{xs:"277px", sm:"442px", md:"626px"}}>
        <Typography variant="h2" fontWeight={"616"}>Get  Started With Blacbox</Typography>
          <Typography fontWeight={{md:"19px"}} mt={{xs:"3px", sm:"5px", md:"7px"}}>
            As a business, we provide our customers with value by leveraging
            stable, practical, and high–quality API technology.
          </Typography>
        </Box>
        <Box mt={{xs:"33px", sm:"53px", md:"76px"}}>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <List>        
              {        
                serviceList.map((item)=>(
                  <ListItem key={item}>
                    <BsSquareFill />     
                    <ListItemText sx={{ml:{xs:"6px", sm:"10px", md:"15px"}}} primaryTypographyProps={{fontSize:{md:"19px"},fontWeight:"500"}}> {item} </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box >
              <Box bgcolor={"#111111"} color={"white"} maxWidth={{xs:"253px", sm:"404px", md:"573px"}} minHeight={{xs:"228px", sm:"364px", md:"516px"}} pl={{xs:"25px", sm:"40px", md:"57px"}} pt={{xs:"11px", sm:"18px", md:"25px"}} pb={{xs:"17px", sm:"27px", md:"38px"}} pr={{xs:"22px", sm:"35px", md:"50px"}}>
                <Typography variant="h5" fontWeight={"600"}>Contact Form</Typography>
                <Stack spacing={3}  px={2} >
        <div class="form__group">
                  <input
                    type="text"
                    id="fullname"
                    class="form__field"
                    placeholder="    Business Name"
                  />
                  <label for="name" class="form__label">
                   Business Name
                  </label>
                </div>
        <div class="form__group">
                  <input
                    type="email"
                    id="email"
                    class="form__field"
                    placeholder="Email"
                  />
                  <label for="Email" class="form__label">
                    Email
                  </label>
                </div>
        <div class="form__group">
                  <label for="Company Name" class="form__label">
                   Message
                  </label> 
                  <textarea
                    type="text"
                    id="company"
                    class="message"
                    placeholder=""
                  />
                </div>
      

    <Button sx={{backgroundColor:'#E2C703',fontSize:'16px',fontWeight:'600', color:'black',width:{md:'20vw',xs:'100%', sm:'40vw'}, padding:'20px', '&:hover':{backgroundColor:'#E2C703', color:'black' }}}>
      Send Message</Button>
        </Stack>

              </Box>
              
            </Box>

          </Grid>
        </Grid>

        </Box>
      </Box>

    </Box>
  )
}
