import React from "react";
class Readarticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Article:null,
            userComment:"",
            commentBody:"",
        }
    }
    componentDidMount() {
     const slug = this.props.match.params.slug;
        Promise.all([
            fetch(`https://conduit.productionready.io/api/articles/${slug}`,{
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                }),
                fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`,{
                    method: "GET",
                    headers: {
                        'Authorization':`Token ${localStorage.getItem("Token")}`,
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
        ])
        .then(res => {
                res[0].json().then(article=>this.setState({...this.state,Article:article},()=>{
                    console.log(this.state.Article,"in cdm")
                }))
                // res[0].json().then(article=>console.log(article))

                res[1].json().then(comments=>this.setState({...this.state,userComment:comments}))
            }
        )
}
    
    toUpdate = (event) => {
        const comment = event.target.value;
        this.setState({...this.state,commentBody:comment})
    }


    addComment = () =>  {
        const comments = {
            "comment": {
                "body":this.state.commentBody
            }
        }
        const Slug = this.props.match.params.slug;
        fetch(`https://conduit.productionready.io/api/articles/${Slug}/comments`,{
            method:"POST",
            headers: {
                'Authorization':`Token ${localStorage.getItem("Token")}`,
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body:JSON.stringify(comments)
        })
        .then(res => res.json())
        .then(data => {
            // const comment = data.comment.body;
            // console.log(comment)
            // this.setState({...this.state,Comment:comment,commentBody:''})
            // this.props.history.push("/Readarticle/abc")
            const slug = this.props.match.params.slug;
            fetch(`https://conduit.productionready.io/api/articles/${slug}/comments`,{
                    method: "GET",
                    headers: {
                        'Authorization':`Token ${localStorage.getItem("Token")}`,
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                }).then(res=>res.json()).then(comments=>this.setState({...this.state,userComment:comments,commentBody:""}))

        })
     }
    render() {
        const Article = this.state.Article && this.state.Article.article
        console.log(Article)
        // console.log(this.state.Article.article)
        // var {article} = this.props.history.location
        // console.log(this.state.Article.article.body)
        return(
            <>
            <h1>{Article && Article.title}</h1>
            <p>{Article && Article.body}</p>
            <input className="input" type="text" placeholder="AddComment" value = {this.state.commentBody} onChange = {this.toUpdate}/>
            <button onClick = {this.addComment} className="btn">AddComment</button>
            {/* <h1>{this.state.userComment.comments && this.state.userComment.comments[0].body}</h1> */}
            {
             this.state.userComment.comments && this.state.userComment.comments.map((comment,i)=>{
                    return(
                        <p key = {i}>{comment.body}</p>
                    )
                })
            }
            </>
        )
    }
}

export default Readarticle;