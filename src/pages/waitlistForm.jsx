import React from 'react'
import {
Button, Grid, Stack, Card,
} from "@mui/material"
import '../style/css/waitlistform.css'
import icon from '../images/signin/icon.png'

export default function Waitlistform() {

  return (
    <>
    <Grid container  px={4}>
        <Grid item md={12} p={2} xs={12}>
        <Stack direction ='row' justifyContent={'space-between'} alignItems='center' px={2} sx={{paddingRight: {md:'50px', xs:'0px'}, width:'100%', }}>
        <img src={icon} alt='icon' width={'100px'}/>
        <a href='/' style={{color:'#E2C703', fontSize:'20px'}}>Close</a>
        </Stack>
        </Grid>
      <Grid item md={12} xs={12} sm={12} >
        <Card sx={{boxShadow:'none', margin:'50px auto', width: {md:'60%', xs:'100%', sm:'100%'}, backgroundColor:'black', padding:'40px'}}>
        <Stack spacing={3}  px={2} >
        <div class="form__group">
                  <input
                    type="text"
                    id="fullname"
                    class="form__field"
                    placeholder="Name"
                  />
                  <label for="name" class="form__label">
                    Name
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
                  <input
                    type="text"
                    id="company"
                    class="form__field"
                    placeholder="Company Name"
                  />
                  <label for="Company Name" class="form__label">
                    Company Name
                  </label>
                </div>
      

    <Button sx={{backgroundColor:'#E2C703', color:'black',width:{md:'20vw',xs:'100%', sm:'40vw'}, padding:'20px', '&:hover':{backgroundColor:'#E2C703', color:'black' }}}>Submit</Button>
        </Stack>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}
