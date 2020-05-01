import React, {Component} from 'react';

class User extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div>
                <div>姓名：{user.username}</div>
                <div>年龄：{user.age}</div>
                <div>性别：{user.gender}</div>
                <hr/>
            </div>
        )
    }
}

class UserList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {users} = this.props;
        return (
            <div>
                {users.map((user, i) => <User key={i} user={user}/>)}
            </div>
        )
    }
}

export default UserList;