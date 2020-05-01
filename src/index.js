import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Index from "./common/Index";
import House from "./common/House";
import './index.css';
import Title from "./common/Title";
import Header from "./common/Header";
import Dog from "./common/Dog";
import LikeButton from "./common/LikeButton";
import Computer from "./common/Computer";
import UserList from "./common/UsrList";
import CommentApp from "./common/comment/CommentApp";
import PercentageApp from "./common/percentage/PercentageApp";

// (function renderContent(content) {
//     ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
// })("Hello React");

// 函数 getNotificationsCount 已经可以直接调用

const users = [
    { username: 'Jerry', age: 21, gender: 'male' },
    { username: 'Tomy', age: 22, gender: 'male' },
    { username: 'Lily', age: 19, gender: 'female' },
    { username: 'Lucy', age: 20, gender: 'female' }
];
// ReactDOM.render(<UserList users={users}/>, document.getElementById('root'));
ReactDOM.render(<PercentageApp/>, document.getElementById('root'));
