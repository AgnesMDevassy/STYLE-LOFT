import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className={Styles.container}>
        <div className={Styles.heading}>
            <h1>Style Loft</h1>
        </div>
         <ul className={Styles.navlink}>
            <li>
                    <Link to={'../Login'} className={Styles.links}>
                        <span className={Styles.linkname}>Login</span>
                    </Link>
            </li>
            <li>
                    <Link to={'../Registration'} className={Styles.links}>
                        <span  className={Styles.linkname}>Register</span>
                    </Link>
            </li>
            <li>
                    <Link to={'../Home'} className={Styles.links}  >
                        <span  className={Styles.linkname}>Home</span>
                    </Link>
            </li>
            <li>
                    <Link to={'../About'} className={Styles.links}  >
                        <span  className={Styles.linkname}>About</span>
                    </Link>
            </li>
            </ul>
       
    
    </div>
  )
}

export default Navbar
