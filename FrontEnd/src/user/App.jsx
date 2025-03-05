import React from 'react'
import UserRoutes from '../routes/UserRoutes'

import Navbar from './components/navbar/Navbar'
import { useLocation } from 'react-router'
const User = () => {
    let {pathname} = useLocation()
  return (
    <div>
   <div>
    <Navbar pathname={pathname}/>
    </div>
    <div>
      <UserRoutes/>
    </div>
    </div>
  )
}

export default User
