import React from 'react';

class Updateatricle extends React.Component {
	constructor() {
		super();
		this.state = {
			Updateatricle: ''
		};
	}
	toUpdate = (event) => {
		this.setState({ ...this.setState, Updateatricle: event.target.value });
    };
    Update = () => {
        const Slug = this.props.Article.slug;
        fetch(`PUT /api/articles/:${Slug}`)
    }
	render() {
        return(
            <>
            <input type="text" value={this.props.match.params.Article.article.body} onChange={this.toUpdate}/>
            <button>UpdateAtricle</button>
             </>
        )         
	}
}
export default Updateatricle;
