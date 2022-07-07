import { Box, Button, Grid, List, Typography } from "@mui/material"

export default function DocumentationPage() {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={8}>
          <Typography>
            Well documented and easy-to-use APIs for
            <span> developers</span>
          </Typography>
          <Button>Read API doc</Button>
        </Grid>
      </Grid>

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
    </Box>
  )
}
