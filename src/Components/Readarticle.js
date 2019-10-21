import React from "react";

class Readarticle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Article:""
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
    render() {
        // var {article} = this.props.history.location
        return(
            <>
            <h1>{this.state.Article.body}</h1>
            
            </>
        )
    }
}

export default Readarticle;