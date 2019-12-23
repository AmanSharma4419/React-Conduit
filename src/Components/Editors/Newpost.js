import React from "react";

class Newpost extends React.Component {
  constructor() {
    super();
    this.state = {
      articleTitle: "",
      article: "",
      articleAbout: "",
      enterTags: ""
    };
  }
  toUpdate = event => {
    const { name, value } = event.target;
    this.setState({
      ...this.state,
      [name]: value
    });
  };
  toCreateArticle = () => {
    const User = {
      article: {
        title: this.state.articleTitle,
        description: this.state.articleAbout,
        body: this.state.article,
        tagList: this.state.enterTags
      }
    };
    fetch("https://conduit.productionready.io/api/articles", {
      method: "POST",
      headers: {
        Authorization: `Token ${localStorage.getItem("Token")}`,
        "Content-Type": "application/json"
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(User)
    })
      .then(res => res.json())
      .then(Article =>
        // console.log(Article.article)
        Article.article.body
          ? this.props.history.push("/Homepage")
          : () => {
              alert("error");
            }
      );
  };
  render() {
    return (
      <React.Fragment>
        <div className="Parent1">
          <h1 className="heading">Add Article</h1>
          <input
            type="text"
            placeholder="ArticleTitle"
            value={this.state.articleTitle}
            name="articleTitle"
            onChange={this.toUpdate}
            className="input"
          />

          <input
            type="text"
            placeholder="WriteArticle"
            value={this.state.article}
            name="article"
            onChange={this.toUpdate}
            className="input"
          />

          <input
            type="text"
            placeholder="What's this Article About"
            value={this.state.articleAbout}
            name="articleAbout"
            onChange={this.toUpdate}
            className="input"
          />

          <input
            type="text"
            placeholder="Enter tags"
            value={this.state.enterTags}
            name="enterTags"
            onChange={this.toUpdate}
            className="input"
          />
          <span>
            <button
              onClick={this.toCreateArticle}
              className="button is-success is-outlined"
            >
              Publish Article
            </button>
          </span>
        </div>
      </React.Fragment>
    );
  }
}

export default Newpost;
