import React from 'react'
import Styles from './Subcategory.module.css'
import { Box, Button, Card, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'

const Subcategory = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>SubCategory</h1>
    <Box className={Styles.inputbox}>
       <FormControl sx={{width:'210px'}}>
  <InputLabel id="demo-simple-select-label" color='black'>Select Category</InputLabel>
  <Select>
    <MenuItem value="">Bridal</MenuItem>
    <MenuItem value="">Casual</MenuItem>
    <MenuItem value="">Part Wear</MenuItem>
  </Select>
  </FormControl>
  </Box>
    <Box className={Styles.inputbox}>
        <TextField id="outlined-basic"  color='black' label="SubCategory" variant="outlined" />
    </Box>  
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default Subcategory
