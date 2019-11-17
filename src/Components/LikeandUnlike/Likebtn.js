import React from 'react';

class Likebtn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Likecount: this.props.likes
		};
	}
	toLike = () => {
		const Slug = this.props.slug;
		fetch(`https://conduit.productionready.io/api/articles/${Slug}/favorite`, {
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((Data) => {
				const Likes = Data.article.favoritesCount;
				this.setState({ ...this.state, Likecount: Likes });
			});
	};
	tounLike = () => {
		const Slug = this.props.slug;
		fetch(`https://conduit.productionready.io/api/articles/${Slug}/favorite`, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		})
			.then((res) => res.json())
			.then((Data) => {
				const Likes = Data.article.favoritesCount;
				this.setState({ ...this.state, Likecount: Likes });
			});
	};
	render() {
		console.log(this.state.Likecount);
		return (
			<button onClick={this.state.Likecount ? this.tounLike : this.toLike} className="button is-success is-outlined">
				{this.state.Likecount ? 'Unlike' : 'Like'}
				<sapn style={{ color: 'red' }}>{this.state.Likecount}</sapn>
			</button>
		);
	}
}
export default Likebtn;
