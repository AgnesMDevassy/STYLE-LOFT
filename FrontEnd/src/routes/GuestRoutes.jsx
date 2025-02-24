import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Login from '../guest/pages/login/Login'
import LandingPage from '../guest/landingpage/LandingPage'

const GuestRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='login' element={<Login/>}/>
        {/* <Route path='useregistration' element={<UserRegistartion/>}/> */}
        <Route path='landingpage' element={<LandingPage/>}/>
      </Routes>
    </div>
  )
}

export default GuestRoutes
