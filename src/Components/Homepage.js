import React from "react";
import {Link} from "react-router-dom";


import '../App.css';
class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {
            articleData : ""
        }
    }
    componentDidMount() {
        fetch("https://conduit.productionready.io/api/articles")
        .then(res => res.json())
        .then(Articles => {
            const response = Articles.articles;
            this.setState({...this.state,articleData:response})
        })
            
    }

    toLike = () => {
        const Slug = this.state.articleData.slug;
        fetch(`https://conduit.productionready.io/api/articles/:${Slug}/favorite`,{
            method:"POST",
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then(res =>res.json())
        .then(Data=>console.log(Data))

    }
    render() {
        console.log(this.state.articleData);
        return(
            <>
            <div className="Articles">
            <h2>Articles</h2>
            {this.state.articleData && this.state.articleData.map((article,index) =>{
                return(
                    <div key={index}>
                        <h2 key={index} className="ArticleTitle">
                            <span>Title:</span>
                            {article.title}
                        </h2>
                        <p className="ArticleBody">
                            <span>Body:</span>
                            {article.body}
                            <button onClick={this.toLike}>Like</button>
                        </p>
                        {article.author.username===JSON.parse(localStorage.Data).user.username?<div><Link to={`/Updatearticle/${article.slug}`}><button>Update</button></Link>
                        <button>Delete</button></div>:null}
                        <Link to={`/Userprofile/${article.author.username}`}><h1>{article.author.username}</h1></Link>
                        <Link to={`/Readarticle/${article.slug}`}><button className="btn">ReadArticle</button></Link>
                    </div>
                )
            })}
            </div>
            </>
        )
    }
}
export default Homepage;