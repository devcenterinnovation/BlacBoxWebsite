import { Avatar, Box, Button, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import AppTheme from "../style/theme/main"

import { FiTrendingUp } from "react-icons/fi"
import { MdPayments, MdControlCamera } from "react-icons/md"

import heroImage from "../images/home/hero1.svg"
import handIcon from "../images/home/hand_play_icon.svg"
import benefitsImage from "../images/home/home_benefits.svg"
import serviceImage from "../images/home/home_services.svg"

import ideatLogo from "../images/home/ideat_logo.svg"
import mcLogo from "../images/home/mc_logo.svg"
import mxLogo from "../images/home/mx_logo.svg"
import NavBar from "../component/layout/nav"

const benefits = [
  {
    img: handIcon,
    title: "Reliable Integrations",
    text: "Our technology platform will help you aggregate and integrate into a wide range of digital products and services. It will aid in the enablement and swift access to financial services.",
  },
  {
    icon: FiTrendingUp,
    title: "Miltiple services, one API",
    text: "Competitive pricing models;  An API platform to help African businesses build better solutions easily, quickly, and at an affordable cost  ",
  },
  {
    icon: MdPayments,
    title: "Competitive pricing",
    text: "An API platform to help African businesses build better solutions easily, quickly, and at an affordable cost.  ",
  },
  {
    icon: MdControlCamera,
    title: "High availability",
    text: "We are always prepared to provide you with an assimilation and API solution using the most cutting-edge technology.",
  },
  {
    icon: MdControlCamera,
    title: "Dedicted Customer Support",
    text: "To provide users with speed, convenience, and confidence, we simplify the purchasing process for the final customer. Making it simple to ask for feedback and help.",
  },
]

const testimonials = [
  {
    img: mxLogo,
    title: "Merchant: WallX",
    text: "Utilizing Blackbox API implementations allowed us to create friendly and simple financial processes for our service users. This is one integration provider that offers a straightforward and thoroughly explained procedure for companies to use.",
  },
  {
    img: mcLogo,
    title: "Merchant: Momo Ltd",
    text: "We powered our lending site, framework, and implementation with BlackBox APIs and services. They offer a frictionless B2B automation process that makes integration simple and easy.",
  },
  {
    img: ideatLogo,
    title: "Merchant: Ideate Zone",
    text: "Blackbox's user-friendly and comprehensive API methods gave us the freedom to easily solve every assimilation problem needed to run our business",
  },
]

export default function HomePage() {
  return (
    <Stack>
      <Box pl={{ xs: "30px", md: "42px" }}>
        <NavBar />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
        >
          <Box
            width="100%"
            maxWidth={{ xs: "344px", sm: "296px", md: "420px" }}
          >
            <Box pt={{ xs: "32px", sm: "51px", md: "72px" }}>
              <Typography
                variant="h3"
                // color={AppTheme.palette.primary.main}
                letterSpacing={"1px"}
                fontWeight="400"
                maxWidth={{ xs: "298px", sm: "296px", md: "420px" }}
              >
                One API, Multiple Services for African Businesses.
              </Typography>
              <Typography
                mt={{ xs: "7px", sm: "11px", md: "15px" }}
                fontSize={"14px"}
              >
                Coherent APIs to generate new accounts, send payments, verify
                OTP and BVN, and retrive bank information
              </Typography>
              <Box
                maxWidth={{ xs: "144px", sm: "230px", md: "326px" }}
                height={{ xs: "59px", md: "83px" }}
                mt={{ xs: "17px", sm: "27px", md: "39px" }}
              >
                <Link to="/signup" style={{ textDecoration: "none" }}>
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
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            alignSelf={"flex-end"}
            width="100%"
            mt={{ xs: "77px", sm: "0" }}
            ml={{ xs: "0px", sm: "56px", md: "80px" }}
            maxWidth={{ xs: "398px", sm: "469px", md: "664px" }}
          >
            <Box
              display={"flex"}
              alignItems="center"
              pr={{ xs: "28px", sm: "83px", md: "117px" }}
              pt={{ xs: "26px", sm: "41px", md: "59px" }}
              pb={{ xs: "22px", sm: "34px", md: "49px" }}
              height={{ xs: "387px", sm: "402px", md: "570px" }}
              bgcolor="#0D0D0D"
            >
              <Box
                bgcolor={AppTheme.palette.primary.main}
                py={{ xs: "10px", sm: "3px", md: "5px" }}
                px={{ xs: "10px", sm: "6px", md: "8px" }}
                pr={{ xs: "0px" }}
                ml={{ xs: "-22px", sm: "-56px", md: "-80px" }}
              >
                <img
                  src={heroImage}
                  alt="home_hero"
                  width={"100%"}
                  // height="100%"
                />
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
        borderRadius={{
          xs: "79px 0 0 0 ",
          sm: "126px 0 0 0 ",
          md: "178px 0 0 0 ",
        }}
        mt={{ xs: "74px", sm: "29px", md: "41px" }}
        pr={{ xs: "39px", sm: "63px", md: "89px" }}
        pl={{ xs: "19px", sm: "30px", md: "42px" }}
        pt={{ xs: "26px", sm: "41px", md: "58px" }}
        pb={{ xs: "39px", sm: "62px", md: "88px" }}
        color="white"
        bgcolor={"#0D0D0D"}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: "61px", sm: "97px", md: "137px" }}
        >
          <Box
            display={{ xs: "none", sm: "block" }}
            width="100%"
            maxWidth={{ sm: "402px", md: "569px" }}
          >
            <Box mt={{ xs: "100px", sm: "160px", md: "227px" }}>
              <img src={benefitsImage} width="100%" alt="benefit_image" />
            </Box>
          </Box>
          <Box width={"100%"} maxWidth={{ sm: "354px", md: "502px" }}>
            <Box mb={{ xs: "41px", sm: "15px", md: "22px" }}>
              <Typography
                fontWeight={"400"}
                variant="h4"
                fontSize={{ xs: "23px", sm: "31px" }}
                textAlign={{ xs: "center", sm: "left" }}
                // fontFamily={"poppins"}
              >
                Why Choose us
              </Typography>
            </Box>
            <Stack spacing={{ xs: "14px", sm: "22px", md: "31px" }}>
              {benefits.map((item) => (
                <Box key={item.title}>
                  {item.icon ? (
                    <item.icon
                      style={{
                        width: "31px",
                        height: "31px",
                        color: AppTheme.palette.primary.main,
                      }}
                    />
                  ) : (
                    <Avatar variant="square" src={handIcon} />
                  )}
                  <Typography
                    mt={{ xs: "24px", sm: "2px", md: "3px" }}
                    variant="h6"
                    fontWeight={600}
                  >
                    {" "}
                    {item.title}{" "}
                  </Typography>
                  <Typography mt={{ xs: "3px", sm: "5px", md: "8px" }}>
                    {" "}
                    {item.text}{" "}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Stack>
      </Box>

      <Stack
        width="100%"
        direction={{ xs: "column", sm: "row" }}
        // spacing={{xs:"48px", sm:"77px", md:"110px"}}
        pl={{ xs: "20px", sm: "33px", md: "46px" }}
        pr={{ xs: "14px", sm: "22px", md: "31px" }}
        mt={{ xs: "69px", sm: "111px", md: "157px" }}
        pb={{ xs: "30px", sm: "47px", md: "67px" }}
      >
        <Box width="100%" maxWidth={{ sm: "384px", md: "545px" }}>
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
              <Typography
                fontWeight={"600"}
                color={AppTheme.palette.primary.main}
              >
                {" "}
                Growing your business.
              </Typography>
            </Box>
            <Box
              height={{ xs: "64px", sm: "59px", md: "83px" }}
              width="100%"
              maxWidth={{ xs: "200px", sm: "230px", md: "326px" }}
            >
              <Button
                fullWidth
                sx={{
                  // mt: { xs: "17px", sm: "27px", md: "39px" },
                  height: "100%",
                }}
                variant="contained"
              >
                Explore services{" "}
              </Button>
            </Box>
          </Stack>
        </Box>
        <Box
          mt={{ xs: "54px", sm: "28px", md: "40px" }}
          pl={{ xs: "48px", sm: "77px", md: "110px" }}
          width="100%"
          maxWidth={{ sm: "420px", md: "596px" }}
        >
          <img src={serviceImage} alt="service_image" width={"100%"} />
        </Box>
      </Stack>

      <Box
        pl={{ xs: "26px", sm: "41px", md: "59px" }}
        pr={{ xs: "26px", sm: "41px", md: "0" }}
        mt={{ xs: "20px", sm: "32px", md: "46px" }}
        mb={{ xs: "92px", sm: "50px", md: "70px" }}
      >
        <Box>
          <Typography variant="h4" textAlign={"center"} fontWeight={"600"}>
            {" "}
            Testimonials
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          mt={{ xs: "17px", sm: "44px", md: "62px" }}
        >
          {testimonials.map((item) => (
            <Box
              key={item.title}
              width={"100%"}
              // bgcolor="#F9F9F9"
              maxWidth={{ md: "373px" }}
              minHeight={{ xs: "199px", sm: "317px", md: "450px" }}
              mt={{ xs: "50px", sm: "44px", md: "0" }}
              mr={{ xs: "27px", sm: "44px", md: "62px" }}
              px={{ xs: "9px", sm: "14px", md: "19px" }}
              borderBottom={"5px solid"}
              borderRight="1px solid"
              borderColor={"#DDD3D3"}
              sx={{ ":hover": { borderColor: "#E2C703 #DDD3D3" } }}
            >
              <Box
                boxShadow={{
                  xs: "0 0 0",
                  sm: "0px -2px 6px 2px rgba(0, 0, 0, 0.15)",
                }}
                sx={{ ":hover": { boxShadow: "0 0 0" } }}
                width={"100%"}
                maxWidth={{ md: "334px" }}
                pt={{ xs: "26px", sm: "16px", md: "23px" }}
                px={"16px"}
                pb={{ xs: "8px", sm: "13px", md: "18px" }}
              >
                <Typography
                  variant="h6"
                  textAlign={"center"}
                  fontWeight={"600"}
                >
                  {item.title}
                </Typography>
              </Box>
              <Box>
                <Box
                  mt={{ xs: "29px", sm: "47px", md: "66px" }}
                  mb={{ xs: "20px", sm: "33px", md: "46px" }}
                  textAlign="center"
                >
                  <img src={item.img} alt={item.title + "logo"} height="100%" />
                </Box>
                <Box pb={"58px"}>
                  <Typography textAlign="justify"> {item.text} </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  )
}
