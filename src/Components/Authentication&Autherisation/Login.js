import React from 'react';
import { connect } from 'react-redux';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	toUpdate = (e) => {
		const { name, value } = e.target;
		this.setState({
			// ...this.state,
			[name]: value
		});
	};

	toLogin = () => {
		const user = {
			user: {
				email: this.state.email,
				password: this.state.password
			}
		};
		fetch('https://conduit.productionready.io/api/users/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(user)
		})
			.then((res) => res.json())
			.then((user) => {
				this.props.dispatch({ type: 'UpdateState', UserData: user });
				// localStorage.setItem('Data', JSON.stringify(user));
				localStorage.setItem('Token', user.user.token);
				user.user.token ? this.props.history.push('/Homepage') : this.setState({ ...this.state() });
			});
	};
	render() {
		console.log(this.props);
		return (
			<React.Fragment>
				<div className="Parent1">
					<h1 className="heading">Sign In!</h1>
					<input
						type="email"
						placeholder="Email"
						name="email"
						value={this.state.email}
						onChange={this.toUpdate}
						className="input"
					/>
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={this.state.password}
						onChange={this.toUpdate}
						className="input"
					/>
					<span>
						<button onClick={this.toLogin} className="btn">
							Submit
						</button>
					</span>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(Login);
