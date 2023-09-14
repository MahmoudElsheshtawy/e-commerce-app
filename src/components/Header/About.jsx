import React from 'react'
import AllCategorys from '../../AllCategorys.json'
const About = () => {
  return (
    <>
    <h8></h8>
    {AllCategorys.map((item)=>(
    <div key={item.id}>
    
        
    </div>
       ))}
    </>
  
  )
}

export default About