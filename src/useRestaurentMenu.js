import { useEffect,useState } from "react"
const useRestaurentMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null)
    useEffect(() => {
        fetchMenu();
    }, [])
    const fetchMenu = async () => {
        const data = await fetch("https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId+"", {
            headers: {
            'x-cors-api-key': 'temp_3a2b8872186bd94bb1fa875b24f5203b'
            }
          });
        const json = await data.json()
        // console.log(json)
        setResInfo(json.data)
    };
  return (
   resInfo)
};

export default useRestaurentMenu
