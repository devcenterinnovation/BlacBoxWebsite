import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Stack,
  Typography,
} from "@mui/material"

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
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography> Simple APIs solution to power your business </Typography>
          <Button>Sign Up</Button>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography> KYC Verification </Typography>
          <Typography>
            {" "}
            We will help you in implementing KYC processing by leveraging our
            best integration tools.{" "}
          </Typography>
          <Button>Explore tools</Button>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}></Grid>
        <Grid item xs={12} sm={6}>
          <Typography> Payments and Wallet API’s </Typography>
          <Typography>
            {" "}
            Manage basic payment and wallet functions such as performing a
            simple token transfer and scaling payment transactions smoothly.{" "}
          </Typography>
          <Button></Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography> OTP’s Notification Services </Typography>
          <Typography>
            {" "}
            Get to build a smooth OTP notification process for your business to
            protect customer data.{" "}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
      </Grid>

      <Box>
        <Box>
          <Typography>Virtual Accounts</Typography>
        </Box>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Typography>Virtual Accounts</Typography>
                <Typography>
                  Bill payment is made simple with a virtual account mechanism
                  to help your company and its customers thrive.
                </Typography>
              </CardContent>
              <CardActions>
                <Button> Explore services</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Grid container>
        <Grid item>
          <Typography>CAC Verification</Typography>
        </Grid>
        <Grid>
          <Typography>
            Aid in the authentication and fact-checking of business records and
            registration within a few minutes.
          </Typography>
          <Button>Explore tools</Button>
        </Grid>
      </Grid>

      <Box>
        <Box>
          <Typography>Bank Services</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            seddoeiusmod tempor incididunt u
          </Typography>
        </Box>

        <Grid container>
          <Grid item xs={12} sm={6}>
            <Stack>
              {bankServices.map((item) => (
                <Box key={item.title}>
                  <Typography> {item.title} </Typography>
                  <Typography> {item.text} </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}></Grid>
        </Grid>
      </Box>
    </Box>
  )
}
