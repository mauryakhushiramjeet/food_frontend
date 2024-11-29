import React from "react";
import UserContex from "./UserContex";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }
    render(){
        const{count}=this.state
        // const{name}=this.props
        return(
            
            <div className="user-Card">
            {/* <h2>Name:{name}</h2> */}
            <h1>count:{count}</h1>
            <button onClick={()=>{
                this.setState({
                    count:count+1
                })
            }}>increase count</button>
            <div>
                user:
            <UserContex.Consumer>
                {({data})=><h1>{data}</h1>}
            </UserContex.Consumer>
            </div>
            <h3>Location:Surat</h3>
            <h3>Contact:@mauryakhushi004</h3>
            </div>
        )
    }
}
export default UserClass;