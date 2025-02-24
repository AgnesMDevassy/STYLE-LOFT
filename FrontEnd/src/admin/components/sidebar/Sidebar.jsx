import React from "react";
import Styles from './Sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Link} from 'react-router-dom'
const Sidebar = () => {
    return(
        
        <div className={Styles.sidebar}>
            <div className={Styles.top}>
                <span className={Styles.logo}>Admin</span>
            </div><hr/>
            <div className={Styles.center}>
                <ul>
                    <p className={Styles.title}>MAIN</p>
                
                <li className={Styles.link}>
                <DashboardIcon className={Styles.icon}/>
                    <span>Dashboard</span>
                </li>
                <p className={Styles.title}>LIST</p>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/district'} >
                    <LocationOnOutlinedIcon  className={Styles.icon}/>
                        <span>District</span>
                    </Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/place'} >
                    <LocationOnOutlinedIcon  className={Styles.icon}/>
                        <span>Place</span>
                    </Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/category'} >
                    <CategoryOutlinedIcon  className={Styles.icon} />
                        <span>Category</span></Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/subcategory'} >
                    <CategoryOutlinedIcon className={Styles.icon}/>
                        <span>Subcategory</span></Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/type'} >
                    <StoreOutlinedIcon className={Styles.icon}/>
                        <span>Type</span></Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/size'} >
                    <StraightenOutlinedIcon className={Styles.icon}/>
                        <span>Size</span></Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/material'} >
                    <StraightenOutlinedIcon className={Styles.icon}/>
                        <span>Material</span></Link>
                </li>
                <li className={Styles.links}>
                    <Link className={Styles.link} to={'/Admin/boutiquetype'} >
                    <StoreOutlinedIcon className={Styles.icon}/>
                        <span>BoutiqueType</span></Link>
                </li>
                <li>
                    <p className={Styles.title}>USEFUL</p></li>
                    <li>
                    <Link className={Styles.link} to={'status'} >
                    <BarChartIcon className={Styles.icon} to={'status'} />
                        <span>Status</span></Link>
                    </li>
                    <li>
                    <Link className={Styles.link} to={'notification'}>
                    <NotificationsNoneOutlinedIcon className={Styles.icon}/>
                        <span>Notification</span></Link>
                    </li>
                    <p className={Styles.title}>SERVICES</p>
                    <li>
                    <Link className={Styles.link} to={'logs'}>
                    <PsychologyOutlinedIcon className={Styles.icon}/>
                        <span>Logs</span></Link>
                    </li>
                    <li>
                    <Link className={Styles.link} to={'settings'}>
                    <SettingsApplicationsIcon className={Styles.icon}/>
                        <span>Settings</span></Link>
                    </li>
                    <p className={Styles.title}>USER</p>
                    <li>
                    <Link className={Styles.link} to={'profile'}>
                    <AccountCircleOutlinedIcon className={Styles.icon}/>
                        <span>Profile</span></Link>
                    </li>
                    <li>
                    <Link className={Styles.link} to={'logout'}>
                    <LogoutOutlinedIcon className={Styles.icon}/>
                        <span>Logout</span></Link>
                    </li>
                    
                </ul>
                

            </div>
            <div className={Styles.bottom}>Color Option</div>
        </div>
        
    )
}
export default Sidebar