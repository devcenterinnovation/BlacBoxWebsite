import { Box, Button, Grid, Stack, Typography } from "@mui/material"
// import AppTheme from "../style/theme/main"

const benefits = [
  {
    title: "Reliable Integrations",
    text: "Our technology platform will help you aggregate and integrate into a wide range of digital products and services. It will aid in the enablement and swift access to financial services.",
  },
  {
    title: "Miltiple services, one API",
    text: "Competitive pricing models;  An API platform to help African businesses build better solutions easily, quickly, and at an affordable cost  ",
  },
  {
    title: "Competitive pricing",
    text: "An API platform to help African businesses build better solutions easily, quickly, and at an affordable cost.  ",
  },
  {
    title: "High availability",
    text: "We are always prepared to provide you with an assimilation and API solution using the most cutting-edge technology.",
  },
  {
    title: "Dedicted Customer Support",
    text: "To provide users with speed, convenience, and confidence, we simplify the purchasing process for the final customer. Making it simple to ask for feedback and help.",
  },
]

export default function HomePage() {
  return (
    <Stack>
      <Box pl={{ xs: "19px", sm: "30px", md: "42px" }}>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Box pt={{ xs: "32px", sm: "51px", md: "72px" }}>
          <Typography
            variant="h3"
            // color={AppTheme.palette.primary.main}
            letterSpacing={"1px"}
            fontWeight="400"
            maxWidth={{xs:"186px", sm:"296px", md:"420px"}}
          >
            One API, Multiple Services for African Businesses.
          </Typography>
          <Typography
            mt={{ xs: "7px", sm: "11px", md: "15px" }}
            fontSize={"14px"}
          >
            Coherent APIs to generate new accounts, send payments, verify OTP
            and BVN, and retrive bank information
          </Typography>
          <Box
            maxWidth={{ xs: "144px", sm: "230px", md: "326px" }}
            height={{ xs: "37px", sm: "59px", md: "83px" }}
            mt={ { xs: "17px", sm: "27px", md: "39px" }}
          >
            <Button
              fullWidth
              sx={{
                // mt: { xs: "17px", sm: "27px", md: "39px" },
                height: "100%",
              }}
              color="secondary"
              variant="contained"
            >
              Sign Up
            </Button>
          </Box>
          </Box>
        </Grid>
        <Grid item>

        </Grid>
      </Grid>

      </Box>

      <Box borderRadius={{xs:"79px 0 0 0 ", sm:"126px 0 0 0 ", md:"178px 0 0 0 "}} mt={{xs:"18px", sm:"29px", md:"41px"}} pr={{xs:"39px", sm:"63px", md:"89px"}} pl={{xs:"19px", sm:"30px", md:"42px"}} pt={{xs:"26px", sm:"41px", md:"58px"}}  pb={{xs:"39px", sm:"62px", md:"88px"}} color="white" bgcolor={"#0D0D0D"}>
        <Grid container >
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <Box mb={{ xs: "10px", sm: "15px", md: "22px" }}>
              <Typography
                fontWeight={"400"}
                variant="h4"
                fontFamily={"poppins"}
              >
                Why Choose us
              </Typography>
            </Box>
            <Stack spacing={{ xs: "14px", sm: "22px", md: "31px" }}>
              {benefits.map((item) => (
                <Box key={item.title}>
                  <Typography mt={{xs:"1px", sm:"2px", md:"3px"}} variant="h6" fontWeight={600}>
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography mt={{xs:"3px", sm:"5px", md:"8px"}}> {item.text} </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Grid
        container
        px={{ xs: "20px", sm: "33px", md: "46px" }}
        mt={{ xs: "69px", sm: "111px", md: "157px" }}
        pb={{ xs: "30px", sm: "47px", md: "67px" }}
      >
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography
              variant="h3"
              fontWeight={"442"}
              letterSpacing={{ xs: "1px", sm: "2px", md: "3px" }}
            >
              Integrating products with the features that customers need{" "}
            </Typography>
            <Box
              fontSize={"24px"}
              mt={{ xs: "10px", sm: "16px", md: "23px" }}
              mb={{ xs: "17px", sm: "27px", md: "39px" }}
            >
              <Typography>
                {" "}
                Blackbox provides automated solutions to help you create digital
                products that meet customer needs. We will remove the burden of
                your business and marketing, allowing you to focus on what
                matters most.
              </Typography>
              <Typography> Growing your business.</Typography>
            </Box>
            <Box>
              <Button>Explore services </Button>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box
        pl={{ xs: "26px", sm: "41px", md: "59px" }}
        mt={{ xs: "20px", sm: "32px", md: "46px" }}
        mb={{ xs: "31px", sm: "50px", md: "70px" }}
      >
        <Box>
          <Typography variant="h4" textAlign={"center"} fontWeight={"600"}>
            {" "}
            Testimonials
          </Typography>
        </Box>
        <Grid container mt={{ xs: "27px", sm: "44px", md: "62px" }}>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography fontSize={"24px"} fontWeight={"600"}>
                Marchant: WallX
              </Typography>
            </Box>
            <Box>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipi scing elit,
                seddoeiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enimminim veniam, quis nostrud exercitation ullamc orem ipsum
                dolor sit amet, consectadipiscing elit, seddoeiusmod tempor
                incididunt utlabore et dolore magna{" "}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}
