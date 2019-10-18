import React from "react";

class Login extends React.Component {
    constructor() {
        super() 
        this.state = {
            email:"",
            password:""
        }
    }

    toUpdate = (e) => {
    const {name,value} = e.target;
    this.setState({
        ...this.state,
        [name]:value
    })
    }

    toLogin = () => {
        const user = {
            "user":{
                "email":this.state.email,
                "password":this.state.password,
            }
        }
        fetch("https://conduit.productionready.io/api/users/login",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
            body:JSON.stringify(user)
        }).then(res => res.json())
        .then(user => {
            user.user.token?this.props.history.push("/Homepage"):this.setState({...this.state()})
        })
    }
            render() {
                return (
                    <React.Fragment>
                        <h1>Login!</h1>
                        <input type="email" placeholder="email" name="email" value={this.state.email} onChange = {this.toUpdate}/>
                        <input type="password" placeholder="password" name="password" value={this.state.password} onChange = {this.toUpdate}/>
                        <button onClick={this.toLogin}>Submit</button>
                    </React.Fragment>
                )
          }

}

export default Login;