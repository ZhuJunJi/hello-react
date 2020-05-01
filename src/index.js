import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
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
import Clock from "./common/clock/Clock";
import ClockApp from "./common/clock/ClockApp";
// import Post from "./common/lesson/Post";
import BlackBorderContainer from "./common/lesson/BlackBorderContainer";

// (function renderContent(content) {
//     ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
// })("Hello React");

// 函数 getNotificationsCount 已经可以直接调用

const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];
// ReactDOM.render(<UserList users={users}/>, document.getElementById('root'));
// ReactDOM.render(
//     <BlackBorderContainer>
//         <ClockApp/>
//         <House/>
//     </BlackBorderContainer>,
//     document.getElementById('root'));

// const getDefaultStyledPost = (defaultStyle) => {
//     return (
//         <p style={{color: defaultStyle.color,fontSize: defaultStyle.fontSize}}>
//             内容展示
//         </p>
//     )
// };
const getDefaultStyledPost = (defaultStyle) => ({style}) => <p style={{...defaultStyle, ...style}}>内容</p>;
const Post = getDefaultStyledPost({ color: 'red' });

ReactDOM.render(<Post style={{ color: 'blue', fontSize: '13px' }} />, document.getElementById('root'));