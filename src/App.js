import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Header/About";
import Footer from "./components/Footer/Footer";
import ShoppingCartProvider from '../src/Context/ShoppingCartContext'
import React from "react";
import Cartitem from "./components/Cartitem/Cartitem";
// import Categories from "./components/Category/Categories";
const  App=()=> {
  return (
  //  i can comment all component put not  <ShoppingCartProvider/>
     <ShoppingCartProvider>
   
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home />}/>
              {/* <Route path="/Categories" element={<Categories />}/> */}
              <Route path="/About" element={<About />}/>
            </Routes>
            <Cartitem/>
            <Footer/>
      </ShoppingCartProvider>

  
    
  );
}

export default App;
