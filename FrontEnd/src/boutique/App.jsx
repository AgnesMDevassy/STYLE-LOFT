import React from 'react'
import BoutiqueRoutes from '../routes/BoutiqueRoutes'
import Navbar from './components/navbar/Navbar'
import { useLocation } from 'react-router'



const Boutique = () => {
  let {pathname} = useLocation()
  return (
    <div>
   <div>
    <Navbar pathname={pathname}/>
    </div>
  <div>
       <BoutiqueRoutes/>
  </div>
  </div>
    
  )
}

export default Boutique
