import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Header/About";
import Footer from "./components/Footer/Footer";
import ShoppingCartProvider from '../src/Context/ShoppingCartContext'
import React from "react";
import Cartitem from "./components/Cartitem/Cartitem";

const  App=()=> {
  return (

     <ShoppingCartProvider>
   
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
          
              {/* <Route path="/About" element={<About />}/> */}
            </Routes>
            <Cartitem/>
            <Footer/>
      </ShoppingCartProvider>

  
    
  );
}

export default App;
