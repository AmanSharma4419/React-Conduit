import React from "react";
import {Link} from "react-router-dom";
import Likebtn from "../LikeandUnlike/Likebtn";
import DeleteArticle from "../DeleteArticle/DeleteArticle"
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
        console.log(this.state.article)
        return(
            <>
            <div className="Articles">
            <h2>Articles</h2>
            {this.state.articleData && this.state.articleData.map((article,index) =>{
                return(
                    <div key={index}>
                        <hr/>
                        <p key={index} >
                            <span style={{fontSize:"18px",textDecorationLine:"underline"}}>Title: </span>
                            {article.title}
                        </p>
                        <p>
                            <div style={{display:"flex",justifyContent:"space-between"}}>
                             {article.body}
                             <span><Likebtn slug={article.slug} likes={article.favorited}/></span>
                            </div>
                        </p>                        
                        {article.author.username===JSON.parse(localStorage.Data).user.username?<div style={{display:"flex"}}><Link to={`/Updatearticle/${article.slug}`}><button className="btn">Update</button></Link>
                        <DeleteArticle slug={article.slug} /></div>:null}
                        <Link to={`/Userprofile/${article.author.username}`}><img src={article.author.image}alt={article.author.username} style={{height:"30px",width:"30px"}}/></Link>
                        <h2 style={{fontSize:"15", fontFamily:"source sans pro,sans-serif",color:"rgb(52, 163, 52)"}}>{article.author.username}</h2>
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