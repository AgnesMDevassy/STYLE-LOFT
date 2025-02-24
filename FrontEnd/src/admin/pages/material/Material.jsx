import React from "react";
import Styles from './Material.module.css'
import { Box, Button, Card, TextField } from "@mui/material";
const Material= () => {
    return(
        <Card className={Styles.wrapper}>
                        
        <h1>Material</h1>
        <Box className={Styles.inputbox}>
            <TextField id="outlined-basic" color='black' label="Material" variant="outlined" />
        </Box>  
         <Box className={Styles.btnsub}>
        <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
        </Box>

</Card>
    )
}
export default Material