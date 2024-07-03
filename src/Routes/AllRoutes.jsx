import React from 'react'
import {Routes,Route,useLocation} from 'react-router-dom'
import IntroPage from '../Pages/IntroPage'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Movies from '../Pages/Movies'
import Series from '../Pages/Series'
import Anime from '../Pages/Anime'
import SearchResults from '../Pages/SearchResults'
import SingleItemPage from '../Pages/SingleItemMov'
import SIngleItemTV from '../Pages/SIngleItemTV'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Profile from '../Pages/Profile'
import PrivateRoute from './PrivateRoute'
import Watchlist from '../Pages/Watchlist'
import Favorite from '../Pages/Favorite'

const AllRoutes
 = () => {

  const location = useLocation();
  const excludeNavbarFooter =
    location.pathname !== '/' &&
    location.pathname !== '/login' &&
    location.pathname !== '/signup';
  return (
    <div>
      {excludeNavbarFooter && <Navbar />}
        <Routes>
          
            <Route path='/' element={<IntroPage />}/>
            <Route path='/home' element={<Homepage />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/movies' element={<Movies />}/>
            <Route path='/series' element={<Series />}/>
            <Route path='/anime' element={<Anime />}/>
            <Route path='/search/:searchquery' element={<SearchResults />}/>
            <Route path='/detailsMov/:id' element={<SingleItemPage />}/>
            <Route path='/detailsTV/:id' element={<SIngleItemTV />}/>
            <Route path='/profile' element={
              <PrivateRoute>
            <Profile />
            </PrivateRoute>
            }></Route>
            <Route path='/watchlist' element={
              <PrivateRoute>
            <Watchlist />
            </PrivateRoute>
            }></Route>
            <Route path='/favorite' element={
              <PrivateRoute>
            <Favorite />
            </PrivateRoute>
            }></Route>
        </Routes>
        {excludeNavbarFooter && <Footer />}
    </div>
  )
}

export default AllRoutes
