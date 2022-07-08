import { Box, Button, Grid, Stack, Typography } from "@mui/material"
import NavBar from "../component/layout/nav"

import heroBg from '../images/about/about_hero_bg.png'
import heroImage from '../images/about/about_hero.svg'
import uspImage from '../images/about/about_usp.svg'
import devImage from '../images/about/about_dev.svg'
import authImage from '../images/about/about_auth.svg'
import apiImage from '../images/about/about_api.svg'

const tools = [
  {title:"Developers Tools",text:"We've integrated simple programs that enable your developer to build and test APIs",img:devImage},
  {title:"Authentication",text:"Enabling a robust authenticator to corroborate user identity and accelerate integration.",img:authImage},
]

export default function AboutPage() {
  return (
    <Box>
      <NavBar />
      <Box sx={{background:`url(${heroBg})`,backgroundRepeat:"no-repeat",backgroundPosition:{xs:"center",sm:"right"}} } pl={{xs:"18px", sm:"29px", md:"41px"}}>
      <Stack direction="row" justifyContent={"space-between"} bgcolor="rgba(255,255,255,0.6)">
        <Box width="100%" maxWidth={{xs:"312px", sm:"498px", md:"706px"}} mt={{xs:"47px", sm:"75px", md:"107px"}} height={{xs:"241px", sm:"384px", md:"545px"}} display={{xs:"none",md:"block"}}>
          <img src={heroImage} alt="hero_image" height="100%" />
        </Box>
        <Box width={"100%"} maxWidth={{xs:"278px", sm:"444px", md:"630px"}} mt={{xs:"96px", sm:"154px", md:"218px"}} ml={{xs:"0", sm:"-20px", md:"-129px"}} >
          <Typography variant="h1">Simple APIs solution  to power your business</Typography>
          <Typography mt={{xs:"6px", sm:"9px", md:"13px"}}>Blackbox is a multi-API system that delivers data on various services to help your business grow faster. We guarantee coordinates where your company can connect with existing customers, get new customers, develop business insights, and increase revenue</Typography>
        </Box>
      </Stack>
      </Box>

      <Stack direction={{xs:"column-reverse",md:"row"}}  justifyContent="space-between" alignItems={"center"} bgcolor={"#F6F6F6"} pt={{xs:"18px", sm:"28px", md:"40px"}} pb={{xs:"33px", sm:"53px", md:"75px"}} pr={{xs:"14px", sm:"22px", md:"32px"}} pl={{xs:"28px", sm:"45px", md:"63px"}}>
        <Box  width="100%" maxWidth={{ md:"498px"}} mr={{xs:"0px",  md:"66px"}} mt={{xs:"29px", sm:"47px", md:"0px"}}>
            <Typography mb={{xs:"11px", sm:"17px", md:"24px"}} variant="h3">How We Do It</Typography>
          <Stack spacing={{xs:"5px", sm:"9px", md:"12px"}}>
            <Typography sx={{fontSize: '14px', fontWeight: '600'}}>A system with a seamless integrated API</Typography>
            <Typography>To create new accounts, send payments, confirm OTP and BVN, and get bank information, we use sophisticated APIs. Which are all necessary to make sure your company runs smoothly, and your customers always have a seamless experience.

For physical and digital merchants, subscription services, software products, and storefronts, our integrations strengthen payments. These are methods by which we contribute to ensuring 
that data security is unaltered and that no modifications or fraudulent activities take place.</Typography>
          
          </Stack>
        </Box>
        <Box width="100%" maxWidth={{  md:"677px"}} >
          <img src={uspImage} alt="usp_image " width="100%" />
        </Box>
      </Stack>

      <Box borderRadius={{xs:"105px 0 0 0 ", sm:"168px 0 0 0 ", md:"239px 0 0 0 "}} bgcolor={"#0D0D0D"} color="white" pt={{xs:"45px", sm:"72px", md:"102px"}} pb={{xs:"23px", sm:"37px", md:"52px"}}>
        <Box mx="auto" mb={{xs:"51px", sm:"81px", md:"114px"}} maxWidth={{xs:"266px", sm:"425px", md:"603px"}}>
          <Typography variant="h3" fontWeight={"600" } letterSpacing="2%" lineHeight={{xs:"23px", sm:"36px", md:"51px"}} textAlign="center">Using modern technology to solve business problems </Typography>
        </Box>
        <Grid container px={{xs:"61px", sm:"97px", md:"137px"}} spacing={{xs:"37px", sm:"59px", md:"84px"}}>
          {
            tools.map((item)=>(
            <Grid item xs={12} sm={6} key={item.title}>
            <Box bgcolor={"#F5F4E6"} color="black" minHeight={{xs:"149px", sm:"238px", md:"337px"}} borderRadius={{xs:"3px", sm:"5px", md:"8px"}} pb={{xs:"13px", sm:"21px", md:"29px"}} pl={{xs:"14px", sm:"22px", md:"31px"}} pt={{xs:"22px", sm:"34px", md:"49px"}}>
              <Typography fontSize={{md:"19px"}} fontWeight="600">  {item.title} </Typography>
                <Typography mt={{xs:"5px", sm:"9px", md:"12px"}} mb={{xs:"15px", sm:"24px", md:"34px"}}> {item.text} </Typography>
                <Box mt={{xs:"15px", sm:"24px", md:"34px"}} height={{xs:"67px", sm:"107px", md:"152px"}} textAlign="center">
                  <img src={item.img} alt={`${item.title}_image`} height={"100%"} />
                </Box>
            </Box>
          </Grid>
            ))
          }
        </Grid>
        <Box pl={{xs:"36px", sm:"58px", md:"82px"}} pr={{xs:"14px", sm:"22px", md:"31px"}} mt={{xs:"89px", sm:"143px", md:"202px"}}  >
        <Grid container spacing={{xs:"31px", sm:"49px", md:"70px"}}>
          <Grid item xs={12} sm={6} md={7}>
            <img src={apiImage} alt="api_image" width={"100%"} />
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Typography mt={{xs:"11px", sm:"17px", md:"24px"}} variant="h3" fontWeight={"600"}>Transaction API</Typography>
            <Typography mt={{xs:"7px", sm:"11px", md:"15px"}} mb={{xs:"29px", sm:"47px", md:"66px"}}>To power financial transactions, use our API services to create and collect a comprehensive transfer of funds</Typography>
            <Button variant="contained" >Explore tools</Button>
          </Grid>
        </Grid>

        </Box>
      </Box>
    </Box>
  )
}
