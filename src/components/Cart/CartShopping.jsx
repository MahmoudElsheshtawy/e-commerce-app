/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import AllCategors from '../../AllCategorys.json'
import formatCurrency from '../formatCurrency'
import { useShoppingCart } from '../../Context/ShoppingCartContext'
const CartShopping = ({id , qunatity}) => {
    // if id in the state if is her return you
    const item =AllCategors.find((i)=>i.id ===id)
    if (item === null) {
        return null
        
    }
    const {removeItemFromCart}=useShoppingCart()
  return (
    <>
      <div className="top"
      style={{display:'flex',
      justifyContent:'space-between',
      backgroundColor:'antiquewhite',
      marginBottom:'5px'
      ,alignItems:'center' , gap:2 , }}>
        
      
         <div  style={{display:'flex', alignItems:'center' }}>
         <img src={item.imgUrl} alt='cart-img' style={{
            width:'100px',
            height:'100px',
            objectFit:'cover'

         }}/>
         <div style={{ }}>
              <span style={{fontFamily:'DM Serif Display'}}> {item.name}</span>
              {qunatity>1&& <span style={{color:'#aaa',fontSize:'2px',marginLeft:'3px'}}>x{qunatity}</span>}
         </div>
       
         <div className='price'>
         <spen> {formatCurrency(item.price)}</spen>

         </div>
        
         </div>
         <div className='calc'>
         {formatCurrency(item.price*qunatity)}
         <button onClick={()=>removeItemFromCart(id)}>X</button>
         </div>
         



      </div>
    
    
    
    </>
  )
}

export default CartShopping