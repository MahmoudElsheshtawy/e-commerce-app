import React from 'react'
import style from './Cart.module.css'
const Cart = ({setshowCart}) => {
  return (
    <div className={style.contaner}> 
        <div onClick={()=>setshowCart(false)} className={style.layer}></div>
        <div className={style.content}>
            <div className={style.head}>
                <span>Shopping Cart</span>
                <button onClick={()=>setshowCart(false)}>x</button>
            </div>
        </div>

           

    </div>
  )
}

export default Cart