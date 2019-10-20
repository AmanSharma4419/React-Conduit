import React from "react";

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
            {this.state.articleData && this.state.articleData.map((articles,index) =>{
                return(
                    <div>
                        <h1>
                            <span>Title:</span>
                            {articles.title}
                        </h1>
                    </div>
                )
            })}
            </>
        )
    }
}
export default Homepage;