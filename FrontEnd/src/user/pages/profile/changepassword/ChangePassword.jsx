import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import Styles from './ChangePassword.module.css'

const ChangePassword = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Change Password</h1>
      <Box className={Styles.inputbox}>
    <TextField
          id="outlined-password-input"
          color='black'
          label="Current Password"
          type="password"
          autoComplete="current-password"
        />
        </Box>
        <Box className={Styles.inputbox}>
    <TextField
          id="outlined-password-input"
          color='black'
          label="New Password"
          type="password"
          autoComplete="current-password"
        />
        </Box>
        <Box className={Styles.inputbox}>
    <TextField
          id="outlined-password-input"
          color='black'
          label="Confirm Password"
          type="password"
          autoComplete="current-password"
        />
        </Box>
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:'peru'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default ChangePassword
