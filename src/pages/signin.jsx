import React from 'react'
import {
Button,Grid, Stack, Typography, Card,
} from "@mui/material"
import '../style/css/signin.css'
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import icon from '../images/signin/icon.png'
import {Link} from 'react-router-dom'
// import AppTheme from '../style/theme/main';

export default function Signinpage() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
    <Grid className='background' container justifyContent={'flex-end'} px={4} >
        <Grid item md={12} xs={12} >
        <Stack direction ='row' justifyContent={'space-between'} alignItems='center'  sx={{width:'100%', }}>
        <img src={icon} alt='icon' width={'100px'}/>
        <a href='/' style={{color:'#E2C703'}}>Close</a>

        </Stack>
        </Grid>
      <Grid item md={6}  sm={12} xs={12} >
        <Card sx={{boxShadow:'none',}}>
        <Stack spacing={2}  px={2}>
      <Typography sx={{fontWeight:'600', fontSize:'24px'}}>Log IN</Typography>
        <div class="form__group">
                  <input
                    type="text"
                    id="fullname"
                    class="form_field"
                    placeholder="Name"
                  />
                  <label for="name" class="form__label">
                    Name
                  </label>
                </div>
        <div class="form__group">
                  <input
                    type="password"
                    id="password"
                    class="form_field"
                    placeholder="Password"
                  />
                  <label for="password" class="form__label">
                    Password
                  </label>
                </div>
                <FormControl>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
    <FormControlLabel control={<Checkbox defaultChecked />} label="Terms and Conditions" />      
    </RadioGroup>
    </FormControl>      
<Stack spacing={2}>

    <Button sx={{backgroundColor:'#E2C703',fontWeight:'600', letterSpacing: '0.02em', fontSize:'16px', color:'black',textTransform:'none', width: {md:'20vw', sm:'30vw', xs:'100%'},padding:'20px', '&:hover':{backgroundColor:'#E2C703', color:'black' }}}>Log In</Button>
    <Stack direction="row" spacing={1} alignItems={'center'} sx={{fontSize:'10px', flexDirection:{xs:'column',md:'row', sm:'row'}}}>

    <Typography >Already have an account?</Typography> <a style={{color:'#E2C703',textDecoration:'none', fontSize:'16px'}}href='/signup'>Sign up</a>
    </Stack>

</Stack>
        </Stack>
        </Card>
      </Grid>
    </Grid>
    </>
  )
}
