import React from 'react'
import Styles from './Customization.module.css'
import { Box, Button, Card, TextField } from '@mui/material'
const Customization = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Customization</h1>
     
        <Box className={Styles.inputbox}>
        <TextField
          id="outlined-textarea"
          color='black' 
          label="Customization Details"
          multiline
        />
        </Box>
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:'peru'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default Customization
