import React from 'react'
import Styles from './Type.module.css'
import { Box, Button, Card, TextField } from '@mui/material'


const Type = () => {
  return (
    <Card className={Styles.wrapper}>
                            
        <h1>Type </h1>
        <Box className={Styles.inputbox}>
            <TextField id="outlined-basic" color='black' label="Type" variant="outlined" />
        </Box>  
         <Box className={Styles.btnsub}>
        <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
        </Box>
    
    </Card>
  )
}

export default Type
