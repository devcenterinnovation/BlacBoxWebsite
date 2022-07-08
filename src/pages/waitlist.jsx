import {
  Box,  Button,
  Grid, Stack, Typography, Card
} from "@mui/material"
import '../style/css/waitlist.css'
export default function Waitlist() {
  return (
    <Box>
<Grid container className='background'>
  <Grid item md={12} xs={12}>
<Card sx={{margin:'200px auto', width:{md:'30vw', xs:'100%'}, boxShadow:'none'}}>
<Stack alignItems='center' spacing={1}>
  <Stack direction='row' spacing={0.5} alignItems='center'>
    <Typography variant='h5' component='span' sx={{fontWeight:'bold',}}>2000  </Typography><Typography variant='span' sx={{disply:'inline'}}>People ahead of you</Typography>
  </Stack>
  <Stack direction='row' spacing={0.5} alignItems='center'>

    <Typography variant='h5' component='span' sx={{fontWeight:'bold',}}>28 </Typography><Typography variant='span'>{" "}People behind you </Typography> 
  </Stack>
  <Button sx={{backgroundColor:'#E2C703', color:'black', width: {md:'20vw', sm:'30vw', xs:'fit-content'},padding:'20px', '&:hover':{backgroundColor:'#E2C703', color:'black', textTransform:'none' }}}>Join Waitlist</Button>

</Stack>
</Card>

  </Grid>

</Grid>
    </Box>
  )
}
