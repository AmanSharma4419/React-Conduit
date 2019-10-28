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
    render() {
        console.log(this.state.articleData);
        return(
            <>
            <div className="Articles">
            <h2>Articles</h2>
            {this.state.articleData && this.state.articleData.map((article,index) =>{
                // console.log(article)
                return(
                    <div>
                        <h2 className="ArticleTitle">
                            <span>Title:</span>
                            {article.title}
                        </h2>
                        <p className="ArticleBody">
                            <span>Body:</span>
                            {article.body}
                        </p>
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