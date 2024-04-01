import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Adblog from './pages/Adblog'
import Error from './pages/Error'
import Layout from './layout/Layout'
import "./App.css"
import Blog from './pages/Blog'
import User from './pages/User'

const App = () => {
  return (
  <BrowserRouter>
  <Layout/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/addblog' element={<Adblog/>}/>
    <Route path='/addblog/:title' element={<Blog/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/user' element={<User/>}/>
  </Routes>
  </BrowserRouter>
  )
}

export default App