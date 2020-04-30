import React, {Component} from 'react';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import LikeButton from "./LikeButton";

class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            likedText: '已赞',
            unLikedText: '点赞'
        }
    }

    handleClickOnChange(){
        this.setState({
            likedText: '取消',
            unLikedText: '关注'
        })
    }

    render() {
        return(
            <div>
                <LikeButton likedText={this.state.likedText} unLikedText={this.state.unLikedText}/>
                <div>
                    <button onClick={this.handleClickOnChange.bind(this)}>
                        Change LikeButton
                    </button>
                </div>
            </div>

        )
    }
}

export default Index;