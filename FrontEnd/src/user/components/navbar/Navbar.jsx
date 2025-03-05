import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = ({pathname}) => {
  return (
    
    <div className={ pathname === "/user"? Styles.container:Styles.container1}>
      <div className={Styles.logo}>Style Loft</div>
        <ul className={Styles.nav_link}>
            <li className={Styles.linksss}>
                <span className={Styles.links}>Profile</span>
                <div className={Styles.mainblock}>
                    <div>
                        <div>
                            <Link to={'../user/myprofile'} className={Styles.links} >
                            <span className={Styles.links}>MyProfile</span></Link>
                        </div>
                        <div>
                            <Link to={'../user/editprofile'} className={Styles.links} >
                            <span className={Styles.links}>Edit Profile</span></Link>
                        </div>
                        <div>
                            <Link to={'../user/changepassword'} className={Styles.links} >
                            <span className={Styles.links} >Change Password </span></Link>
                        </div>
                    </div>
                </div>
            </li>
            <li><Link to={'/user/booking'} className={Styles.links} >
                <span className={Styles.links}> Booking</span>
                </Link>
            </li>
        <li>
            <Link to={'/user/cart'} className={Styles.links} >
            <span className={Styles.links}>Cart</span>
            </Link>
        </li>
        <li>
            <Link to={'/user/chat'} className={Styles.links} >
            <span className={Styles.links}>Chat</span>
            </Link>
        </li>
        <li>
            <Link to={'/user/customization'} className={Styles.links} >
            <span className={Styles.links}>Customization</span>
            </Link>
        </li>

         </ul>
      </div>
  )
}
  


export default Navbar
