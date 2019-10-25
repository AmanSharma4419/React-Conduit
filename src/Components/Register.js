import React from "react";

class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            userName:"",
            email:"",
            password:"",
            msg:""
        }
    }
    toUpdate = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    toSubmit = () => {
        const body = {
            "user":{
                "username":this.state.userName,
                "email":this.state.email,
                "password":this.state.password
            }
        }

        fetch("https://conduit.productionready.io/api/users",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify(body)          
        }).then(res => res.json()).then(user =>{
            user.user.token?this.props.history.push('/Login'):this.setState({...this.state,msg:" "})
            console.log(user.user.token)
        })
    }
    render() {
        return(
            <React.Fragment>
                <div className = "Authentication-Component">
                <h1 className="heading">Register!</h1>
                {this.state.msg?"there was an error signing up, please try again":null}
                <input type="text" placeholder="UserName" name="userName" onChange = {this.toUpdate} className="input"/>
                <input type="text" placeholder="Email"name="email" onChange={this.toUpdate} className="input"/>
                <input type="password" placeholder="Password"name="password" onChange={this.toUpdate} className="input"/>
                <button onClick = {this.toSubmit} className="btn">Submit</button>
                </div>
            </React.Fragment>
        )
    }
}
export default Register;