import React, {Component} from 'react'

class LikeButton extends Component {

    static defaultProps = {
        likedText: '取消',
        unLikedText: '点赞'
    };

    constructor(props) {
        super(props);
        this.state = {isLiked: false}
    }

    handleClickOnButton() {
        this.setState({
            isLiked: !this.state.isLiked
        });
        if(this.props.onClick){
            this.props.onClick();
        }
    }

    render() {
        return (
            <button onClick={this.handleClickOnButton.bind(this)}>
                {this.state.isLiked ? this.props.likedText : this.props.unLikedText}
            </button>
        )
    }
}

export default LikeButton