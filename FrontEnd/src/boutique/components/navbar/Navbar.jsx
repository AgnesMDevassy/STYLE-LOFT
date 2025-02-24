import React from 'react'
import Styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = ({pathname}) => {
  return (

    <div className={ pathname=== "/boutique"? Styles.container:Styles.container1}>
      <div className={Styles.logo}>Style Loft</div>
        <ul className={Styles.nav_link}>
            <li className={Styles.linksss}>
                <span className={Styles.links}>Profile</span>
                <div className={Styles.mainblock}>
                    <div>
                        <div>
                            <Link to={'../boutique/myprofile'} className={Styles.links} >
                            <span className={Styles.links}>MyProfile</span></Link>
                        </div>
                        <div>
                            <Link to={'../boutique/editprofile'} className={Styles.links} >
                            <span className={Styles.links}>Edit Profile</span></Link>
                        </div>
                        <div>
                            <Link to={'../boutique/changepassword'} className={Styles.links} >
                            <span className={Styles.links} >Change Password </span></Link>
                        </div>
                    </div>
                </div>
            </li>
            <li><Link to={'/boutique/product'} className={Styles.links} >
                <span className={Styles.links}> Product</span>
                </Link>
            </li>
        <li>
            <Link to={'/boutique/stylist'} className={Styles.links} >
            <span className={Styles.links}>Stylist</span>
            </Link>
        </li>
        <li>
            <Link to={'/boutique/gallery'} className={Styles.links} >
            <span className={Styles.links}>Gallery</span>
            </Link>
        </li>
        <li>
            <Link to={'/boutique/stock'} className={Styles.links} >
            <span className={Styles.links}>Stock</span>
            </Link>
        </li>

         </ul>
      </div>
  )
}

export default Navbar