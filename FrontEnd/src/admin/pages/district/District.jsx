import React from 'react'
import Styles from './District.module.css'
import { Button, Card, TextField, Box } from '@mui/material'

const District = () => {
  return (
   <Card className={Styles.wrapper}>
                           
       <h1>District</h1>
       <Box className={Styles.inputbox}>
           <TextField id="outlined-basic" color='black' label="Enter District Name" variant="outlined" />
       </Box>  
        <Box className={Styles.btnsub}>
       <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
       </Box>
   
   </Card>
  )
}

export default District
