import React from 'react'
import HomePage from '../user/pages/homepage/HomePage'
import { Route, Routes } from 'react-router-dom'
import MyProfile from '../user/pages/profile/myprofile/MyProfile'
import EditProfile from '../user/pages/profile/editprofile/EditProfile'
import ChangePassword from '../user/pages/profile/changepassword/ChangePassword'
import Booking from '../user/pages/booking/Booking'
import Cart from '../user/pages/cart/Cart'
import Chat from '../user/pages/chat/Chat'
import Customization from '../user/pages/customization/Customization'
import Complaint from '../user/pages/complaint/Complaint'
const UserRoutes = () => {
  return (
    <Routes>
    <Route path='/'>
    <Route index element={<HomePage/>}/>
    <Route path='myprofile/' element={<MyProfile/>}/>
    <Route path='editprofile/*' element={<EditProfile/>}/>
    <Route path='changepassword' element={<ChangePassword/>}/>
    <Route path='booking/*' element={<Booking/>}/>
    <Route path='cart/*' element={<Cart/>}/>
    <Route path='chat/*' element={<Chat/>}/>
    <Route path='customization/*' element={<Customization/>}/>
    <Route path='complaint/*' element={<Complaint/>}/>

    </Route>
    </Routes>
  )
}

export default UserRoutes
