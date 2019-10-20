import React from "react";

class Setting extends React.Component {
    constructor() {
        super() 
        this.state = {
            email:"",
            userBio:"",
            img:"",
            userName:"",
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
    toFetch = () => {
        const User = {
            "user" : {
                "email":this.state.email,
                "bio": this.state.userBio,
                "url":this.state.url
            }
        }
        fetch("https://conduit.productionready.io/api/user",{
            method : "PUT",
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(User)
        }).then(res => res.json())
        .then(updatedData => {
            console.log(updatedData);
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
            <button onClick ={this.toFetch}>Update</button>
            </>
        )
    }
}

export default Setting;