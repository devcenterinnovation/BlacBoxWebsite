import { AppBar, Button,  Toolbar, Typography, Stack } from "@mui/material";
import { Link } from "react-router-dom";

// import { BsChevronRight } from "react-icons/bs";


const links = [
  {title:"Home", to:"/",},
  {title:"About Us", to:"/about",},
  {title:"Service ", to:"/service",},
  {title:"Contact Us  ", to:"/contact",},
  {title:"API Documentation  ", to:"/doc",},
  {title:"Waitlist ", to:"/",},

]

export default function NavBar({dark,...props}){

  return (
    <AppBar  position="relative" sx={{zIndex:"1"}} color="transparent" elevation={0}> 
      <Toolbar>
        <Stack width={"100%"} direction={"row"}justifyContent="space-between" >
          <Typography> Logo </Typography>
          <Stack direction={"row"} spacing={{xs:"20px", sm:"33px", md:"46px"}}>
            {
              links.map((item)=>(
                <Link to={item.to}>
                  <Button href={item.to} sx={{color:"black"}}> {item.title} </Button>
                </Link>
              ))
            }
          </Stack>
        </Stack>
        
      </Toolbar>
    </AppBar>
  )
}