import React from "react";
import Styles from'./Widget.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
const Widget = () => {
return(
    <div className={Styles.widget}>
        <div className={Styles.left}>
            <span className={Styles.title}>USERS</span>
            <span className={Styles.counter}>21312</span>
            <span className={Styles.link}>See all user</span>
        </div>
        <div className={Styles.right}>
            <div className={Styles.percentage}>
            <KeyboardArrowUpIcon className={Styles.icon}/>
                20%
                </div>
                <PersonOutlinedIcon className={Styles.icon}/>
        </div>
    </div>
    
)
}
export default Widget
