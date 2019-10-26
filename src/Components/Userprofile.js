import React from "react";

class Userprofile extends React.Component {
    constructor() {
        super()
        this.state = {
            Userprofile:""
        }
    }
    componentDidMount() {
        const Username = this.props.match.params.userName;
        fetch(`https://conduit.productionready.io/api/profiles/${Username}`,{
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res => res.json())
        .then(Userdata => this.setState({...this.setState,Userprofile:Userdata}))
    }
    render() {
        console.log(this.state.Userprofile.profile)
        return(
            <>
            <h1>{this.state.Userprofile.profile&&this.state.Userprofile.profile.username}</h1>
            {/* <img src = {this.state.Userprofile.profile.image}/> */}
            <h1>{this.state.following}</h1>
            {/* <h1>{this.state.Userprofile.profile}</h1> */}
            </>
        )
    }
}

export default Userprofile;