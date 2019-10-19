import React from "react";

class Newpost extends React.Component {
    constructor() {
        super() 
        this.state = {
                articleTitle:"",
                article:"",
                articleAbout:"",
                enterTags:""

            }
        }
        toUpdate = (event) => {
            const{name,value}=event.target;
            this.setState({
                ...this.state,
                [name]:value
            })
        }
        render() {
            return (
                <>
                <input type = "text" placeholder="ArticleTitle"
                value = {this.state.articleTitle} name= "articleTitle" 
                onChange = {this.toUpdate}/>
                
                <input type = "text" placeholder="WriteArticle" 
                value = {this.state.article}  name= "article"
                onChange = {this.toUpdate}/>
                
                <input type = "text" placeholder = "What's this Article About"
                value = {this.state.articleAbout} name = "articleAbout"
                onChange = {this.toUpdate}/>
                
                <input type = "text" placeholder = "Enter tags" 
                value = {this.state.enterTags} name = "enterTags"
                onChange = {this.toUpdate}/>
                <button>Publish Article</button>
                </>
            )
      }
}

export default Newpost;