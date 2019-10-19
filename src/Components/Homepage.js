import React from "react";

class Homepage extends React.Component {
    constructor() {
        super()
        this.state = {
            aticleData : ""
        }
    }
    componentDidMount() {
        fetch("https://conduit.productionready.io/api/articles")
        .then(res => res.json())
        .then(data => {
            var data = data.articles[1];
            console.log(data)
            this.setState({...this.state,articleData:data})
        })
            
    }
    render() {
        return(
            <h1>{this.state.aticleData.title}</h1>
        )
    }
}
export default Homepage;