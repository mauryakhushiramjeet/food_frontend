import React from 'react'
import ItemList from './ItemList'
// import { useState } from 'react'
import "../Style/RestaurantCategory.css"
const RestaurantCategories = ({data,ShowItem,setShowIndex}) => {
    // console.log(data) 
//     const[ShowItem,setShowItem]=useState(false)
    const handleClick=()=>{
setShowIndex();  

    }
  return (
    
    <div className=' container mx-auto my-4 rounded-lg  '>
    <div className='btns'  onClick={handleClick}>
    <span className='contant'>{data.title}({data.itemCards.length})</span>
    <span  >⬇️</span>
    </div>
   { ShowItem&&<ItemList items={data.itemCards}/>}
    </div>
    

  )
}

export default RestaurantCategories
