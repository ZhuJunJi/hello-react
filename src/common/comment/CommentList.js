import React, {Component} from 'react';
import Comment from "./Comment";
class CommentList extends Component{

    static defaultProps = {
        commentList: []
    };

    constructor(props) {
        super(props);
    }
    render() {
        const {commentList} = this.props;
        return(
            <div>{commentList.map((comment,i)=><Comment key={i} comment={comment}/>)}</div>
        )
    }
}
export default CommentList