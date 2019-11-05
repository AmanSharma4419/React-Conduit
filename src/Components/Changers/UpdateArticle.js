import React from 'react';

class Updateatricle extends React.Component {
	constructor() {
		super();
		this.state = {
            title: null,
            body: null,
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
            this.setState({...this.setState,title:Articles.article.title,body:Articles.article.body,articleAbout:Articles.article.tags})
        })
    }
   toUpdateArticle = () => {
       const updatedArticle = {
            "article":{
                title:this.state.title,
                body:this.state.body,
            }
        }
        const Slug = this.props.match.params.Article;
        fetch(`https://conduit.productionready.io/api/articles/${Slug}`,{
            method:"PUT",
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(updatedArticle)
        }).then(this.props.history.push("/Homepage"))
        
    }
	render() {
        return(
            <>
            <div className="Parent1">
            <input type="text" placeholder="" value={this.state.title} onChange={this.toUpdate} name="title" className="input"/>
            <input type="text" placeholder="" value={this.state.body} onChange={this.toUpdate} name="body" className="input"/>
           <span><button className="btn" onClick={this.toUpdateArticle}>UpdateAtricle</button></span> 
            </div>
             </>
        )         
	}
}
export default Updateatricle;
