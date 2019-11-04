import React from "react";

class Likebtn extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            Likecount:""
        }
    }
    toLike = (props) => {
            const Slug = this.props.slug;
            console.log(Slug)
            fetch(`https://conduit.productionready.io/api/articles/${Slug}/favorite`,{
                method:"POST",
                headers: {
                    'Authorization':`Token ${localStorage.getItem("Token")}`,
                    // 'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
                }
            }).then(res =>res.json())
            .then(Data=>{
                // console.log(Data.article.favoritesCount)
                const Likes = Data.article.favoritesCount;
                this.setState({...this.state,Likecount:Likes})
            })
        }
    render() {
        return(
            <button onClick={this.toLike} className="btn">{this.state.Likecount?"Unlike":"Like"}<sapn style={{color:"red"}}>{this.state.Likecount}</sapn></button>
        )
    }
}
export default Likebtn;