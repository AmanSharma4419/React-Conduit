import React from 'react';

class Updateatricle extends React.Component {
	constructor() {
		super();
		this.state = {
            title: null,
            body: null,
            articleAbout:null,
            tags:null
		};
	}
	toUpdate = (event) => {
        const{name,value}=event.target;
        this.setState({ ...this.setState,
            [name]:value
         });
    };
    componentDidMount() {
        const Slug = this.props.match.params.Article;
        fetch(`https://conduit.productionready.io/api/articles/${Slug}`,{
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(res=>res.json()).then(Articles => {
            console.log(Articles)
            this.setState({...this.setState,title:Articles.article.title,body:Articles.article.body,articleAbout:Articles.article.about})
        })
    }
    Update = () => {
        const Slug = this.props.Article.slug;
        fetch(`PUT /api/articles/:${Slug}`)
    }
	render() {
        return(
            <>
            <input type="text" placeholder="" value={this.state.title} onChange={this.toUpdate} name="title"/>
            <input type="text" placeholder="" value={this.state.title} onChange={this.toUpdate} name="title"/>
            <input type="text" placeholder="" value={this.state.title} onChange={this.toUpdate} name="articleAbout"/>
            <input type="text" placeholder="" value={this.state.body} onChange={this.toUpdate} name="tags"/>
            <button>UpdateAtricle</button>
             </>
        )         
	}
}
export default Updateatricle;
