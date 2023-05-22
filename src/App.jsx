import { Routes, Route, } from "react-router-dom";
import { useState } from "react";
import {ThemeProvider} from 'react'
import './App.css'

import Navigation from './Commponents/Navigation/Navigation'
import Section from './Commponents/Section/Section'
import Cards from "./Commponents/Cards";
import Userprops from "./Commponents/props/Userprops";
import Footer from "./Commponents/Footer/Footer";

const App = () => {

  return (

  
     <div className=''>
      <Navigation />
      <div className="container">
        <div className="">
          <Section />
          <Routes>
            <Route path="/" element={<Cards />} />
            <Route path={`/:title`} element={<Userprops />} />

          </Routes>
          <Footer />
        </div>
      </div>

    </div>
  


  )
}

export default App