// import { Restapi } from "./content"
import Restcard, { withPromotedLabal } from "./Restcard";
import useOnlineStatus from "./useOnlineStatus";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContex from "./UserContex";
import "../Style/Body.css"

const Body = () => {
    const { setUserName, logdenUser } = useContext(UserContex)
    const [ListofRestaurant, setListOfRestaurant] = useState([])
    const [filteredRestuarent, setFilteredRestuarent] = useState([])
    const [searchText, setsearchText] = useState("")
    // const [Textclr, setTextClr] = useState("#333333")
    // const [backgroundColor, setbackgroundColor] = useState("white")

    const RestaurantCardPromoted = withPromotedLabal(Restcard)
    useEffect(() => {
        fetchData();
        // console.log("body", ListofRestaurant)
    }, [])
    const fetchData = async () => {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", {
            headers: {
            'x-cors-api-key': 'temp_3a2b8872186bd94bb1fa875b24f5203b'
            }
          })
        const json = await data.json();
        // console.log(js)
        //  setRestapi(json.data.cards)
        const restro = json?.data?.cards.filter(item => item.card?.card?.gridElements?.infoWithStyle?.restaurants)[0]
        // console.log(restro)

        setListOfRestaurant(restro?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestuarent(restro?.card?.card?.gridElements?.infoWithStyle?.restaurants)

        // setListOfRestaurant(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setFilteredRestuarent(js?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)

    }
 if(ListofRestaurant.length === 0) return <Shimmer />
    
    return  (
        <>

            <div className="body"  >

                <ul className="body-button">
                    <li className="search-list rounded-full flex">
                        <input type="text" className=" h-full serch-box outline-none border rounded-l-full  
                      "placeholder="Search here.."
                            value={searchText} onChange={(e) => { setsearchText(e.target.value) }} />
                    
                   <button className=" search-btn  rounded-r-full h-full px-3 relative bottom-[2.3px] left-[1.5px]" onClick={() => {
                        const filterrestaurant = ListofRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestuarent(filterrestaurant)
                    }}> Search</button>
                        {/* //{"🔍 "} */}
                    </li>

                    <li> <button
                        className="top " onClick={() => {
                            const filterList = ListofRestaurant.filter(
                                (res) => res.info.avgRating > 4.3
                            )
                            setFilteredRestuarent(filterList)
                        }}>Top Rated Restaurant{"❤️"}</button></li>

                </ul>


                <div className="res-container flex flex-wrap  items-center justify-center gap-10">
                    {
                        filteredRestuarent.map((data) => (
                            <Link key={data.info.id} to={"/restaurent/" + data.info.id}> {data.info.promoted ? <RestaurantCardPromoted datas={data} /> : <Restcard datas={data} />} </Link>


                        ))
                    }

                </div>

            </div>

        </>
    )
}
export default Body;