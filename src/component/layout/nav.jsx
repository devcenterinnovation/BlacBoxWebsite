import { AppBar, Button, Box, Toolbar, Typography } from "@mui/material";

import { BsChevronRight } from "react-icons/bs";

export default function NavBar({dark,...props}){

  return (
    <AppBar  position="relative" sx={{zIndex:"1"}} color="transparent" elevation={0}> 
      <Toolbar>
        <Box color={dark?"white":"black"}  sx={{display: {xs: "none", md: "flex"}, justifyContent: "space-around", width: "70%"}}>
          <Typography >Home</Typography>
          <Typography >About</Typography>
          <Typography >Service</Typography>
          <Typography >Contact</Typography>
          <Button  sx={{display: "flex", justifyContent: "space-around", border: "1px solid #fff", pr: 2, pl: 2, borderRadius: "20px", background: "#fff"}}>
            <span>Login</span>
            <span style={{color: "#fff", marginLeft: "10px", background: "#7E7ACD", width: "10px", height: "10px", borderRadius: "50%", padding: "5px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "bold"}}><BsChevronRight /></span>
            </Button>
        </Box>
        
      </Toolbar>
    </AppBar>
  )
}