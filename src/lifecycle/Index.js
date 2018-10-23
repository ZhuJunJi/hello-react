import React, {Component} from 'react'
import Header from "./Header";
import Clock from "./Clock";
import Post from "./Post";

class Index extends Component{
    constructor(){
        super()
        this.state = {
            isShowHeader: true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }

    render(){
        return(
            <div>
                {this.state.isShowHeader ? <Post />:''}
                <button onClick={this.handleShowOrHide.bind(this)}>{this.state.isShowHeader ? "隐藏":"显示"}</button>
            </div>
        )
    }
}
export default Index