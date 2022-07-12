import { Box, Button, Grid, Stack, Typography, Card } from "@mui/material"
import "../style/css/waitlist/waitlist.css"
import icon from "../images/signin/icon.png"
import { Link, NavLink } from "react-router-dom"
export default function Waitlist() {
  return (
    <Box>
      <Grid container px={1}>
        <Grid item md={12} p={1} xs={12}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            alignItems="center"
            px={2}
            sx={{ paddingRight: { md: "50px", xs: "0px" }, width: "100%" }}
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={icon} alt="icon" width={"100px"} />
            </Link>
          </Stack>
        </Grid>
        <Grid item md={12} xs={12}>
          <Grid container className="bg">
            <Card
              sx={{
                margin: { md: "auto", xs: "100px auto" },
                background: "transparent",
                boxShadow: "none",
              }}
            >
              <Stack alignItems="center" spacing={1}>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    2000{" "}
                  </Typography>
                  <Typography variant="span" sx={{ disply: "inline" }}>
                    People ahead of you
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography
                    variant="h5"
                    component="span"
                    sx={{ fontWeight: "bold" }}
                  >
                    28{" "}
                  </Typography>
                  <Typography variant="span"> People behind you </Typography>
                </Stack>
                <NavLink
                  to={"/waitlist/form"}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#E2C703",
                      color: "black",
                      textTransform: "none",
                      fontWeight: "600",
                      width: { md: "20vw", sm: "30vw", xs: "fit-content" },
                      padding: "20px",
                      "&:hover": {
                        backgroundColor: "#E2C703",
                        color: "black",
                        textTransform: "none",
                      },
                    }}
                  >
                    Join Waitlist
                  </Button>
                </NavLink>
              </Stack>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  )
}
