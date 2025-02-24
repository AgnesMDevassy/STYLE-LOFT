import React from 'react'
import Home from '../admin/pages/home/Home.module'
import { Route, Routes } from 'react-router-dom'
import Category from '../admin/pages/category/Category'
import Subcategory from '../admin/pages/subcategory/Subcategory'
import Size from '../admin/pages/size/Size'
import Type from '../admin/pages/type/Type'
import Material from '../admin/pages/material/Material'
import District from '../admin/pages/district/District'
import Place from '../admin/pages/place/Place'
import Boutiquetype from '../admin/pages/boutiquetype/BoutiqueType'
import AdminPage from '../admin/pages/admin/AdminPage'

const AdminRoutes = () => {
  return (

        <Routes>
        <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='adminpage/*' element={<AdminPage/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='subcategory' element={<Subcategory/>}/>
        <Route path='district' element={<District/>}/>
        <Route path='place' element={<Place/>}/>
        <Route path='size' element={<Size/>}/>
        <Route path='type' element={<Type/>}/>
        <Route path='material' element={<Material/>}/>
        <Route path='boutiquetype' element={<Boutiquetype/>}/>
        

        </Route>
        </Routes>
        
  )
}

export default AdminRoutes
