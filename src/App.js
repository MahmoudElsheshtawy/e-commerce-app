import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Home from "./components/Home/Home";
import About from "./components/Header/About";
// import Categories from "./components/Category/Categories";
import Footer from "./components/Footer/Footer";
import Category from "./components/Category/Categories";
import AllCategory from "./components/Category/allcaregory/AllCategory";

function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    {/* <Route path="/Categories" element={<Category />}/> */}
    <Route path="/About" element={<About />}/>

   </Routes>
   <Category/>
   <AllCategory/>
   <Footer/>
    
    
    
    
    
    </>
  );
}

export default App;
