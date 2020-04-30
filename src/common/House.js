import React, {Component} from 'react';
import Main from "./Main";

class House extends Component {
    render() {
        return(
            <div>
                <Room/>
                <Bathroom/>
                <Dog/>
            </div>
        )
    }
}

class Room extends Component {
    render() {
        return(
            <div>
                <h1>this is Room</h1>
                <Main/>
            </div>
        )
    }
}

class Bathroom extends Component {
    render() {
        return(
            <div>
                <h1>this is Bathroom</h1>
            </div>
        )
    }
}

class Man extends Component {
    render() {
        return(
            <div>
                <h1>this is Main</h1>
            </div>
        )
    }
}

class Dog extends Component {
    render() {
        return(
            <div>
                <h1>this is Dog</h1>
            </div>
        )
    }
}

export default House;