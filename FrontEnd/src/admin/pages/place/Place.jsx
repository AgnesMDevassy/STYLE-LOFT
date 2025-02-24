import React from 'react'
import Styles from './Place.module.css'
import { Button, Card, TextField, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material'

const Place = () => {
  return (
   <Card className={Styles.wrapper}>                 
       <h1>Place</h1>
       <Box className={Styles.inputbox}>
       <FormControl sx={{width:'210px'}}>
  <InputLabel id="demo-simple-select-label">Select District Name</InputLabel>
  <Select>
    <MenuItem value="">Ernakulam</MenuItem>
    <MenuItem value="">Thrissur</MenuItem>
    <MenuItem value="">Kottayam</MenuItem>
  </Select>
  </FormControl>
  </Box>
   
       <Box className={Styles.inputbox}>
           <TextField id="outlined-basic" color='black'  label="Enter Place Name" variant="outlined" />
       </Box>  
       
        <Box className={Styles.btnsub}>
       <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
       </Box>
   
   </Card>
  )
}

export default Place
