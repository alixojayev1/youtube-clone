import { Routes, Route } from "react-router-dom";

import './App.css'

import Navigation from './Commponents/Navigation/Navigation'
import Section from './Commponents/Section/Section'
import Cards from "./Commponents/Cards";
import Userprops from "./Commponents/props/Userprops";
import Footer from "./Commponents/Footer/Footer";
import Register from "./Commponents/Register/Register";
import Login from "./Commponents/Login/Login";




const App = () => {
 

  return (


    <div className=''>

      <div className="container">

        <Navigation />
         <Section />
           <Routes>
             <Route path="/" element={<Cards />} />
             <Route path={`/:title`} element={<Userprops />} />
             <Route path="/register" element ={<Register/>}/>
             <Route path = "/login" element= {<Login/>}/>
            </Routes>
          <Footer />
      
      </div>
    </div>

  
  


  )
}

export default App