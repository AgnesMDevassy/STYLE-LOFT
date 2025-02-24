import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Image from '../../assets/img.png'
import Styles from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <div>
        <div>
        <Navbar/>
        <div className={Styles.image}>
        <img src={Image}></img>
        </div>
        <div className={Styles.content}>
            <h1>Elevate Your Wardrobe</h1>
        </div>
      
    </div>
    </div>
  )
}

export default LandingPage
