import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/App'
import Guest from '../guest/App'
import Boutique from '../boutique/App'
import User from '../user/App'



const MainRoutes = () => {
  return (
    <Routes>
        <Route path='admin/*' element={<Admin/>}/>
        <Route path='guest/*' element={<Guest/>}/>
        <Route path='boutique/*' element={<Boutique/>}/>
        <Route path='user/*' element={<User/>}/>
    </Routes>
  )
}

export default MainRoutes
