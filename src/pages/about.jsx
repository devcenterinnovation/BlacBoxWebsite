import { Box, Button, Card, CardContent, Grid, Stack, Typography } from "@mui/material"

export default function AboutPage() {
  return (
    <Box>
      <Grid container alignItems={"center"}>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography>Simple APIs solution  to power your business</Typography>
          <Typography>Blackbox is a multi-API system that delivers data on various services to help your business grow faster. We guarantee coordinates where your company can connect with existing customers, get new customers, develop business insights, and increase revenue</Typography>
        </Grid>
      </Grid>

      <Grid container alignItems={"center"}>
        <Grid item xs={12} sm={6}>
          <Stack>
            <Typography>How We Stand Out</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l</Typography>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco  Lorem ipsum dolor sit amet</Typography>
            <Typography>, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lLorem ipsum dolor sit amet, consectetur </Typography>
            <Typography>adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lLorem ipsum dolor sit amet, consectetur adipiscing elit, seddoeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ll</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box>
        <Box>
          <Typography>Using modern technology to solve business problems </Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography> Developers Tools </Typography>
                <Typography> We've integrated simple programs that enable your developer to build and test APIs </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography> Authentication </Typography>
                <Typography>Enabling a robust authenticator to corroborate user identity and accelerate integration. </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={8}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography>Transaction API</Typography>
            <Typography>To power financial transactions, use our API services to create and collect a comprehensive transfer of funds</Typography>
            <Button>Explore tools</Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
