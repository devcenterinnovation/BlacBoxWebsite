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
import { Link } from "react-router-dom"


const companyLinks = [
  { title: "About Us", to: "/about" },
  { title: "Pricing", to: "/" },
  { title: "About Us ", to: "/" },
  { title: "Pricing", to: "/" },
]

const serviceLinks = [
  { title: "Integration", to: "/" },
  { title: "API", to: "/doc" },
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
      <Box py={{xs:"24px", sm:"38px", md:"54px"}} px={"30px"}>
        <Box bgcolor={"#FFFFFF"} color="black" maxWidth={{xs:"326px", sm:"521px", md:"738px"}}  pr={{xs:"45px", sm:"72px", md:"102px"}}  marginX="auto"  pl={{xs:"19px", sm:"31px", md:"43px"}} py={{xs:"14px", sm:"22px", md:"32px"}}>
          <Stack direction={{xs:"column",sm:"row"}} spacing={{xs:"29px", sm:"47px", md:"66px"}}>
            <Box maxWidth={{sm:"220px", md:"312px"}}>
              {/* <Typography fontSize={{md:"15px"}}> CTA Sentence</Typography> */}
              <Typography  textAlign={{xs:"center",sm:"left"}} >Start building your fintech product with seamless APIs. Get started</Typography>
               </Box>
               <Box height={{xs:"64px", sm:"59px", md:"83px"}} textAlign={{xs:"center",sm:"left"}} >
                 <Link to="/signup" style={{textDecoration: "none"}}>
                   
                <Button  sx={{width:"100%",height:"100%",maxWidth:{xs:"200px", sm:"151px", md:"215px"}}} variant="contained" color="secondary"> Sign Up </Button>
                 </Link>
               </Box>
          </Stack>
        </Box>

      </Box>
      <Box>
        <Divider sx={{width:"100%",bgcolor:"white"}} />
      </Box>
      <Box minHeight={{xs:"147px", sm:"235px", md:"333px"}} px={{xs:"27px", sm:"44px", md:"62px"}} pt={{xs:"26px", sm:"41px", md:"59px"}}>
      <Grid container  justifyContent={{xs:"center",md:"flex-start"}} columnSpacing={"100px"} rowSpacing="50px">
        <Grid item xs={6}  md={3}>
          <Stack>

          </Stack>
          </Grid>
        <Grid item xs={6}  md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Company</Typography>
          <List disablePadding dense>
            {companyLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}  md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Services</Typography>
          <List disablePadding dense>
            {serviceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={6}  md={2}>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Resources</Typography>
          <List disablePadding dense>
            {resourceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item xs={8} md={2} textAlign={{xs:"center",md:"left"}}>
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
