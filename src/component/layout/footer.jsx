import {
  Box,
  Button,
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
    <Box>
      <Box>
        <Box>
          <Stack>
            <Box>
              <Typography> CTA Sentence</Typography>
              <Typography>Start building your fintech product with seamless APIs. Get started</Typography>
               </Box>
               <Box>
                <Button color="secondary"> Sign Up </Button>
               </Box>
          </Stack>
        </Box>

      </Box>

      <Grid container >
        <Grid item>
          <Stack>

          </Stack>
          </Grid>
        <Grid item>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Company</Typography>
          <List disablePadding dense>
            {companyLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Services</Typography>
          <List disablePadding dense>
            {serviceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item>
          <Typography fontWeight={"600"} fontSize="1.3em" my={"6px"}>Resources</Typography>
          <List disablePadding dense>
            {resourceLinks.map((item) => (
              <ListItemButton disableGutters href={item.to}>
                <ListItemText> {item.title} </ListItemText>
              </ListItemButton>
            ))}
          </List>
        </Grid>
        <Grid item>
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
  )
}
