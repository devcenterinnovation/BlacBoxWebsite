import {
  Box,
  Button,
  Grid,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import { GrFacebook, GrLinkedin, GrTwitter } from "react-icons/gr"
import { AiFillInstagram } from "react-icons/ai"
// import { Link } from "react-router-dom"
import logo from "../../images/general/logo.svg"

const companyLinks = [
  { title: "Customer", to: "/about" },
  { title: "Entreprise", to: "/" },
  { title: "Partners ", to: "/" },
  { title: "Jobs", to: "/" },
]

const serviceLinks = [
  { title: "Documentation", to: "/doc" },
  { title: "API References", to: "/" },
  { title: "API Status ", to: "/" },
  { title: "Pricing", to: "/" },
]

const resourceLinks = [
  { title: "Support", to: "/" },
  { title: "Contact", to: "/" },
  { title: "FAQ", to: "/" },
  { title: "Privacy & Terms", to: "/" },
]

const contactLinks = [
  {
    title:
      "Address: 21 Nyesi Ibrahim Tella, Oral-Estate, Eleganza Bustop, Lekki - Epe Expy, Lagos ",
    icon: "/",
  },
  { title: " 01 630 4704", icon: "/" },
]

export default function AppFooter() {
  return (
    <Box bgcolor={"#111111"} color="white">
      <Box py={{ xs: "24px", sm: "38px", md: "54px" }} px={"30px"}>
        <Box
          bgcolor={"#FFFFFF"}
          color="black"
          borderRadius="10px"
          maxWidth={{ xs: "326px", sm: "521px", md: "738px" }}
          pr={{ xs: "45px", sm: "72px", md: "102px" }}
          marginX="auto"
          pl={{ xs: "19px", sm: "31px", md: "43px" }}
          py={{ xs: "14px", sm: "22px", md: "32px" }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: "29px", sm: "47px", md: "66px" }}
            alignItems={"center"}
          >
            <Box wiidth="100%" maxWidth={{ sm: "220px", md: "312px" }}> 
              {/* <Typography fontSize={{md:"15px"}}> CTA Sentence</Typography> */}
              <Typography textAlign={{ xs: "center", sm: "left" }}>
                Start building your fintech product with seamless APIs. Get
                Started.
              </Typography>
            </Box>
            <Box
              width={{ xs: "100%", sm: "278px" }}
              height={{ xs: "64px", sm: "59px", md: "83px" }}
              textAlign={{ xs: "center", sm: "left" }}
            >
              {/* <Link to="/signup" style={{ textDecoration: "none" }}> */}
                <Button
                  sx={{
                    width: "100%",
                    height: "100%",
                    borderRadius:"10px",
                    textTransform:"capitalize",
                    fontWeight:"600",
                    fontSize:{xs:"13px", md:"19px"},
                    maxWidth: { xs: "200px", sm: "151px", md: "215px" },
                  }}
                  style={{ textDecoration: 'none'}}
                  variant="contained"
                  color="secondary"
                  href="https://portal.blacbox.app/"
                >
                  {" "}
                  Sign Up{" "}
                </Button>
              {/* </Link> */}
            </Box>
          </Stack>
        </Box>
      </Box>
      <Box>
        <Divider sx={{ width: "100%", bgcolor: "white" }} />
      </Box>
      <Box
        minHeight={{ xs: "147px", sm: "235px", md: "333px" }}
        px={{ xs: "27px", sm: "44px", md: "62px" }}
        pt={{ xs: "26px", sm: "41px", md: "59px" }}
      >
        <Grid
          container
          justifyContent={{ xs: "center", md: "flex-start" }}
          columnSpacing={{ xs: "20px", sm: "100px" }}
          rowSpacing={{ xs: "20px", sm: "50px" }}
        >
          <Grid item xs={6} md={3}>
            <img src={logo} alt="logo" width="100%" style={{maxWidth:"124px"}} />
            <Grid
              container
              // spacing={{ xs: "11px", sm: "18px", md: "25px" }}
              columnSpacing={"25px"}
              // mt="20px"
              // justifyContent={"space-between"}
            >
              {[
                { url: "", icon: GrLinkedin },
                { url: "", icon: GrFacebook },
                { url: "", icon: AiFillInstagram },
                { url: "", icon: GrTwitter },
              ].map((item, index) => (
                <Grid item xs={6} sm={2} key={index}>
                  <IconButton href={item.url}>
                    <item.icon color="white"  style={{width:"19px",height:"19px"}}/>
                  </IconButton>
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>
              Company
            </Typography>
            <List disablePadding dense>
              {companyLinks.map((item) => (
                <ListItemButton disableGutters href={item.to}>
                  <ListItemText> {item.title} </ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>
              Services
            </Typography>
            <List disablePadding dense>
              {serviceLinks.map((item) => (
                <ListItemButton disableGutters href={item.to}>
                  <ListItemText> {item.title} </ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>
              Resources
            </Typography>
            <List disablePadding dense>
              {resourceLinks.map((item) => (
                <ListItemButton disableGutters href={item.to}>
                  <ListItemText> {item.title} </ListItemText>
                </ListItemButton>
              ))}
            </List>
          </Grid>
          <Grid item xs={8} md={2} textAlign={{ xs: "center", md: "left" }}>
            <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>
              Get in touch:{" "}
            </Typography>
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
