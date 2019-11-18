import React from 'react';
import { connect } from 'react-redux';
class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			autherisation: ''
		};
	}

	toUpdate = (e) => {
		const { name, value } = e.target;
		this.setState({
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
				console.log(user);
				this.props.dispatch({ type: 'UpdateState', UserData: user });
				localStorage.setItem('Data', JSON.stringify(user));
				localStorage.setItem('Token', user.user.token);
				localStorage.Token
					? this.props.history.push('/Homepage')
					: this.setState({ ...this.state, autherisation: user.user });
			});
	};

	render() {
		return (
			<React.Fragment>
				<div className="Parent1">
					<h1 style={{ color: 'green', fontSize: '40px' }}>Sign In!</h1>
					<input
						type="email"
						placeholder="RegistredEmail"
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
						<button onClick={this.toLogin} className="button is-success is-outlined">
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
