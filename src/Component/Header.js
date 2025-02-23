import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import UserContex from "./UserContex";
import { useSelector } from "react-redux";
import logo from "../assets/logo.png";
import "../Style/Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [showUl, setShowUl] = useState("");
  const [line1, setLine1] = useState("0deg");
  const [line2, setLine2] = useState("0deg");
  const [gap, setGap] = useState("16px");
  const [btn, setbtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { logdenUser } = useContext(UserContex);
  const navigate=useNavigate()
  //subscribing to the store using useSelector
  const cartItem = useSelector((store) => store.cart.item);
  // console.log(cartItem)
  const [darkMode, setMode] = useState(false);
  const handleSubmit=async()=>{
try{
const response = await fetch("http://localhost:8085/api/user/logout", {
  method: "POST",
  "Content-Type": "application/json",
});
const json=await response.json();
console.log(response)
navigate("/")
}catch(error){
console.log(error.message)
}
  }

  const Handlemode = () => {
    setMode(!darkMode);
  };
  const handleMenu = () => {
    showUl == "" ? setShowUl("flex") : setShowUl("");
    line1 == "0deg" ? setLine1("410deg") : setLine1("0deg");
    line2 == "0deg" ? setLine2("-410deg") : setLine2("0deg");
    gap === "16px" ? setGap("8px") : setGap("16px");
  };
  return (
    <>
      <div className="flex z-40 justify-between shadow-2xl h-28 lg:px-10 sm:px-2  items-center sticky top-0 bg-white w-full  ">
        <div className="logo">
          <Link to="/">
            <img className="w-28" src={logo} alt="logo" />
            <h1 className="font-bold  text-center text-xl text-[#0d7c66]">
              Foodora
            </h1>
          </Link>
        </div>

        <div className="flex items-center">
          <ul className=" ul  " style={{ display: showUl }}>
            <li>OS{onlineStatus ? "✅" : "🔴"}</li>
            <Link to="/body">
              <li className="hover:bg-[#0d7c66] hover:text-white px-1 rounded-xl">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="hover:bg-[#0d7c66]  hover:text-white px-1 rounded-xl">
                About Us
              </li>
            </Link>
            <Link to="/contact">
              <li className="hover:bg-[#0d7c66]  hover:text-white px-1 rounded-xl">
                Contact us
              </li>
            </Link>
            <Link to="/cartpage">
              <li className="hover:bg-[#0d7c66]   hover:text-white px-1 rounded-xl">
                Cart({cartItem.length})
              </li>
            </Link>

            <button
              className="login hover:bg-[#0d7c66] bg-yellow-500  hover:text-white px-1 rounded-xl"
              onClick={handleSubmit}
            >
              Log Out
            </button>
          </ul>
        </div>
        <div className="Menu-button" onClick={handleMenu} style={{ gap: gap }}>
          <div className="line1 line" style={{ rotate: line1 }}></div>
          <div className="line2 line" style={{ rotate: line2 }}></div>
        </div>
      </div>
    </>
  );
};
////{"🏠"}{"🛒"}
export default Header;
