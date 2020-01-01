import React from "react";
class Userprofile extends React.Component {
  constructor() {
    super();
    this.state = {
      Userprofile: "",
      isFollowed: null
    };
  }
  componentDidMount() {
    const Username = this.props.match.params.userName;
    fetch(`https://conduit.productionready.io/api/profiles/${Username}`, {
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }
    })
      .then(res => res.json())
      .then(Userdata => {
        console.log(Userdata);
        this.setState({ ...this.setState, Userprofile: Userdata });
      });
  }
  FollowUser = () => {
    const username = this.props.match.params.userName;
    fetch(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {
        method: "POST",
        headers: {
          Authorization: `Token ${localStorage.getItem("Token")}`,
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
      .then(res => res.json())
      .then(profile => {
        console.log(profile);
        const Following = profile.profile.following;
        this.setState({ ...this.state, isFollowed: Following });
      });
  };
  UnfollowUSer = () => {
    const username = this.props.match.params.userName;
    fetch(
      `https://conduit.productionready.io/api/profiles/${username}/follow`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Token ${localStorage.getItem("Token")}`,
          "Content-Type": "application/json"
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }
      }
    )
      .then(res => res.json())
      .then(profile => {
        const UnfollowUSer = profile.profile.following;
        this.setState({ ...this.state, isFollowed: UnfollowUSer });
      });
  };
  render() {
    const UserProfile =
      this.state.Userprofile && this.state.Userprofile.profile;
    return (
      <React.Fragment>
        <div
          style={{
            background: "black",
            color: "black",
            width: "100%",
            background: "grey",
            display: "flex",
            justifyContent: "center"
          }}>
          <img
            src={UserProfile.image}
            style={{ height: "80px", width: "70px" }}
            alt="Loading..."
          />
          <p style={{ fontSize: "15px" }}>{UserProfile.bio}</p>
        </div>
        <div style={{ fontSize: "15px", color: "black" }}>
          {UserProfile.username}
        </div>
        <button
          className="button is-success is-rounded"
          onClick={this.state.isFollowed ? this.UnfollowUSer : this.FollowUser}>
          {this.state.isFollowed ? "UnFollow" : "Follow +"}
        </button>
      </React.Fragment>
    );
  }
}

export default Userprofile;
