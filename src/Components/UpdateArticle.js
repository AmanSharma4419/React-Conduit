import React from  "react";

class Updateatricle extends React.Component {
    constructor() {
        super()
        this.state = {
            Updateatricle:""
        }
    }
    toUpdate = (event) => {
        this.setState({...this.setState,Updateatricle:event.target.value})
    }
    render() {
        return(
            <input type ="text" placeholder= "" value= {this.state.Updateatricle} onChange ={this.toUpdate}/>
        )
    }
}
export default Updateatricle;