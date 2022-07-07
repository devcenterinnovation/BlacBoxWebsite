import { Box, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material"

export default function AboutPage() {
  return (
    <Box>
      <Grid container alignItems={"center"}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6} my={"120px"}>
          <Typography variant="h1">Simple APIs solution  to power your business</Typography>
          <Typography mt={{xs:"6px", sm:"9px", md:"13px"}}>Blackbox is a multi-API system that delivers data on various services to help your business grow faster. We guarantee coordinates where your company can connect with existing customers, get new customers, develop business insights, and increase revenue</Typography>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"} bgcolor={"#F6F6F6"} pt={{xs:"18px", sm:"28px", md:"40px"}} pb={{xs:"33px", sm:"53px", md:"75px"}} pr={{xs:"14px", sm:"22px", md:"32px"}} pl={{xs:"28px", sm:"45px", md:"63px"}}>
        <Grid item xs={12} sm={6}>
            <Typography mb={{xs:"11px", sm:"17px", md:"24px"}} variant="h3">How We Stand Out</Typography>
          <Stack spacing={{xs:"5px", sm:"9px", md:"12px"}}>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  Lorem ipsum dolor sit amet</Typography>
            <Typography>, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lLorem ipsum dolor sit amet, consectetur </Typography>
            <Typography>adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lLorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ll</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box borderRadius={{xs:"105px 0 0 0 ", sm:"168px 0 0 0 ", md:"239px 0 0 0 "}} bgcolor={"#0D0D0D"} color="white" pt={{xs:"45px", sm:"72px", md:"102px"}} pb={{xs:"23px", sm:"37px", md:"52px"}}>
        <Box mx="auto" mb={{xs:"51px", sm:"81px", md:"114px"}} maxWidth={{xs:"266px", sm:"425px", md:"603px"}}>
          <Typography variant="h3" fontWeight={"600" } letterSpacing="2%" lineHeight={{xs:"23px", sm:"36px", md:"51px"}} textAlign="center">Using modern technology to solve business problems </Typography>
        </Box>
        <Grid container px={{xs:"61px", sm:"97px", md:"137px"}} spacing={{xs:"37px", sm:"59px", md:"84px"}}>
          <Grid item xs={12} sm={6}>
            <Box bgcolor={"white"} color="black" minHeight={{xs:"149px", sm:"238px", md:"337px"}} borderRadius={{xs:"3px", sm:"5px", md:"8px"}} pb={{xs:"13px", sm:"21px", md:"29px"}} pl={{xs:"14px", sm:"22px", md:"31px"}} pt={{xs:"22px", sm:"34px", md:"49px"}}>
              <Typography fontSize={{md:"19px"}} fontWeight="600">  Developers Tools </Typography>
                <Typography mt={{xs:"5px", sm:"9px", md:"12px"}} mb={{xs:"15px", sm:"24px", md:"34px"}}> We've integrated simple programs that enable your developer to build and test APIs </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography fontSize={{xs:"8px", sm:"13px", md:"19px"}} fontWeight="600"> Authentication </Typography>
                <Typography>Enabling a robust authenticator to corroborate user identity and accelerate integration. </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Box pl={{xs:"36px", sm:"58px", md:"82px"}} pr={{xs:"14px", sm:"22px", md:"31px"}} mt={{xs:"89px", sm:"143px", md:"202px"}}  >
        <Grid container spacing={{xs:"31px", sm:"49px", md:"70px"}}>
          <Grid item xs={12} sm={6} md={7}></Grid>
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
