import React from "react";
import "./style.css";
class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: "",
      msg: ""
    };
  }

  storeTokenAndRedirect = token => {
    // localStorage.setItem('Token', token);
    this.props.history.push("/Login");
  };

  toUpdate = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  toSubmit = () => {
    const body = {
      user: {
        username: this.state.userName,
        email: this.state.email,
        password: this.state.password
      }
    };

    fetch("https://conduit.productionready.io/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(user => {
        // localStorage.setItem('Token', user.user.token);
        // localStorage.getItem('Token')
        // us? this.props.history.push('/Login')
        // : this.setState({ ...this.state, msg: 'Please' });
        // if(user.user ){
        // 	console.log("hello");
        // 	() => {this.storeTokenAndRedirect()}
        // }else{
        // 	console.log("bye")
        // }
        user.user
          ? this.storeTokenAndRedirect(user.user.token)
          : this.setState({
              ...this.state,
              msg: "Please Check InputFeilds It May Already Taken!"
            });
      });
  };
  render() {
    return (
      <React.Fragment>
        <div className="Parent1">
          <h1 style={{ color: "green" }}>{this.state.msg}</h1>
          <h1 style={{ color: "green", fontSize: "40px" }}>Sign Up</h1>
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            onChange={this.toUpdate}
            className="input"
          />
          <input
            type="text"
            placeholder="Email"
            name="email"
            onChange={this.toUpdate}
            className="input"
          />
          <input
            type="password"
            placeholder="Password MinCharacters(8)"
            name="password"
            onChange={this.toUpdate}
            className="input"
          />
          <br />
          <span>
            <button
              onClick={this.toSubmit}
              className="button is-success is-outlined"
            >
              Submit
            </button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}
export default Register;
