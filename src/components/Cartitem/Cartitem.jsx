import React from 'react'
import './Cartitem.css'
import AllCategorys from '../../AllCategorys.json'
import AllCategory from '../Category/allcaregory/AllCategory'
const Cartitem = () => {
  return (
    <>
        <div className="contanerer">
        <div className="header">
                <h3>POPULAR PRODUCTS</h3>
                <span className='line'> </span>
             </div>
            
          <div className="card">
          {AllCategorys.map((item)=>(
                <div key={item.id} >
                <AllCategory {...item} />
              </div>
            ))}
          </div>
        </div>
         

    </>
  )
}

export default Cartitem