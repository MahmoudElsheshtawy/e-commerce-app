import { createContext, useContext, useState } from "react";
// import Allabout from "../components/Allabout";
import Navbar from "../components/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import About from "../components/Header/About";
import Footer from "../components/Footer/Footer";
// import AllCategory from "../components/Category/allcaregory/AllCategory";
import Cartitem from "../components/Cartitem/Cartitem";
import Category from "../components/Category/Categories";




const ShoppingCartContext = createContext({})

const ShoppingCartProvider = ({Children}) => {

  // conuter
 
    const [cartItems ,setCartItems] =useState([]);
    // counter
    const cartQuntity = cartItems.reduce((qunatity,item)=>item.qunatity+qunatity,0)
    // qunatity in cart
    const gitItemqunatity =(id)=>{
        return cartItems.find((item)=>item.id===id)?.qunatity || 0
    };
    // qunatity apper in cart +1 
    const increaseCartQunatity =(id)=>{
    //    edit state
    setCartItems((currntitem)=>{
         if (currntitem.find((item)=>item.id === id )== null) {
            return [...currntitem ,{id,qunatity:1}]
         }else{              
            return  currntitem.map((item) => {
                if (item.id ===id){

                     return {...item ,qunatity:item.qunatity+1}
                    
                    }else{
                        return item
                    }
                    
                    
                    }
                    )
            }      
    } );};
    // qunatity apper in cart -1 

    const decreaseCartQunatity =(id)=>{
        setCartItems((currntitem)=>{
         if (currntitem.find((item)=>item.id ===id)?.qunatity=== 1) {
            return currntitem.filter((item)=>item.id!==id)
            
         }else{
          return  currntitem.map((item)=>{
             if(item.id ===id){
              return { ...item ,qunatity: item.qunatity -1}
             }
             else{
                return item
             }
            })
         }
        })
    };
// removeitem from cart
// const decreaseCartQunatity = (id) => {
//     setCartItems((currntitem) => {
//       if (currntitem.find((item) => item.id === id)?.qunatity === null) {
//         return currntitem.filter((item) => item.id !== id);
//       } else {
//         return currntitem.map((item) => {
//           if (item.id === id) {
//             return { ...item, qunatity: item.qunatity - 1 };
//           } else {
//             return item;
//           }
//         });
//       }
//     });
//   };

const removeItemFromCart =(id)=>{
  setCartItems((currntitem)=>currntitem.filter((item)=>item.id !==id));
}
  return (
   <ShoppingCartContext.Provider
   value={{
    cartItems,
    gitItemqunatity,
    increaseCartQunatity,
    decreaseCartQunatity,
    removeItemFromCart,
    cartQuntity,

}}
   

   >
    {Children}
   
    <Navbar/>
   <Routes>
     <Route path="/" element={<Home />}/>
     {/* <Route path="/Categories" element={<Categories />}/> */}
     <Route path="/About" element={<About />}/>
   </Routes>
   <Category/>
   {/* <Categories /> */}
   {/* <AllCategory  /> */}
   <Cartitem/>
  
   <Footer/>
   </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartProvider;

// create a fun for call eny commponent
export const useShoppingCart =()=>{
    return useContext(ShoppingCartContext)
};