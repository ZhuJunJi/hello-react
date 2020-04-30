import React, {Component} from 'react';

function getNotificationsCount() {
    return 7;
}

class Notification extends Component {

    render() {
        return (
            <div>
                <span>有({getNotificationsCount()})条未读消息</span>
            </div>
        )
    }
}

export default Notification;
