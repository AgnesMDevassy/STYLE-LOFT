import React from "react";
import Styles from './Home.module.css'
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widgets/Widget";


const Home= () => {
    return(
       
        <div className={Styles.widgets}>
            <Widget/>
            <Widget/>
            <Widget/>
            <Widget/>
        </div>
        
        
    )
}
export default Home