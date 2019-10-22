import React from "react";
import {Link} from "react-router-dom";
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
            <h2>Articles</h2>
            {this.state.articleData && this.state.articleData.map((article,index) =>{
                // console.log(article)
                return(
                    <div>
                        <h2>
                            <span>Title:</span>
                            {article.title}
                        </h2>
                        <p>
                            <span>Article:</span>
                            {article.body}
                        </p>
                        <Link to={`/Readarticle/${article.slug}`}><button>ReadArticle</button></Link>
                    </div>
                )
            })}
            </>
        )
    }
}
export default Homepage;