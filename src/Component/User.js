import { useContext } from "react"
import UserContex from "./UserContex"

const User = ({name}) => {
  const{logdenUser}=useContext(UserContex)
  return (
    <div className="user-Card">
      <h1>li:{logdenUser}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Surat</h3>
      <h3>Contact:@mauryakhushi004</h3>
    </div>
  )
}

export default User
