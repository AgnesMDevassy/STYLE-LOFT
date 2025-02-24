import React from "react";
import Styles from './Navbar.module.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
const Navbar = ()=> {
    return(
        
        <div className={Styles.navbar}>
        <div className={Styles.wrapper}>
            <div className={Styles.search}>
                <input type="text" placeholder="Search...."/>
                <SearchOutlinedIcon/>
            </div>
            <div className={Styles.items}>
                <div className={Styles.item}>
                <LanguageOutlinedIcon className={Styles.icon}/>
                    English
                </div>
                <div className={Styles.item}>
                <DarkModeOutlinedIcon className={Styles.icon}/>
                </div>
                <div className={Styles.item}>
                <FullscreenExitOutlinedIcon className={Styles.icon}/>
                </div>
                <div className={Styles.item}>
                <NotificationsNoneOutlinedIcon className={Styles.icon}/>
                <div className={Styles.counter}>1</div>
                </div>
                <div className={Styles.item}>
                <ChatBubbleOutlineOutlinedIcon className={Styles.icon} />
                <div className={Styles.counter}>2</div>
                </div>
                <div className={Styles.item}>
                <ListOutlinedIcon className={Styles.icon}/>
                </div>
            </div>
        </div>
        </div>
        
    )
}
export default Navbar

