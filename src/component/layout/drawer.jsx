import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material"
import { NavLink } from "react-router-dom"
import AppTheme from "../../style/theme/main"

import { FaTimes } from "react-icons/fa"

import logoDark from "../../images/general/logo_dark.svg"

const links = [
  { title: "Home", to: "/" },
  { title: "About Us", to: "/about" },
  { title: "Service ", to: "/service" },
  { title: "Contact Us  ", to: "/contact" },
  { title: "API Documentation  ", to: "/doc" },
  { title: "Waitlist ", to: "/waitlist" },
]

export default function AppDrawer({ open, close }) {
  return (
    <Drawer
      open={open}
      onClose={close}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: "100%",
          maxWidth: "240px",
        },
      }}
    >
      <Stack
        width="100%"
        direction={"row"}
        paddingX={"5px"}
        paddingY={"10px"}
        justifyContent="space-between"
        spacing="1px"
        mb={"16px"}
        alignItems={"center"}
      >
        <Box maxWidth={"60px"}>
          <img src={logoDark} alt="logo" width="100%" />
        </Box>
        <IconButton onClick={close}>
          <FaTimes style={{ width: "24px", height: "24px" }} />
        </IconButton>
      </Stack>
      <List>
        {links.map((item) => (
          <NavLink
            to={item.to}
            key={item.title}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? AppTheme.palette.primary.main : "#111111",
            })}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
            <Divider />
          </NavLink>
        ))}
      </List>
    </Drawer>
  )
}
