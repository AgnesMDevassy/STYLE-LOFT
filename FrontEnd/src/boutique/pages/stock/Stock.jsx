import { Box, Button, Card, TextField } from '@mui/material'
import React from 'react'
import Styles from './Stock.module.css'

const Stock = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Stock</h1>
      <Box className={Styles.inputbox}>
      <TextField label="Quantity" color='black' id="outlined-size-normal" />
        </Box>
        
        <Box className={Styles.inputbox}>
        <TextField label="Product" color='black' id="outlined-size-normal"  />
          </Box>
          <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' palevioletred'}}  variant="contained">Submit</Button>
    </Box>
          </Card>
  )
}

export default Stock
