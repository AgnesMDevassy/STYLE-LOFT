import React from "react";
import Styles from './category.module.css'
import { Box, Button, Card, TextField } from "@mui/material";
const Category= () => {
    return(
        <Card className={Styles.wrapper}>
                        
        <h1>Category</h1>
        <Box className={Styles.inputbox}>
            <TextField id="outlined-basic"  color='black' label="Category" variant="outlined" />
        </Box>  
         <Box className={Styles.btnsub}>
        <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
        </Box>

</Card>
    )
}
export default Category