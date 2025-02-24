import React from 'react'
import Styles from './Boutiquetype.module.css'
import { Box, Button, Card, TextField } from '@mui/material'
const Boutiquetype = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Boutiquetype</h1>
    <Box className={Styles.inputbox}>
        <TextField id="outlined-basic" color='black' label="Boutiquetype" variant="outlined" />
    </Box>  
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default Boutiquetype
