import { useParams } from "react-router-dom"
import useRestaurentMenu from "../useRestaurentMenu"
import RestaurantCategories from "./RestaurantCategories"
import { useState } from "react"
import RestaurentMenuShimmer from "./RestaurentMenuShimmer"

const RestaurentMenu = () => {
    
    const{resId}=useParams()
    const[ShowIndex,setShowIndex]=useState(null)

  const resInfo=useRestaurentMenu(resId)
    if(resInfo===null){
        return<RestaurentMenuShimmer/>
    }
    const {name,cuisines,costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
    // const{itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)
    // const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
    //     return  c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    //    })
    const categories = resInfo?.cards.filter((e)=> e?.groupedCard?.cardGroupMap?.REGULAR?.cards)[0]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e) => {
        return e?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    
//    console.log(categories)
    // console.log(itemCards)
    // console.log(name)

    return (
      
        <div className='text-center'>
          
            <h1 className="font-bold my-6 text-2xl ">{name}</h1>
          <p className="font-bold text-2xl  mb-10">{cuisines.join(",")}-{costForTwoMessage}</p>
          {categories.map((e,index)=>(
          <RestaurantCategories  
          data={e.card?.card} 
          key={Math.random()*100} 
          ShowItem={index===ShowIndex?true:false}
          setShowIndex={()=>ShowIndex===index?setShowIndex(null):setShowIndex(index)} />)
        )}
           

        </div>
    )
}

export default RestaurentMenu
