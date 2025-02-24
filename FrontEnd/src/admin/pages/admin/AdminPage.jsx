import React from 'react'
import Styles from './AdminPage.module.css'
import { Box, Button, Card,  TextField } from '@mui/material'
import { AccountCircle} from '@mui/icons-material'
import HttpsIcon from '@mui/icons-material/Https';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
const AdminPage = () => {
  return (
    <Card className={Styles.wrapper}>
                        
    <h1>Admin</h1>
    
    <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard" />
      </Box>
      <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <EmailOutlinedIcon  sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard" />
      </Box> 
      <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <HttpsIcon  sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard" />
      </Box> 
     <Box className={Styles.btnsub}>
    <Button sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default AdminPage
