import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CommentApp from "./commentApp/CommentApp"
import Index from "./lifecycle/Index"
import PercentageApp from "./percentageApp/PercentageApp"

class Header extends Component{
    render(){
        return(
            <div>
                <Title title="Hello React"/>
                <Title title="React 小书"/>
            </div>
        )
    }
}
class Title extends Component{

    handleClickOnTitle(){
        console.log("Click on title.")
    }

    render(){
        return(
            <h1 onClick={this.handleClickOnTitle}>{this.props.title}</h1>
        )
    }
}

class Notification extends Component {

    render () {
        const n = getNotificationsCount();
        return(
            <span>{ n > 0 ? "有("+n+")条未读消息" : "没有未读消息"}</span>

        )
    }
}
class Dog extends Component{
    constructor () {
        super()
        this.state = {
            isRunning: false,
            isBarking: false
        }
    }

    bark () {
        if(!this.state.isBarking){
            console.log("bark")
            this.setState({isBarking:true})
            setTimeout(() => this.setState({ isBarking: false }), 2000)
        }

    }

    run () {
        if(!this.state.isRunning){
            console.log("run")
            this.setState({isRunning:true})
            setTimeout(() => this.setState({ isRunning: false }), 2000)
        }
    }
    handleClickDog(){
        this.bark()
        this.run()
    }

    render(){
        return(
            <div onClick={this.handleClickDog.bind(this)}>Dog</div>
        )
    }
}

class LikeButton extends Component{

    static defaultProps = {
        likedText: "取消👎",
        unlikedText: "点赞👍"
    }

    constructor(){
        super()
        this.state = {isLiked: false}
    }

    handleClickOnLikeButton(){
        this.setState({isLiked: !this.state.isLiked})
    }

    render(){
        return(
            <button onClick={this.handleClickOnLikeButton.bind(this)}>{this.state.isLiked? this.props.unlikedText:this.props.likedText}</button>
        )
    }
}

// class Index extends Component{
//     constructor(){
//         super()
//         this.state = {
//             likedText: "取消👎",
//             unlikedText: "点赞👍"
//         }
//     }
//
//     handleClikeChange(){
//         this.setState({
//             likedText: "取消",
//             unlikedText: "点赞"
//         })
//     }
//
//     render(){
//         return(
//             <div>
//                 <LikeButton likedText={this.state.likedText} unlikedText={this.state.unlikedText}/>
//                 <button onClick={this.handleClikeChange.bind(this)}>修改</button>
//             </div>
//         )
//     }
// }

class Computer extends Component{
    constructor(){
        super()
        this.state = {
            status: false
        }
    }

    handleChangeStatus(){
        this.setState({status: !this.state.status})

    }
    render () {
        const showContent = this.state.status ? "显示器亮了":"显示器关了"
        return (
            <div>
                <Screen showContent={showContent}/>
                <button onClick={this.handleChangeStatus.bind(this)}>{this.state.status ? "运行中":"关机中"}</button>
            </div>
        )
    }
}

class Screen extends Component{

    render () {
        const showContent = this.props.showContent || "无内容"
        return (
            <div className='screen'>{showContent}</div>
        )
    }
}


function getNotificationsCount() {
    return 0
}

ReactDOM.render(
    <Index/>,
    document.getElementById('root')
)

