import React, {Component} from 'react';
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";

class CommentApp extends Component{

    constructor(props) {
        super(props);
        this.state = {
            commentList: []
        }
    }

    handleSubmitComment (comment) {
        this.state.commentList.push(comment);
        this.setState({
            commentList: this.state.commentList
        })
    }

    render() {
        return(
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList commentList={this.state.commentList}/>
            </div>
        )
    }
}

export default CommentApp