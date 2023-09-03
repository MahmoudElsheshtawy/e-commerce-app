/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Category.css'
import Category from "../Category/Category.json"
const Categories = () => {
  return (
  <div className='Category'>
      <div className="contanerr">
        <div className="cart">

        {Category.map((item)=>(
        <div className='cat' key={item.id}>
       
           
           <img  src={item.imgUrl}/>
           
           
       

         </div>

      ))}

        </div>

      </div>
  
  
  </div>
    
  )
}
export default Categories