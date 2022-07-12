import {
  Box,
  Button,
  Grid,
  List,
  Stack,
  Typography,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import { BsSquareFill } from "react-icons/bs"
import NavBar from "../component/layout/nav"

import wheelImage from "../images/doc/doc_wheel.svg"
import wheelImageMobile from "../images/doc/doc_wheel_mobile.svg"

import '../style/css/doc.css'

const serviceList = [
  "Bank Services",
  "KYC Verification",
  "Payments and Wallet API’s",
  "OTP’s NOtification SERvices",
  "Virtual account Services",
]

export default function DocumentationPage() {

  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('md'));


  return (
    <Box>
      <NavBar />
      <Stack
        direction={{ xs: "column", md: "row" }}
        position="relative"
        minHeight={{ xs: "240px", sm: "383px", md: "543px" }}
      >
        <Box
          position={{ xs: "absolute", md: "relative" }}
          left={{ xs: "-67px", sm: "-106px", md: "-151px" }}
          // top={{ xs: "30px", md: "99px" }}
          top={{ sm: "66px", md: "93px" }}
          zIndex={{xs:"-1",md:"1"}}
          width={"100%"}
          maxWidth={{ xs: "323px", sm: "334px", md: "473px" }}
          height={{ xs: "323px", sm: "334px", md: "473px" }}
          padding={{ xs: "7px", sm: "11px", md: "15px" }}
          overflow="hidden"
        >
          <img
            onMouseEnter={(e) => (e.target.style.animationName = "moveWheel")}
            id="imageWheel"
            src={isSm ? wheelImageMobile : wheelImage}
            alt="wheelimage "
            height="100%"
          />
        </Box>
        <Box
          maxWidth={{ md: "820px" }}
          width="100%"
          mt={{ xs: "68px", sm: "100px", md: "153px" }}
          ml={{ xs: "0px", md: "-151px" }}
          // ml={{xs:"0px",sm:"-20px"}}
          pr={"32px"}
          pl={{ xs: "32px", sm: "0px" }}
          textAlign="center"
        >
          <Typography
            fontSize={{ xs: "20px", sm: "33px", md: "46px" }}
            lineHeight={{ xs: "42px", md: "77px" }}
            fontWeight={"416"}
          >
            Simple-to-use
            <br /> API DOCUMENTATION
          </Typography>
          <Button
            href="https://blacbox.readme.io/reference/authentication"
            variant="contained"
            sx={{
              mt: { xs: "15px", sm: "17px", md: "25px" },
              width: "100%",
              fontSize: { xs: "16px", md: "23px" },
              textTransform: "capitalize",
              height: { xs: "46px", md: "83px" },
              maxWidth: { xs: "200px", sm: "230px", md: "326px" },
            }}
          >
            Read API doc
          </Button>
        </Box>
      </Stack>

      <Box>
        <Box>
          <Typography></Typography>
          <Typography></Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={5}>
            <List></List>
          </Grid>
        </Grid>
      </Box>
      <Box
        pl={{ xs: "32px", sm: "95px", md: "135px" }}
        pr={"32px"}
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
                  width="100%"
                  ml="4px"
                  maxWidth={{ sm: "404px", md: "573px" }}
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
                        fontSize: { xs: "12px" },
                        fontWeight: "600",
                        width: "100%",
                        color: "black",
                        maxWidth: { xs: "158px", sm: "112px", md: "158px" },
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
