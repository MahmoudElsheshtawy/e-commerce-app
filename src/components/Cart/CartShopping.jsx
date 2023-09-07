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
      style={{
        display:'flex',
      justifyContent:'space-between',
      backgroundColor:'#f2f2f2',
      marginBottom:'5px'
      ,alignItems:'center' , gap:2 , }}>
        
      
         <div  style={{
          display:'flex', 
          //  backgroundColor:"InfoText",
          alignItems:'center',
          // color:'#fff'
           }}>
         <img src={item.imgUrl} alt='cart-img' style={{
            width:'90px',
            height:'90px',
            objectFit:'cover',
            // backgroundColor:''

         }}/>
      <div className="allinfo">
      <div className='text-info' style={{ 
          display:'flex',
          alignItems:'center',
          // marginTop:'5px'
          }}>
              <span style={{fontFamily:'DM Serif Display'}}> {item.name}</span>
              {qunatity>1&& <span style={{color:'#aaa',fontSize:'2px',marginLeft:'3px'}}>x{qunatity}</span>}
         </div>
       
         <div className='price' style={{display:'flex'}}>
               <spen> {formatCurrency(item.price)}</spen>
         </div>
      </div>
        
         </div>
         {/* 2 */}
         <div className='calc' style={{display:'flex',alignItems:'center'}}>
         {formatCurrency(item.price*qunatity)}
         <button style={{border:'none',marginLeft:'10px',backgroundColor:'#dfdfdf', cursor:'pointer',alignItems:'center', color:'#000',marginRight:'5px',borderRadius:'50%' ,fontSize:'6px', width:'20px',height:"20px" ,}} onClick={()=>removeItemFromCart(id)}>X</button>
         </div>
         



      </div>
    
    
    
    </>
  )
}

export default CartShopping