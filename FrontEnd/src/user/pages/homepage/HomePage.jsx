import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Image from '../../../assets/userhome.png'
import Styles from './HomePage.module.css'
const HomePage = () => {
  return (
    <div>
      <Navbar/>
    <div className={Styles.images}>
            <img src={Image}></img>
            </div>
            </div>
  )
}

export default HomePage
