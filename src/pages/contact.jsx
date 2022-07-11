import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material"
import NavBar from "../component/layout/nav"
import "../style/css/waitlist/waitlistform.css"
import { BsSquareFill } from "react-icons/bs"

import heroImage from "../images/contact/contact_hero.svg"

const serviceList = [
  "Bank Services",
  "KYC Verification",
  "Payments and Wallet API’s",
  "OTP’s NOtification SERvices",
  "Virtual account Services",
]

export default function ContactPage() {
  return (
    <Box>
      <NavBar />
      <Box
        display={"flex"}
        pt={{ xs: "57px", sm: "90px", md: "128px" }}
        minHeight={{ xs: "241px", sm: "385px", md: "545px" }}
        mb={{ xs: "14px", sm: "23px", md: "32px" }}
        pl={{ xs: "28px", sm: "44px", md: "63px" }}
        pr={{ xs: "16px", sm: "25px", md: "36px" }}
      >
        <Box width="100%" maxWidth={{ md: "678px" }}>
          <Typography variant="h2" fontWeight={"616"}>
            Contact Us
          </Typography>
          <Box mt={{ xs: "17px", sm: "27px", md: "39px" }}>
            <Stack direction={{ xs: "column", sm: "row" }}>
              <Box
                borderRadius={{ xs: "3px", sm: "5px", md: "8px" }}
                sx={{ filter: "drop-shadow(-5px 7px 6px rgba(0, 0, 0, 0.15))" }}
                bgcolor={"#111111"}
                color="white"
                width="100%"
                minWidth={{ xs: "140px", sm: "224px", md: "317px" }}
                mr={{ xs: "18px", sm: "28px", md: "40px" }}
                padding={"39px"}
              >
                <Box
                  sx={{}}
                  width="80%"
                  maxWidth={{ sm: "139px", md: "197px" }}
                >
                  <Typography
                    fontSize={{ md: "19px" }}
                    fontWeight="500"
                    lineHeight={"22px"}
                  >
                    {" "}
                    Product and Service Support
                  </Typography>
                  <Typography
                    mt={{ xs: "3px", sm: "5px", md: "8px" }}
                    fontSize="12px"
                  >
                    {" "}
                    If you have any questions or need aid with services, please
                    contact us via email or phone..
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "10px", sm: "16px", md: "23px" },
                      minHeight: { xs: "20px", sm: "33px", md: "46px" },
                      minWidth: { xs: "70px", sm: "112px", md: "158px" },
                      fontSize: "12px",
                      textTransform: "capitalize",
                      boxShadow: "0px 4px 3px 3px rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    Go to help center
                  </Button>
                </Box>
              </Box>
              <Box
                borderRadius={{ xs: "3px", sm: "5px", md: "8px" }}
                sx={{ filter: "drop-shadow(-5px 7px 6px rgba(0, 0, 0, 0.15))" }}
                bgcolor={"#111111"}
                color="white"
                width="100%"
                minWidth={{ xs: "140px", sm: "224px", md: "317px" }}
                mt={{ xs: "18px", sm: "0" }}
                padding={"39px"}
              >
                <Box
                  sx={{}}
                  width="80%"
                  maxWidth={{ sm: "139px", md: "197px" }}
                >
                  <Typography
                    fontSize={{ md: "19px" }}
                    fontWeight="500"
                    lineHeight={"22px"}
                  >
                    {" "}
                    Talk to a member of our sales team
                  </Typography>
                  <Typography
                    mt={{ xs: "3px", sm: "5px", md: "8px" }}
                    fontSize="12px"
                  >
                    Contact our sales team for more information on the
                    worthiness and accessibility of our products.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      mt: { xs: "10px", sm: "16px", md: "23px" },
                      minHeight: { xs: "20px", sm: "33px", md: "46px" },
                      minWidth: { xs: "70px", sm: "112px", md: "158px" },
                      fontSize: "12px",
                      textTransform: "capitalize",
                      boxShadow: "0px 4px 3px 3px rgba(255, 255, 255, 0.25)",
                    }}
                  >
                    Sales team
                  </Button>
                </Box>
              </Box>
            </Stack>
          </Box>
        </Box>

        <Box
          mb={{ xs: "-37px", sm: "-59px", md: "-84px" }}
          height={{ xs: "184px", sm: "294px", md: "417px" }}
          display={{ xs: "none", md: "block" }}
          zIndex={-1}
          width={{ xs: "340px", sm: "543px", md: "769px" }}
          ml={{ xs: "-46px", sm: "-73px", md: "-104px" }}
        >
          <img src={heroImage} alt="hero_img" height="100%" />
        </Box>
      </Box>

      <Box
        pl={{ xs: "60px", sm: "95px", md: "135px" }}
        pt={{ xs: "34px", sm: "54px", md: "77px" }}
        pb={{ xs: "42px", sm: "68px", md: "96px" }}
        mt={{ xs: "16px", sm: "25px", md: "36px" }}
        borderRadius={{
          xs: "105px 0 0 0 ",
          sm: "168px 0 0 0 ",
          md: "239px 0 0 0 ",
        }}
        bgcolor="#F6F6F6"
      >
        <Box maxWidth={{ xs: "277px", sm: "442px", md: "626px" }}>
          <Typography variant="h2" fontWeight={"616"}>
            Get Started With Blacbox
          </Typography>
          <Typography
            fontWeight={{ md: "19px" }}
            mt={{ xs: "3px", sm: "5px", md: "7px" }}
          >
            As a business, we provide our customers with value by leveraging
            stable, practical, and high–quality API technology.
          </Typography>
        </Box>
        <Box mt={{ xs: "33px", sm: "53px", md: "76px" }}>
          <Grid container>
            <Grid item xs={12} sm={5}>
              <List>
                {serviceList.map((item) => (
                  <ListItem key={item}>
                    <BsSquareFill />
                    <ListItemText
                      sx={{ ml: { xs: "6px", sm: "10px", md: "15px" } }}
                      primaryTypographyProps={{
                        fontSize: { md: "19px" },
                        fontWeight: "500",
                      }}
                    >
                      {" "}
                      {item}{" "}
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box>
                <Box
                  bgcolor={"#111111"}
                  color={"white"}
                  maxWidth={{ xs: "253px", sm: "404px", md: "573px" }}
                  minHeight={{ xs: "228px", sm: "364px", md: "516px" }}
                  pl={{ xs: "25px", sm: "40px", md: "57px" }}
                  pt={{ xs: "11px", sm: "18px", md: "25px" }}
                  pb={{ xs: "17px", sm: "27px", md: "38px" }}
                  pr={{ xs: "22px", sm: "35px", md: "50px" }}
                >
                  <Typography variant="h5" fontWeight={"600"}>
                    Contact Form
                  </Typography>
                  <Stack spacing={3} px={2}>
                    <div class="form__group">
                      <input
                        type="text"
                        id="fullname"
                        class="form__field"
                        placeholder="    Business Name"
                      />
                      <label for="name" class="form__label">
                        Business Name
                      </label>
                    </div>
                    <div class="form__group">
                      <input
                        type="email"
                        id="email"
                        class="form__field"
                        placeholder="Email"
                      />
                      <label for="Email" class="form__label">
                        Email
                      </label>
                    </div>
                    <div class="form__group">
                      <label for="Company Name" class="form__label">
                        Message
                      </label>
                      <textarea
                        style={{ borderRadius: "5px" }}
                        type="text"
                        id="company"
                        class="message"
                        placeholder=""
                      />
                    </div>

                    <Button
                      sx={{
                        backgroundColor: "#E2C703",
                        fontSize: "12px",
                        fontWeight: "600",
                        width:"100%",
                        color: "black",
                        maxWidth:{xs:"158px", sm:"112px", md:"158px"},
                        // px:"32px",
                        height: "46px",
                        "&:hover": {
                          backgroundColor: "#E2C703",
                          color: "black",
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}
