import React from "react";

class Userprofile extends React.Component {
    constructor() {
        super()
        this.state = {
            Userprofile:"",
            isFollowed:""
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
    FollowUser = () => {
        const username = this.props.match.params.userName;
        fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`,{
         method:"POST",
         headers: {
            'Authorization':`Token ${localStorage.getItem("Token")}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(res => res.json()).then(data=>{
        const Following = data.profile.following;
        this.setState({...this.state,isFollowed:Following})
    })
    } 
    UnfollowUSer = () => {
        const username = this.props.match.params.userName;
        fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`,{
         method:"DELETE",
         headers: {
            'Authorization':`Token ${localStorage.getItem("Token")}`,
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
}
    render() {
        const UserProfile = this.state.Userprofile && this.state.Userprofile.profile;
        console.log(UserProfile)
        return(
            <>
            <div>
            <h3>{UserProfile.username}</h3>
            <img src ={UserProfile.image} style={{height:"50px",width:"50px"}}/>
            <h1>{UserProfile.following}</h1>
            <button onClick={this.state.isFollowed? this.UnfollowUSer:this.FollowUser}>
            {this.state.isFollowed ? "UnFollow": "Follow"}</button>
            </div>           
            </>
        )
    }
}

export default Userprofile;