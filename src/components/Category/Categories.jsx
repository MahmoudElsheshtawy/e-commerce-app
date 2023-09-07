/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Category.css'
import Category from "../Category/Category.json"
const Categories = () => {
  return (
  <div className='Category'>
      {/* <div className="44"> */}
        <div className="cart" style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}}>

        {Category.map((item)=>(
        <div className='cat' key={item.id}>
           <img  src={item.imgUrl}/>

         </div>

      ))}

        </div>

      </div>
  
  
  // </div>
    
  )
}
export default Categories