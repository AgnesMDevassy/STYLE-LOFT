import React from 'react'
import Styles from './Size.module.css'
import { Box, Button, Card, TextField } from '@mui/material'

const Size = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Size</h1>
    <Box className={Styles.inputbox}>
        <TextField id="outlined-basic" color='black' label="Size" variant="outlined" />
    </Box>  
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>

</Card>

  )
}

export default Size
