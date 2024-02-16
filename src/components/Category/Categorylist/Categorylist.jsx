import React from 'react'
import './Categorylist.css'
const Categorylist = ({ title ,active ,setSlected ,id}) => {
  return (
    <div >

      
   <div className={active ? "cartss active" : "cartss"}onClick={ ()=>setSlected(id)} style={{overflow:'hidden'}} > 
   
   
  <div className='Cart-category'>
    <div className='img'>
    {  title }
    </div>
  
  </div>
  
   </div>


    </div>
  )
}

export default Categorylist