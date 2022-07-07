import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"

const serviceList = [
  "Bank Services","KYC Verification","Payments and Wallet API’s","OTP’s NOtification SERvices","Virtual account Services"
]

export default function ContactPage() {
  return (
    <Box>
      <Box mb={{xs:"14px", sm:"23px", md:"32px"}} mt={{xs:"57px", sm:"90px", md:"128px"}} pl={{xs:"28px", sm:"44px", md:"63px"}} pr={{xs:"16px", sm:"25px", md:"36px"}}>
        <Box>
        <Typography variant="h2" fontWeight={"616"}>Contact Us</Typography>
        <Box mt={{xs:"17px", sm:"27px", md:"39px"}}>
        <Stack direction={{xs:"column",md:"row"}} >
          <Box maxWidth={{xs:"140px", sm:"224px", md:"317px"}} mr={{xs:"18px", sm:"28px", md:"40px"}}>
            <Box sx={{}}>
                <Typography fontSize={{md:"19px"}} fontWeight="500"> Product and Service Support</Typography>
                <Typography mt={{xs:"3px", sm:"5px", md:"8px"}}>
                  {" "}
                  If you have any questions or need aid with services, please
                  contact us via email or phone..
                </Typography>
                <Button variant="contained" sx={{mt:{xs:"10px", sm:"16px", md:"23px"}}}>Go to help center</Button>
            </Box>
          </Box>
          <Box maxWidth={{xs:"140px", sm:"224px", md:"317px"}}>

            <Card>
              <CardContent>
                <Typography> Talk to a member of  our sales team</Typography>
                <Typography>Contact our sales team for more information on the worthiness and accessibility of our products.  </Typography>
                <Button>Sales team</Button>
              </CardContent>
            </Card>
          </Box>
        </Stack>
        </Box>
        </Box>

        <Box>

        </Box>
      </Box>

      <Box pl={{xs:"60px", sm:"95px", md:"135px"}} pt={{xs:"34px", sm:"54px", md:"77px"}} mt={{xs:"16px", sm:"25px", md:"36px"}}>
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
                    <ListItemText primaryTypographyProps={{fontSize:{md:"19px"},fontWeight:"500"}}> {item} </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box >
              <Box bgcolor={"#111111"} color={"white"} maxWidth={{xs:"253px", sm:"404px", md:"573px"}} minHeight={{xs:"228px", sm:"364px", md:"516px"}} pl={{xs:"25px", sm:"40px", md:"57px"}} pt={{xs:"11px", sm:"18px", md:"25px"}} pb={{xs:"17px", sm:"27px", md:"38px"}} pr={{xs:"22px", sm:"35px", md:"50px"}}>
                <Typography variant="h5" fontWeight={"600"}>Contact Form</Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>

        </Box>
      </Box>
    </Box>
  )
}
