import React from 'react'
import Styles from './login.module.css'
import {  AccountCircle } from '@mui/icons-material'
import { Box, Button, Card, Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';



  
const Login = () => {
  return (
    <Card className={Styles.wrapper}>
        
            <h1>Login</h1>
            
            <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" />
      </Box>
      
      <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <LockOutlinedIcon  sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
      </Box> 
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>
    
            
            <Box>
            <FormGroup>
            <FormControlLabel sx={{color:'teal',paddingLeft:'20px'}} control={<Checkbox Checked />} label="Remember Me" />
            </FormGroup>
            
            <Box className={Styles.forgot}>
                <a href='#'>Forgot password</a>
            </Box>
            </Box>
          
            <Box className={Styles.link}>
                <p> Don't have an account? <a href='#'>Register</a></p>
            </Box>
       

    </Card>
    
  )
}

export default Login