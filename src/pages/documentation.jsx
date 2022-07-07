import { Box, Button, Grid, List, Stack, Typography } from "@mui/material"

export default function DocumentationPage() {
  return (
    <Box>
      <Stack direction={{xs:"column",md:"row"}} container minHeight={{xs:"240px", sm:"383px", md:"543px"}} >
        <Box width={"100%"} maxWidth={{xs:"113px", sm:"180px", md:"255px"}}  alignSelf="flex-end">
          fdsfs
        </Box>
        <Box maxWidth={{xs:"362px", sm:"578px", md:"820px"}} width="100%"  alignSelf="center" >
          <Typography variant="h2" fontWeight={"600"} textAlign="center">
            Well documented and <br/> easy-to-use APIs for
            <Typography textTransform={"uppercase"} component={"span"}variant="h2" fontWeight={"600"}  color="primary"> developers</Typography>
          </Typography>
          <Button variant="contained" sx={{mt:{xs:"11px", sm:"17px", md:"25px"}}}>Read API doc</Button>
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
    </Box>
  )
}
