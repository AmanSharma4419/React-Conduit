import React from "react";
import {Link} from "react-router-dom";
import Btn from "../btn"


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
                             <button onClick={this.toLike} className="btn">Like</button>
                            </div>
                        </p>

                        {/* <Btn slug={article.slug}/> */}
                        {/* <Like /> */}
                        
                        {article.author.username===JSON.parse(localStorage.Data).user.username?<div style={{display:"flex"}}><Link to={`/Updatearticle/${article.slug}`}><button className="btn">Update</button></Link>
                        <button className="btn">Delete</button></div>:null}
                        <Link to={`/Userprofile/${article.author.username}`}><img src={article.author.image} style={{height:"30px",width:"30px"}}/></Link>
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