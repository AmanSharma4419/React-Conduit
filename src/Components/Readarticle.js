import React from "react";

class Readarticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Article:"",
            commentBody:""
        }
    }
    componentDidMount() {
        const slug = this.props.match.params.slug;
        fetch(`https://conduit.productionready.io/api/articles/${slug}`,{
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
        }).then(res => res.json())
        .then(data => {
            const article = data.article;
            this.setState({...this.state,Article:article})
        })
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
        console.log(Slug)
        fetch(`https://conduit.productionready.io/api/articles/${Slug}/comments`,{
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body:JSON.stringify(comments)
        }).then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    render() {
        // var {article} = this.props.history.location
        console.log("reached1")
        return(
            <>
            <h1>{this.state.Article.body}</h1>
            <input type="text" placeholder="AddComment" value = {this.state.commentBody} onChange = {this.toUpdate}/>
            <button onClick = {this.addComment}>AddComment</button>
            </>
        )
    }
}

export default Readarticle;