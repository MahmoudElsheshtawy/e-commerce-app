import React from 'react'
import style from './Cart.module.css'
import { useShoppingCart } from '../../Context/ShoppingCartContext'
import CartShopping from './CartShopping'
import formatCurrency from '../formatCurrency'
import AllCategorys from '../../AllCategorys.json'
const Cart = ({setshowCart}) => {
  const {cartItems}=useShoppingCart()
  return (
    <div className={style.contaner}  > 
        <div onClick={()=>setshowCart(false)} className={style.layer}></div>
        <div className={style.content}>
            <div className={style.head} style={{display:'flex',alignItems:'center',justifyContent:'space-btween',flexDirection:'column'}}>
                <span>Shopping Cart</span>
                <button onClick={()=>setshowCart(false)}>x</button>
            </div>
            <div className={style.body}>
              {
               cartItems.map((item)=>(
             <CartShopping key={item.id} {...item}/>
               ))
              }
              <span className={style.total}>Total price: </span>
               {formatCurrency(
                cartItems.reduce((total,cartItem)=>{
                  const item = AllCategorys.find((i)=>i.id === cartItem.id)
                  return total   + (item?.price || 0)*cartItem.qunatity;

                },0)
               )}

            </div>
        </div>

           

    </div>
  )
}

export default Cart