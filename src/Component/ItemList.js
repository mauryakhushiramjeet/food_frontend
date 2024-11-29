import { useDispatch } from "react-redux"
import { addItem } from "../Utill/CartSlice"
import "../Style/ItemList.css"
const ItemList = ({ items }) => {
  const dispatch=useDispatch()
  const handleadditem=(item)=>{
dispatch(addItem(item))
  }
//  console.log(items)
  return (
    <>
      {items.map((item)  => (
      
          <div key={item?.card?.info?.id} className='min-h-56 pl-3 sm:p-10  p-0 containeri flex-col sm:flex-row flex justify-center items-center sm:justify-between my-5 '>
         
        

         <div className="w-[175px] h-32   relative">
          <img  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+item?.card?.info?.imageId} className='Item-image '></img>

          <button  className='Add   bg-black hover:bg-white hover:text-black font-bold hover:border border-black text-yellow-50 rounded-lg absolute p-[5px] left-0 bottom-1 active:scale-90 active:shadow-xl '
         onClick={()=>handleadditem(item)}>ADD+</button>
         </div>
         
          
          <div className='contant-doc sm:w-9/12  w-[100%] '>
            <span className="Name">{item?.card?.info?.name}
            </span ><span  className="Name"> -₹{item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice / 100}</span>
          <p className='Description'>{item?.card?.info?.description}</p>
          </div >
        </div>
        
     
      ))}

    </>
  )
}

export default ItemList

