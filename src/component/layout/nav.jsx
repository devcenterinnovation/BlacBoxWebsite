import { AppBar, Button, Stack, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";

// import { BsChevronRight } from "react-icons/bs";

import {BiMenu} from "react-icons/bi"

import logoDark from "../../images/general/logo_dark.svg"
import logoLight from "../../images/general/logo_light.svg"

const links = [
  {title:"Home", to:"/",},
  {title:"About Us", to:"/about",},
  {title:"Service ", to:"/service",},
  {title:"Contact Us  ", to:"/contact",},
  {title:"API Documentation  ", to:"/doc",},
  {title:"Waitlist ", to:"/waitlist",},

]

export default function NavBar({light,...props}){

  return (
    <AppBar  position="relative" sx={{zIndex:"1",padding:0}} color="transparent"elevation={0}> 
        <Stack mt={{xs:"11px", sm:"18px", md:"25px"}} width={"100%"} direction={"row"} alignItems="center" justifyContent="space-between" >
          <Box  ml={{xs:"17px", sm:"27px", md:"38px"}}>
            <img src={light? logoLight: logoDark} alt="logo" width="100%" />
          </Box>
          <Stack display={{xs:"none",md:"flex"}} justifyContent="flex-end" direction={"row"} pr={"10%"} spacing={{ md:"33px"}}>
            {
              links.map((item)=>(
                <NavLink to={item.to} style={({isActive})=>({borderBottom:isActive?"1px solid #E2C703":"none",textDecoration:"none"})}>
                  <Button href={item.to} sx={{color:light?"white":"black"}}> {item.title} </Button>
                </NavLink>
              ))
            }
          </Stack>
          <IconButton sx={{display:{xs:"flex",md:"none",color:light?"white":"black"}}} >
            <BiMenu size={"50px"} />
          </IconButton>
        </Stack>
        
    </AppBar>
  )
}