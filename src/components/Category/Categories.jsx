/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import './Category.css'
import {
  headphone,
  earbuds,
  speaker,
  smartWatch
}from '../../Category.data'
import cat1 from '../../img/cat1.jpg'
import cat2 from '../../img/cat2.jpg'
import cat3 from '../../img/cat3.jpg'
import cat4 from '../../img/cat4.jpg'
import Categorylist from './Categorylist/Categorylist'
const Categories = () => {
  const [selcted, setSlected]=useState("earbuds")
  const [data, setData]=useState([])
  const list =[
    {
      id:"earbuds",
      title:<img src={cat4} style={{width:"300px"}}/>
 
    },
    {
      id:"haedphone",
      title:<img src={cat1} style={{width:"300px"}}/>
 
    },
    {
      id:"speaker",
      title:<img src={cat2} style={{width:"300px"}}/>
 
 
    },
    {
      id:"smart Watch",
      title:<img src={cat3} style={{width:" 300px" }}/>
 
 
    },
  
  ]
  useEffect(()=>{
     switch (selcted) {
      case "earbuds":
        setData(earbuds)
        break;
        case "haedphone":
          setData(headphone)
        break;
        case "speaker":
          setData(speaker)
        break;
        case "smart Watch":
          setData(smartWatch)
        break;
         
      default:
        setData()
    
     }



  },[selcted])
  return (
  <div className='Category'>
    <div className='carts'>
    {list.map((item)=>(
          <Categorylist 
          key={item.id}
           title={item.title}
           active={selcted===item.id}
           setSlected={setSlected}
           id={item.id}
          
          />
        ))}

    </div>

     
        <div className="cart"style={{display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} >


        </div>
        <div className='cat'>
          {data.map((d)=>(
           <img src={d.img} key={d.id}/>
          ))}
        </div>

      </div>
  
    
  )
}
export default Categories