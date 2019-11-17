import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import './Header.css';

function Header(props) {
	const Logout = () => {
		console.log(props);
		localStorage.clear();
		props.history.push('/Login');
	};

	return (
		<div className="Parent">
			<h1 style={{color:"green",fontSize:"30px"}}>Conduit</h1>
			{localStorage.Token ? (
				<React.Fragment>
					<Link to="/Setting" className="button is-success is-outlined">
						Setting
					</Link>
					<Link to="/NewPost" className="button is-success is-outlined">
						New Post
					</Link>
					<Link onClick={Logout} className="button is-danger is-outlined">
						Logout
					</Link>
				</React.Fragment>
			) : (
				<React.Fragment>
					<div className="Children">
						<span className="button is-primary is-outlined">
							<Link
								to="/Register"
								as="button"
								style={{ color: ' rgb(87, 82, 82)', textDecorationLine: 'none' }}>
								Sign Up
							</Link>
						</span>
						<span className="button is-primary is-outlined">
							<Link
								to="/Login"
								as="button"
								style={{ color: 'rgb(87, 82, 82)', textDecorationLine: 'none' }}>
								Sign In
							</Link>
						</span>
					</div>
				</React.Fragment>
			)}
		</div>
	);
}

export default withRouter(Header);
