import React from 'react'
import { Home } from './Home/Home'
import { Navbar } from './Navbar/Navbar'
import { Market } from './Market/Market'
import { Aboutus } from './Aboutus/Aboutus'
import { Footer } from './footer/footer'
import { Health } from './Health/Health'
import {BrowserRouter ,Routes,Route} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/a" element={<Market/>}/>
        <Route path="/b" element={<Health/>}/>       
        <Route path="/c" element={<Aboutus/>}/>
      
        
    </Routes>
   
    <Footer/>   
    </BrowserRouter>
   
  )
}

export default App