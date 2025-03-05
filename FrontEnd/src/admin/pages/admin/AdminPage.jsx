import React,{ useState} from 'react'
import Styles from './AdminPage.module.css'
import { Box, Button, Card,  TextField } from '@mui/material'
import { AccountCircle} from '@mui/icons-material'
import HttpsIcon from '@mui/icons-material/Https';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import axios from 'axios'

const AdminPage = () => {
  const [Name,setName] = useState("")
  const [Email,setEmail] = useState("")
  const [Password,setPassword] = useState("")

const handleSubmit = (e) => {
  e.preventDefault()
  const data={
      adminName:Name,
      adminEmail:Email,
      adminPassword:Password,
  }
  axios.post("http://localhost:5000/Admin/",data).then((res) => {
      console.log(res);

  })
}
  return (
    <Card className={Styles.wrapper} component={'form'} onSubmit={handleSubmit}>
                        
    <h1>Admin</h1>
    
    <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <AccountCircle sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Name" variant="standard"  onChange={(e) => setName(e.target.value)}/>
      </Box>
      <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end'}}>
        <EmailOutlinedIcon  sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Email" variant="standard"  onChange={(e) => setEmail(e.target.value)}/>
      </Box> 
      <Box className={Styles.inputbox} sx={{ display: 'flex', alignItems: 'flex-end' }}>
        <HttpsIcon  sx={{ color: ' teal', mr: 1, my: 0.5 }} />
        <TextField id="input-with-sx" label="Password" variant="standard"  onChange={(e) => setPassword(e.target.value)}/>
      </Box> 
     <Box className={Styles.btnsub}>
    <Button type='submit' sx={{backgroundColor:' teal'}}  variant="contained">Submit</Button>
    </Box>

</Card>
  )
}

export default AdminPage
