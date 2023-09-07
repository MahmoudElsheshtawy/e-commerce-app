import React from 'react'
import AllCategorys from '../../AllCategorys.json'
// import Allabout from '../Allabout'
// import AllCategory from '../Category/allcaregory/AllCategory'

const About = () => {
  return (
    <>
    <h8></h8>
    {AllCategorys.map((item)=>(
    <div key={item.id}>
        {/* <Allabout {...item}/> */}
        
    </div>
))}
    </>
  
  )
}

export default About