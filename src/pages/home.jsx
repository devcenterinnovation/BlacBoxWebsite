import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import AppTheme from "../style/theme/main"

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
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" color={AppTheme.palette.primary.main} fontWeight="400">
            One API, Multiple Services for African Businesses.
          </Typography>
          <Typography>
            Coherent APIs to generate new accounts, send payments, verify OTP
            and BVN, and retrive bank information
          </Typography>
          <Button>Sign Up</Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Box>
            <Typography fontWeight={"400"} variant="h4">Why Choose us</Typography>
          </Box>
          {benefits.map((item) => (
            <Box key={item.title}>
              <Typography variant="h6" fontWeight={600}> {item.title} </Typography>
              <Typography> {item.text} </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography variant="h3">
              Integrating products with the features that customers need{" "}
            </Typography>
            <Box fontSize={"24px"}>
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

      <Box>
        <Box>
          <Typography variant="h4" fontWeight={"600"}> Testimonials</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography  fontSize={"24px"} fontWeight={"600"}>Marchant: WallX</Typography>
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
