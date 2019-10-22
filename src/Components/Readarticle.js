import React from "react";

class Readarticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Article:"",
            commentBody:"",
            userComment:""
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
                res[0].json().then(article=>this.setState({...this.state,Article:article}))
                res[1].json().then(comments=>this.setState({...this.state,userComment:comments}))
            }
        )
}
    
    toUpdate = (event) => {
        const comment = event.target.value;
        this.setState({...this.state,commentBody:comment})
    }
    // addComment = () =>  {
    //     const comments = {
    //         "comment": {
    //             "body":this.state.commentBody
    //         }
    //     }
    //     const Slug = this.props.match.params.slug;
    //     console.log(Slug)
    //     .then(res => res.json())
    //     .then(data => {
    //         const comment = data.comment.body;
    //         this.setState({...this.state,userComment:comment,commentBody:''})
    //     })
    //  }
    render() {
        // var {article} = this.props.history.location
        console.log(this.state)
        return(
            <>
            <h1>{this.state.Article.body}</h1>
            <input className="input" type="text" placeholder="AddComment" value = {this.state.commentBody} onChange = {this.toUpdate}/>
            <button onClick = {this.addComment}>AddComment</button>
            {/* <h1>{this.state.userComment}</h1> */}
            </>
        )
    }
}

export default Readarticle;