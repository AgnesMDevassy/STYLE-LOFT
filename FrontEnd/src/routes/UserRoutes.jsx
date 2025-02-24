import React from 'react'
import HomePage from '../user/pages/homepage/HomePage'
import { Route, Routes } from 'react-router-dom'

const UserRoutes = () => {
  return (
    <Routes>
    <Route path='/'>
    <Route index element={<HomePage/>}/>
    </Route>
    </Routes>
  )
}

export default UserRoutes
