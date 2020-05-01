import React, {Component} from 'react';

class Post extends Component {

    static defaultProps = {
        content: ''
    };

    handleOnClick(){
        console.log(this.post.clientHeight)
    }

    render() {
        return (<p ref={(post)=>this.post = post} onClick={this.handleOnClick.bind(this)}>{this.props.content}</p>)
    }
}

export default Post