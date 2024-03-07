import React from 'react'
import {Routes,Route} from 'react-router-dom'
import IntroPage from '../Pages/IntroPage'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

const AllRoutes
 = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<IntroPage/>}/>
            <Route path='/home' element={<Homepage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
        </Routes>
    </div>
  )
}

export default AllRoutes
