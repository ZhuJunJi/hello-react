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

// (function renderContent(content) {
//     ReactDOM.render(<h1>{content}</h1>, document.getElementById('root'))
// })("Hello React");

// 函数 getNotificationsCount 已经可以直接调用

ReactDOM.render(<Computer/>, document.getElementById('root'));
