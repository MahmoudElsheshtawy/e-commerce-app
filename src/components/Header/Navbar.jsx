import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart ,AiOutlineSearch} from "react-icons/ai";
import Cart from '../Cart/Cart';
const Navbar = () => {
    const [scrolled,setScroll]= useState(false)
    const [showcart,setshowCart]= useState(false)
    
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




  return (
    <>
    <div className={`contaner ${scrolled ?"stiky-header":""}`}> 
          
              <div className='left'>
            <ul className='ul'>
                <NavLink className='li' to={'/'}>Home</NavLink>
                <NavLink className='li' to={'/About'}>About</NavLink>
                <NavLink className='li' to={'/Categories'}>Categories</NavLink>
            </ul>
        </div>



        <div className='center'><span>Sh </span>Store</div>



                    <div className='right'>
                    <AiOutlineSearch className='icon'/>
                    <AiOutlineHeart  className='icon'/>
                    <div className='cart'>
                    <CgShoppingCart onClick={()=>setshowCart(!showcart)} className='icon'/>
                    <span className='qut'>1</span>
                    </div>
                    


                    </div>

                    


              </div>



              {showcart &&<Cart setshowCart={setshowCart}/>}
              </>
  )
}

export default Navbar