import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Updatearticle from '../Changers/UpdateArticle';
import Header from '../Header/Header';
import Register from '../Authentication&Autherisation/Register';
import Login from '../Authentication&Autherisation/Login';
import Homepage from '../Home/Homepage';
import Setting from '../Editors/Setting';
import NewPost from '../Editors/Newpost';
import Readarticle from '../Changers/Readarticle';
import Userprofile from '../Profile/Userprofile';
import { connect } from 'react-redux';
class App extends React.Component {
	componentDidMount() {
		fetch('https://conduit.productionready.io/api/user', {
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((user) => this.props.dispatch({ type: 'UpdateState', UserData: user }));
	}
	render() {
		console.log(this.props, 'cdm fetch');
		return (
			<React.Fragment>
				<BrowserRouter>
					<Header />
					<Switch>
						<Route path="/Updatearticle/:Article" component={Updatearticle} />
						<Route path="/Readarticle/:slug" component={Readarticle} />
						<Route path="/Homepage" component={Homepage} />
						<Route path="/Register" component={Register} />
						<Route path="/Login" component={Login} />
						<Route path="/Setting" component={Setting} />
						<Route path="/NewPost" component={NewPost} />
						<Route path="/Userprofile/:userName" component={Userprofile} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return state;
};
export default connect(mapStateToProps)(App);
