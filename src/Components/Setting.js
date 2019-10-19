import React from "react";

class Setting extends React.Component {
    constructor() {
        super() 
        this.state = {
            img:"",
            userName:"",
            userBio:"",
            email:"",
            password:""
        }
    }
    toUpdate = (event) => {
        const {name,value} = event.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }
    render() {
        return(
            <>
            <input type = "text" placeholder = "Url Of Img"/>
            <input type = "text" placeholder = "User Name" value = {this.state.userName} name = "userName" onChange = {this.toUpdate}/>
            <input type = "text" placeholder = "Add bio" value = {this.state.userBio} name = "userBio" onChange = {this.toUpdate}/>
            <input type = "text" placeholder = "Enter Email" value = {this.state.email} name = "email" onChange = {this.toUpdate}/>
            <input type = "password" placeholder = "Enter Password" value = {this.state.password} name="password" onChange = {this.toUpdate}/>
            <button>Update</button>
            </>
        )
    }
}

export default Setting;