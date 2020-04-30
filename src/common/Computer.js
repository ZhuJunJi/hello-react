import React, {Component} from 'react';

class Computer extends Component {
    constructor(props) {
        super(props);
        this.state = {status: false}
    }


    handleClickOnOffButton() {
        this.setState({
            status: !this.state.status
        })
    }

    render() {
        return (
            <div>
                <Screen showContent={this.state.status ? '显示器开了' : '显示器关了'}/>
                <button onClick={this.handleClickOnOffButton.bind(this)}>开关</button>
            </div>
        )
    }
}

class Screen extends Component {

    static defaultProps = {showContent: '无内容'};

    render() {
        return (
            <div className='screen'>
                {this.props.showContent}
            </div>
        )
    }
}

export default Computer