import React from 'react'
import Login from './Login'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Tables from './Tables'
import Signup from './Signup'



function App() {
  return (
    <BrowserRouter>

     <Routes>
      
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/Header' element={<Header/>}></Route>
      <Route path='/Footer' element={<Footer/>}></Route>
      <Route path='/Tables' element={<Tables/>}></Route>
    
     </Routes>

    </BrowserRouter>
    
  )
}

export default App