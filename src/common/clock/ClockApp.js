import React, {Component} from 'react';
import Clock from "./Clock";

class ClockApp extends Component{

    constructor(props) {
        super(props);
        this.state={
            isShowClock: true
        }
    }

    handleShowOrHide(){
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return(
            <div>
                {this.state.isShowClock ? <Clock/> : null}
                <button onClick={this.handleShowOrHide.bind(this)}>
                    显示或隐藏时钟
                </button>
            </div>
        )
    }
}
export default ClockApp