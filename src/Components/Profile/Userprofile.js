import React from 'react';
class Userprofile extends React.Component {
	constructor() {
		super();
		this.state = {
			Userprofile: '',
			isFollowed: null
		};
	}
	componentDidMount() {
		const Username = this.props.match.params.userName;
		fetch(`https://conduit.productionready.io/api/profiles/${Username}`, {
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`,
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((Userdata) => {
				this.setState({ ...this.setState, Userprofile: Userdata });
			});
	}
	FollowUser = () => {
		const username = this.props.match.params.userName;
		fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`, {
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`,
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((profile) => {
				console.log(profile);
				const Following = profile.profile.following;
				this.setState({ ...this.state, isFollowed: Following });
			});
	};
	UnfollowUSer = () => {
		const username = this.props.match.params.userName;
		fetch(`https://conduit.productionready.io/api/profiles/${username}/follow`, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`,
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((profile) => {
				const UnfollowUSer = profile.profile.following;
				this.setState({ ...this.state, isFollowed: UnfollowUSer });
			});
	};
	render() {
		const UserProfile = this.state.Userprofile && this.state.Userprofile.profile;
		return (
			<React.Fragment>
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<div style={{ background: 'black', color: 'white', width: '100%' }}>
						<h3 style={{ fontSize: '25px' }}>{UserProfile.username}</h3>
						<img src={UserProfile.image} className="rounded mx-auto d-block" alt="loading" />
						<h1>{UserProfile.following}</h1>
						<p style={{ fontSize: '15px' }}>{UserProfile.bio}</p>
						<button
							className="button is-success is-rounded"
							onClick={this.state.isFollowed ? this.UnfollowUSer : this.FollowUser}>
							{this.state.isFollowed ? 'UnFollow' : 'Follow +'}
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Userprofile;
