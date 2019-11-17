import React from 'react';
import './style.css';
class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			userName: '',
			email: '',
			password: '',
			msg: ''
		};
	}
	toUpdate = (event) => {
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

		fetch('https://conduit.productionready.io/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(body)
		})
			.then((res) => res.json())
			.then((user) => {
				console.log(user);
				localStorage.setItem('Token', user.user.token);
				localStorage.getItem('Token')
					? this.props.history.push('/Login')
					: this.setState({ ...this.state, msg: 'Please' });
			});
	};
	render() {
		return (
			<React.Fragment>
				<div className="Parent1">
					<h1>{this.state.msg}</h1>
					<h1 style={{ color: 'green', fontSize: '40px' }}>Sign Up</h1>
					{this.state.msg ? 'there was an error signing up, please try again' : null}
					<input
						type="text"
						placeholder="UserName"
						name="userName"
						onChange={this.toUpdate}
						className="input"
					/>
					<input type="text" placeholder="Email" name="email" onChange={this.toUpdate} className="input" />
					<input
						type="password"
						placeholder="Password"
						name="password"
						onChange={this.toUpdate}
						className="input"
					/>
					<span>
						<button onClick={this.toSubmit} className="button is-success is-outlined">
							Sign in
						</button>
					</span>
				</div>
			</React.Fragment>
		);
	}
}
export default Register;
