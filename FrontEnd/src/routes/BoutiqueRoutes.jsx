import React from 'react'
import Product from '../boutique/pages/product/Product'
import HomePage from '../boutique/pages/homepage/HomePage'
import Stock from '../boutique/pages/stock/Stock'
import Stylist from '../boutique/pages/stylist/Stylist'
import { Route, Routes } from 'react-router-dom'
import MyProfile from '../boutique/pages/profile/myprofile/MyProfile'
import EditProfile from '../boutique/pages/profile/editprofile/EditProfile'
import ChangePassword from '../boutique/pages/profile/changepassword/ChangePassword'
import Gallery from '../boutique/pages/gallery/Gallery'

const BoutiqueRoutes = () => {
  return (
    <Routes>
    <Route path='/'>
    <Route index element={<HomePage/>}/>
    <Route path='myprofile/' element={<MyProfile/>}/>
    <Route path='editprofile/*' element={<EditProfile/>}/>
    <Route path='changepassword' element={<ChangePassword/>}/>
    <Route path='product/*' element={<Product/>}/>
    <Route path='stock/*' element={<Stock/>}/>
    <Route path='stylist/*' element={<Stylist/>}/>
    <Route path='gallery/*' element={<Gallery/>}/>
    </Route>
    </Routes>
  )
}

export default BoutiqueRoutes
