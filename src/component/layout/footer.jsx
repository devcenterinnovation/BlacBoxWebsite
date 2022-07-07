import {
  Box,
  Button,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"


const companyLinks = [
  { title: "About Us", to: "/" },
  { title: "Pricing", to: "/" },
  { title: "About Us ", to: "/" },
  { title: "Pricing", to: "/" },
]

const serviceLinks = [
  { title: "Integration", to: "/" },
  { title: "API", to: "/" },
  { title: "Support ", to: "/" },
  { title: "Developers Tool", to: "/" },
]

const resourceLinks = [
  { title: "Card Service", to: "/" },
  { title: "Developers Tool", to: "/" },
  { title: "Developers Tool", to: "/" },
  { title: "Developers Tool", to: "/" },
]

const contactLinks = [
  { title: "Address: 21 Nyesi Ibrahim Tella, Oral-Estate, Eleganza Bustop, Lekki - Epe Expy, Lagos ", icon: "/" },
  { title: " 01 630 4704", icon: "/" }
]


export default function AppFooter() {

  return (
    <Box bgcolor={"#111111"} color="white">
      <Box py={{xs:"24px", sm:"38px", md:"54px"}}>
        <Box bgcolor={"#FFFFFF"} color="black" maxWidth={{xs:"326px", sm:"521px", md:"738px"}}  pr={{xs:"45px", sm:"72px", md:"102px"}}  marginX="auto"  pl={{xs:"19px", sm:"31px", md:"43px"}} py={{xs:"14px", sm:"22px", md:"32px"}}>
          <Stack direction={"row"} spacing={{xs:"29px", sm:"47px", md:"66px"}}>
            <Box maxWidth={{xs:"138px", sm:"220px", md:"312px"}}>
              <Typography fontSize={{md:"15px"}}> CTA Sentence</Typography>
              <Typography>Start building your fintech product with seamless APIs. Get started</Typography>
               </Box>
               <Box height={{xs:"37px", sm:"59px", md:"83px"}} width={{xs:"95px", sm:"151px", md:"215px"}}>
                <Button  sx={{width:"100%",height:"100%"}} variant="contained" color="secondary"> Sign Up </Button>
               </Box>
          </Stack>
        </Box>

      </Box>
      <Box>
        <Divider sx={{width:"100%",bgcolor:"white"}} />
      </Box>
      <Box minHeight={{xs:"147px", sm:"235px", md:"333px"}} px={{xs:"27px", sm:"44px", md:"62px"}} pt={{xs:"26px", sm:"41px", md:"59px"}}>
      <Grid container  justifyContent={{xs:"center",md:"flex-start"}}>
        <Grid item xs={12} sm={6} md={3}>
          <Stack>

          </Stack>
          </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Company</Typography>
          <List disablePadding dense>
            {companyLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Services</Typography>
          <List disablePadding dense>
            {serviceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Resources</Typography>
          <List disablePadding dense>
            {resourceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={12} sm={6} md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Get in touch: </Typography>
          <List disablePadding dense>
            {contactLinks.map((item) => (
              <ListItem disableGutters href={item.to}>

                <ListItemText> {item.title} </ListItemText>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>

      </Box>
    </Box>
  )
}
