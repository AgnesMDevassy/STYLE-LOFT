import React from 'react'
import AdminRoutes from '../routes/AdminRoutes'
import Styles from './app.module.css'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'

const Admin = () => {
  return (
    
    <div className={Styles.container}>
      <Sidebar/>

      <div className={Styles.homeContainer}>
        <Navbar/>
        <div>
        
        <AdminRoutes/>
        </div>
      </div>
    
    </div>
    )
}

export default Admin
