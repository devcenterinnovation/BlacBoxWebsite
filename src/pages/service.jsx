import {
  Box,
  Button,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import NavBar from "../component/layout/nav"

import {FaArrowCircleRight} from "react-icons/fa"

import heroBg from "../images/service/service_hero.svg"
import kycImage from "../images/service/service_kyc.svg"
import otpImage from "../images/service/service_otp.svg"
import serviceImage from "../images/service/services.svg"


const bankServices = [
  {
    title: "Banking for Agencies",
    text: "We will provide flawless business involvement on your behalf, as well as all banking services required by your customers.",
  },
  {
    title: "Bank Transfers",
    text: "Use our computer-controlled unification and API to control a streamlined transfer process and ensure your customers’ complete transfers without dispute.",
  },
  {
    title: "Recurring Payments",
    text: "We create an integration model that will enable your company to include a scheme wherein your patrons can authorize the automatic withdrawals from their accounts.",
  },
  {
    title: "Verification of Bank Statements",
    text: "Help with the proofing of bank records and details",
  },
]

export default function ServicePage() {
  return (
    <Box>
      <Box
        bgcolor="#272727"
        sx={{backgroundImage:{xs:"",md:`url(${heroBg})`},backgroundPosition:"right",backgroundRepeat:"no-repeat",backgroundSize:"auto 100%"}}
        color="white"
      >
        <Box bgcolor={"rgba(17, 17, 17, 0.38)"}   >
        <NavBar light />
          <Box
          width="100%"
          maxWidth={{ sm:"451px", md:"639px"}}
          pl={{ xs: "38px", sm: "60px", md: "85px" }} 
          pr={{ xs: "38px", sm: "0px"}} 
          bgcolor="rgba()"
            pt={{ xs: "67px", sm: "107px", md: "151px" }}
            pb={{ xs: "53px", sm: "84px", md: "119px" }}
          >
            <Typography variant="h1" fontWeight={"467"}>
              {" "}
              Delivering a complete API solution that makes an impact
            </Typography>
            <Box mt={{ xs: "17px", sm: "27px", md: "39px" }}>
              <Button
                fullWidth
                sx={{
                  maxWidth: { xs: "144px", sm: "230px", md: "326px" },
                  height: { xs: "37px", sm: "59px", md: "83px" },
                  fontSize: { md: "23px" },
                  fontWeight: "600",
                  borderRadius: { xs: "3px", sm: "5px", md: "8px" },
                }}
                variant="contained"
              >
                Sign Up
              </Button>
            </Box>
          </Box>
          <Grid item xs={12} sm={6}></Grid>
        </Box>
      </Box>

      <Box
        pl={{ xs: "23px", sm: "37px", md: "133px" }}
        pr={{xs:"23px", sm:"37px", md:"53px"}}
        mt={{ xs: "25px", sm: "40px", md: "57px" }}
      >
        <Stack direction={{xs:"column",sm:"row"}} justifyContent={"space-between"}  alignItems={"center"}>
          <Box width={"100%"} maxWidth={{sm:"351px", md:"498px"}}mr={{xs:"0", sm:"33px", md:"46px"}}>
            <Typography variant="h3"> KYC Verification </Typography>
            <Typography
              mt={{ xs: "6px", sm: "10px", md: "14px" }}
              fontSize={{ md: "19px" }}
            >
              {" "}
              We will help you in implementing KYC processing by leveraging our
              best integration tools.{" "}
            </Typography>
            <Box mt={{ xs: "30px", sm: "48px", md: "69px" }}>
              <Button
                fullWidth
                sx={{
                  maxWidth: { xs: "144px", sm: "230px", md: "326px" },
                  height: { xs: "37px", sm: "59px", md: "83px" },
                  fontSize: { md: "23px" },
                  fontWeight: "600",
                  borderRadius: { xs: "3px", sm: "5px", md: "8px" },
                }}
                variant="contained"
              >
                Explore tools
              </Button>
            </Box>
          </Box>
          <Box width={"100%"} maxWidth={{sm:"396px", md:"561px"}}mt={{xs:"50px",md:"0px"}} >
            <img src={kycImage} alt="kyc_image" width="100%" />
          </Box>
        </Stack>
      </Box>

      <Box mt={{ xs: "57px", sm: "92px", md: "130px" }} pr={{xs:"0", sm:"37px", md:"53px"}}>
      <Stack direction="row" justifyContent={"space-between"}   >
          <Box alignSelf={{sm:"flex-end"}} width={"100%"} maxWidth={{xs:"30px", sm:"379px", md:"537px"}} mr={{xs:"0", sm:"94px", md:"134px"}}> 
            <Box width="100%" height={{xs:"172px", sm:"84px", md:"119px"}} bgcolor="#0D0D0D">
            </Box>
          </Box>
        
          <Box  width={"100%"} maxWidth={{sm:"396px", md:"561px"}}pl={{ xs: "23px", sm: "0px" }} mb={{xs:"22px", sm:"35px", md:"49px"}}>
            <Typography variant="h3"> Payments and Wallet API’s </Typography>
            <Typography
              mt={{ xs: "7px", sm: "11px", md: "15px" }}
              fontSize={{ md: "19px" }}
            >
              {" "}
              Manage basic payment and wallet functions such as performing a
              simple token transfer and scaling payment transactions smoothly.{" "}
            </Typography>
            <Button></Button>
          </Box>
        </Stack>
      </Box>


      <Box
        pl={{ xs: "23px", sm: "37px", md: "133px" }}
        pr={{xs:"23px", sm:"37px", md:"53px"}}
        mt={{ xs: "45px", sm: "72px", md: "103px" }}
      >
        <Stack direction={{xs:"column-reverse",sm:"row"}} justifyContent={"space-between"}  alignItems={"center"}>
          <Box width={"100%"} maxWidth={{sm:"351px", md:"498px"}}mt={{xs:"20px", sm:"33px", md:"0px"}} mr={{xs:"0", sm:"33px", md:"46px"}}>
          <Typography variant="h3"> OTP’s Notification Services </Typography>

            <Typography
              mt={{ xs: "6px", sm: "10px", md: "14px" }}
              fontSize={{ md: "19px" }}
            >
                {" "}
              Get to build a smooth OTP notification process for your business
              to protect customer data.{" "}
            </Typography>
          </Box>
          <Box width={"100%"} maxWidth={{sm:"396px", md:"561px"}}>
          <img src={otpImage} alt="kyc_image" width="100%" />

          </Box>
        </Stack>
      </Box>

      <Box
        mb={{ xs: "14px", sm: "22px", md: "31px" }}
        mt={{ xs: "67px", sm: "106px", md: "151px" }}
        p={{ xs: "3px", sm: "5px", md: "8px" }}
      >
        <Box mb={{ xs: "20px", sm: "32px", md: "45px" }}>
          <Typography variant="h3" fontWeight={"600"} textAlign="center">
            Virtual Accounts
          </Typography>
        </Box>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="center"
          px={"4px"}
        >
          <Box pb={{ xs: "14px", sm: "22px", md: "31px" }}
            pt={{ xs: "19px", sm: "30px", md: "42px" }}
            pl={{ xs: "18px", sm: "29px", md: "42px" }}
            mr={{xs:"25px", sm:"40px", md:"57px"}}
            sx={{
              width: "100%",
              maxWidth: {  sm: "272px", md: "386px" },
              minHeight: { xs: "120px", sm: "192px", md: "272px" },
              borderRadius: { xs: "3px", sm: "5px", md: "8px" },
              bgcolor: "#111111",
              color: "white",
            }}>
          <Stack
            justifyContent={"space-between"}
            height="100%"
          >
            <Box
              width={"100%"}
              maxWidth={{  sm: "169px", md: "239px" }}
            >
              <Typography variant="h5" fontWeight={"800"}>
                Bill Payment
              </Typography>
              <Typography mt={{ xs: "4px", sm: "7px", md: "9px" }}>
                Bill payment is made simple with a virtual account mechanism to
                help your company and its customers thrive.
              </Typography>
            </Box>
            <Box>
              <Button sx={{color:"white",padding:"0",textTransform:"capitalize"}} endIcon={<FaArrowCircleRight />}> Explore services</Button>
            </Box>
          </Stack>

          </Box>
          <Box pb={{ xs: "14px", sm: "22px", md: "31px" }}
            pt={{ xs: "19px", sm: "30px", md: "42px" }}
            pl={{ xs: "18px", sm: "29px", md: "42px" }}
            mt={{xs:"25px", sm:"0"}}     
            sx={{
              width: "100%",
              maxWidth: {  sm: "272px", md: "386px" },
              minHeight: { xs: "120px", sm: "192px", md: "272px" },
              borderRadius: { xs: "3px", sm: "5px", md: "8px" },
              bgcolor: "#111111",
              color: "white",
            }}>
          <Stack
            justifyContent={"space-between"}
            height="100%"
          >
            <Box
              width={"100%"}
              maxWidth={{  sm: "169px", md: "239px" }}
            >
              <Typography variant="h5" fontWeight={"800"}>
              Debit Cards
              </Typography>
              <Typography mt={{ xs: "4px", sm: "7px", md: "9px" }}>
              Create virtual cards that can be used anywhere in the world. Develop, initiate, and maintain your cards from any place.
              </Typography>
            </Box>
            <Box>
              <Button sx={{color:"white",padding:"0",textTransform:"capitalize"}} endIcon={<FaArrowCircleRight />}> Explore services</Button>
            </Box>
          </Stack>

          </Box>
        </Stack>
      </Box>

      <Box mt={{ xs: "82px", sm: "131px", md: "185px" }}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          // spacing={{ xs: "28px", sm: "44px", md: "63px" }}
        >
          <Box
          mr={{xs:"28px", sm:"44px", md:"63px"}}
          alignSelf={{xs:"flex-start",sm:"flex-end"}}
          textAlign={{xs:"center",sm:"right"}}
            maxWidth={{  sm: "379px", md: "538px" }}
            width="100%"
          >
            <Typography variant="h3">CAC Verification</Typography>
            <Box alignSelf={{sm:"flex-end"}} width={"100%"} maxWidth={{xs:"238px", sm:"379px", md:"538px"}} mr={{xs:"0", sm:"94px", md:"134px"}}> 
            <Box width="100%" height={{xs:"53px", sm:"84px", md:"119px"}} bgcolor="#0D0D0D">
            </Box>
          </Box>
          </Box>

          <Box
            maxWidth={{ sm: "350px", md: "496px" }}
            width="100%"
            pb={{ xs: "6px", sm: "10px", md: "15px" }}
        // px={{ xs: "3px", sm: "5px", md: "8px" }}
        px={{xs:"23px", sm:"37px", md:"0"}}


          >
            <Typography fontSize={{ md: "19px" }}>
              Aid in the authentication and fact-checking of business records
              and registration within a few minutes.
            </Typography>
            <Box mt={{ xs: "17px", sm: "27px", md: "39px" }}>
            <Button
                fullWidth
                sx={{
                  maxWidth: { xs: "144px", sm: "230px", md: "326px" },
                  height: { xs: "37px", sm: "59px", md: "83px" },
                  fontSize: { md: "23px" },
                  fontWeight: "600",
                  borderRadius: { xs: "3px", sm: "5px", md: "8px" },
                }}
                variant="contained"
              >
                Explore tools
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>

      <Box
      borderRadius={{xs:"105px 0 0 0 ", sm:"168px 0 0 0 ", md:"239px 0 0 0 "}} 
      bgcolor="#F6F6F6"
        mt={{ xs: "20px", sm: "32px", md: "45px" }}
        pt={{xs:"76px", sm:"120px", md:"84px"}}
        pb={{xs:"38px", sm:"61px", md:"87px"}}
        pl={{ xs: "105px", sm: "168px", md: "276px" }}
        pr={{xs:"20px", sm:"33px", md:"46px"}}
      >
        <Box
          // mt={{ xs: "37px", sm: "59px", md: "84px" }}  
          mb={{ xs: "24px", sm: "38px", md: "54px" }}
          maxWidth={{ xs: "219px", sm: "350px", md: "496px" }}
        >
          <Typography variant="h2" fontWeight={"600"}>Bank Services</Typography>
          <Typography mt={{ xs: "3px", sm: "5px", md: "8px" }}>
          We offer a good number of services to assist you in managing your company's and your customers' banking transactions. 
          </Typography>
        </Box>

        <Grid container alignItems={"flex-end"}>
          <Grid item xs={12} md={6}>
            <Box pr={{ xs: "17px", sm: "28px", md: "39px" }}>
              <Stack spacing={{ xs: "14px", sm: "22px", md: "31px" }}>
                {bankServices.map((item) => (
                  <Box key={item.title}>
                    <Typography variant="h5" fontWeight={"600"}>
                      {" "}
                      {item.title}{" "}
                    </Typography>
                    <Typography fontWeight={"300"} fontSize={{ md: "19px" }}>
                      {" "}
                      {item.text}{" "}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} sx={{display:{xs:"none",md:"flex"}}}>
            <img src={serviceImage}  alt="servce _iimg" width="100%" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
