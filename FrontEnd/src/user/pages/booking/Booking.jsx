import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import Styles from './Booking.module.css'

const booking = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Booking</h1>
      <Box className={Styles.inputbox}>
      <TextField id="outlined-basic" color='black' label="Product Name" variant="outlined" />
        </Box>
       
        <Box className={Styles.inputbox}>
        <TextField id="outlined-basic"  color='black'  label="Product Price" variant="outlined" />
        </Box>

        <Box className={Styles.inputbox}>
        <TextField
          id="outlined-textarea"
          color='black' 
          label="Product Details"
          multiline
        />
        </Box>
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' rgb(238, 112, 112)'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default booking
