import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart ,AiOutlineSearch} from "react-icons/ai";
import Cart from '../Cart/Cart';
import { useShoppingCart } from '../../Context/ShoppingCartContext';
const Navbar = () => {
    const [scrolled,setScroll]= useState(false)
    const [showcard,setshowCard]= useState(false)
    
    const handleScroll =()=>{
        const offset =window.scrollY;
        if (offset >110) {
            setScroll(true)
        }else{
            setScroll(false)
        }
        
      }
    useEffect(() => {
         window.addEventListener("scroll",handleScroll);
    }, []);


const {cartQuntity}= useShoppingCart()

  return (
    <>
    <div id='Navbar' className={`contaner ${scrolled ?"stiky-header":""}`}> 
          
    



        <div className='center'  ><a href='#' style={{textDecoration:'none' , color:'#fff'}}><span>Sh Store</span></a></div>



                    <div className='right'>
                    <AiOutlineSearch className='icon'/>
                    <AiOutlineHeart  className='icon'/>
                    <div className='cart'>
                    <CgShoppingCart onClick={()=>setshowCard(!showcard)} className='icon'/>
                    <span className='qut' onClick={()=>setshowCard(!showcard)} >{cartQuntity}</span>
                    </div>
                    


                    </div>

                    


              </div>



              {showcard &&<Cart setshowCart={setshowCard}/>}
              </>
  )
}

export default Navbar