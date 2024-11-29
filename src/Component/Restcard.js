import { useContext } from "react"
import UserContex from "./UserContex"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Restcard = ({ datas }) => {
    const { logdenUser } = useContext(UserContex)
    // console.log(datas)
    const {
        name,
        cloudinaryImageId,
        costForTwo,
        avgRating,
        sla,
        cuisines

    } = datas?.info
    return (
        <>
            <div className="p-3 my-5  mx-auto w-[250px]  rounded-lg bg-gray-50 shadow-2xl h-[350px] hover:bg-[#cacece]"   >
                <img className='res-logo rounded-lg  w-[230px] h-[50%] '
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="img" />
                <h3 className="font-bold py-4 text-lg   dark:text-white overflow-hidden text-ellipsis whitespace-nowrap">{name}</h3>
                <h4 className=" overflow-hidden whitespace-nowrap text-ellipsis " >{cuisines.join(",")}</h4>
                <ul className="list-disc my-3 flex font-medium">
                    <h4 className="my-1 text-white w-14 pl-1 py-[2px] rounded-lg   whitespace-nowrap bg-green-700 overflow-hidden text-ellipsis"><FontAwesomeIcon icon={faStar} style={{ color: "#ffffff", }} /> {avgRating} </h4>
                    <li className="  ml-5 mx-3" >{costForTwo} </li>
                    {/* <li className=" mx-3" >{avgRating}Star</li> */}
                </ul>
                <ul className="  list-disc flex font-medium">
                    <li className="  mx-3" >{sla.deliveryTime} min</li>

                </ul>
            </div>
        </>
    )
}
export const withPromotedLabal = (Restcard) => {
    return (props) => {
        return (
            <div >
                <label className="bg-black absolute text-white">Promoted</label>
                <Restcard {...props} />
            </div>


        )
    }
}
export default Restcard