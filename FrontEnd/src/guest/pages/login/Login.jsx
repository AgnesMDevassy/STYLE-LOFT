import React from 'react'
import Styles from './login.module.css'
import Image from '../../../assets/login.png'
import {  Lock, Person2Rounded } from '@mui/icons-material'




  
const Login = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.image}>
            <span className={Styles.image_bg}>
                  <img src={Image} alt='image'></img></span>
        </div>
    <div className={Styles.wrapper}>
        <form action=''>
            <h1>Login</h1>
   
            <div className={Styles.inputbox}>
                <input type='text'placeholder='Username' required/>
                <Person2Rounded className={Styles.icon}/>
            </div>
            <div className={Styles.inputbox}>
                <input type='password'placeholder='Password' required/>
                <Lock className={Styles.icon}/>
            </div>
            <div className={Styles.forgot}>
                <label><input type='checkbox'/>Remember me</label>
                <a href='#'>Forgot password</a>
            </div>
            <button type='submit'>Login</button>
            
        </form>

    </div>
    </div>
    
  )
}

export default Login