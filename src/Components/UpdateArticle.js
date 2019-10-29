import React from  "react";

class Updateatricle extends React.Component {
    constructor() {
        super()
        this.state = {
            Updateatricle:""
        }
    }
    render() {
        return(
            <input type ="text" placeholder= "" value= {this.state.Updateatricle}  />
        )
    }
}
export default Updateatricle;