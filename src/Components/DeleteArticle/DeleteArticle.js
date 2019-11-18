import React from 'react';
import { withRouter } from 'react-router-dom';

function DeleteArticle(props) {
	const toDelete = () => {
		const Slug = props.slug;
		fetch(`https://conduit.productionready.io/api/articles/${Slug}`, {
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.getItem('Token')}`
				// 'Content-Type': 'application/json'
				// 'Content-Type': 'application/x-www-form-urlencoded',
			}
		}).then(alert('Deleted SucessFully'));
	};
	return (
		<React.Fragment>
			<button className="button is-info is-outlined" onClick={toDelete}>
				Delete
			</button>
		</React.Fragment>
	);
}
export default withRouter(DeleteArticle);
