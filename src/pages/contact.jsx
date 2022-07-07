import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material"

const serviceList = [
  "Bank Services","KYC Verification","Payments and Wallet API’s","OTP’s NOtification SERvices","Virtual account Services"
]

export default function ContactPage() {
  return (
    <Box>
      <Box>
        <Typography>Contact Us</Typography>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography> Product and Service Support</Typography>
                <Typography>
                  {" "}
                  If you have any questions or need aid with services, please
                  contact us via email or phone..
                </Typography>
                <Button>Go to help center</Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography> Talk to a member of  our sales team</Typography>
                <Typography>Contact our sales team for more information on the worthiness and accessibility of our products.  </Typography>
                <Button>Sales team</Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box>
        <Box>
          <Typography>Get  Started With Blacbox</Typography>
          <Typography>
            As a business, we provide our customers with value by leveraging
            stable, practical, and high–quality API technology.
          </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <List>
              {
                serviceList.map((item)=>(
                  <ListItem key={item}>
                    <ListItemText> {item} </ListItemText>
                  </ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item xs={12} sm={6}>

          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
