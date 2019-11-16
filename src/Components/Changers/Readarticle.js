import React from 'react';
class Readarticle extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Article: null,
			userComment: '',
			commentBody: ''
		};
	}
	componentDidMount() {
		const slug = this.props.match.params.slug;
		Promise.all([
			fetch(`https://conduit.productionready.io/api/articles/${slug}`, {
				headers: {
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				}
			}),
			fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
				method: 'GET',
				headers: {
					Authorization: `Token ${localStorage.getItem('Token')}`,
					'Content-Type': 'application/json'
					// 'Content-Type': 'application/x-www-form-urlencoded',
				}
			})
		]).then((res) => {
			res[0].json().then((article) =>
				this.setState({ ...this.state, Article: article }, () => {
					console.log(this.state.Article, 'in cdm');
				})
			);

			res[1].json().then((comments) => this.setState({ ...this.state, userComment: comments }));
		});
	}

	toUpdate = (event) => {
		const comment = event.target.value;
		this.setState({ ...this.state, commentBody: comment });
	};

	addComment = () => {
		const comments = {
			comment: {
				body: this.state.commentBody
			}
		};
		const Slug = this.props.match.params.slug;
		fetch(`https://conduit.productionready.io/api/articles/${Slug}/comments`, {
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`,
				'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			},
			body: JSON.stringify(comments)
		})
			.then((res) => res.json())
			.then((data) => {
				const slug = this.props.match.params.slug;
				fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`, {
					method: 'GET',
					headers: {
						Authorization: `Token ${localStorage.getItem('Token')}`,
						'Content-Type': 'application/json'
						// 'Content-Type': 'application/x-www-form-urlencoded',
					}
				})
					.then((res) => res.json())
					.then((comments) => this.setState({ ...this.state, userComment: comments, commentBody: '' }));
			});
	};
	render() {
		const Article = this.state.Article && this.state.Article.article;
		return (
			<React.Fragment>
				<div style={{color: 'green', height: '100px', width: '100%' }}>
					<h3 style={{ textDecorationLine: 'underline' }}>{Article && Article.title}</h3>
				</div>
				<p className="display-4">{Article && Article.body}</p>
				<input
					type="text"
					placeholder="AddComment"
					value={this.state.commentBody}
					onChange={this.toUpdate}
					className="input"
				/>
				<button onClick={this.addComment} className="btn btn-outline-success">
					PostComment
				</button>
				{this.state.userComment.comments &&
					this.state.userComment.comments.map((comment, i) => {
						return (
							<div key={i}>
								<h2 key={i} className="display-4">
									{comment.body}
								</h2>
								<h2 className="display-5">
									{comment.author.username}
									<h4>created At</h4>
									<span style={{ color: 'black', fontSize: '10px' }}>{comment.createdAt}</span>
									<hr />
								</h2>
							</div>
						);
					})}
			</React.Fragment>
		);
	}
}

export default Readarticle;
