import React from "react";

export default class Btn extends React.Component {
    constructor(props){
        super(props)
    }

    state={
        likesCount:0
    }

//    fetch(`url/articles/${this.props.slug}`).then()

    render(){
        return (
            <button >{`Button ${this.props.slug}`}</button>
        )
    }
}