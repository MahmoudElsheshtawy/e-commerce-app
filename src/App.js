import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Header/About";
// import Categories from "./components/Category/Categories";
import Footer from "./components/Footer/Footer";
// import Category from "./components/Category/Categories";
// import AllCategory from "./components/Category/allcaregory/AllCategory";
import ShoppingCartProvider from '../src/Context/ShoppingCartContext'
import React from "react";
const  App=()=> {
  return (
   
     <ShoppingCartProvider>
   
   <Navbar/>
   <Routes>
     <Route path="/" element={<Home />}/>
     {/* <Route path="/Categories" element={<Categories />}/> */}
     <Route path="/About" element={<About />}/>
   </Routes>
   {/* <Category/> */}
  
   {/* <AllCategory  /> */}
   <Footer/>
 </ShoppingCartProvider>

  
    
  );
}

export default App;
