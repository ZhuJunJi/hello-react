import React, {Component} from 'react';

class Dog extends Component {
    constructor(props) {
        super(props);
        this.state = {isRunning: false, isBarking: false}

    }

    bark() {
        console.log('bark');
        this.setState({isBarking: true});
        setTimeout(() => this.setState({isBarking: false}), 2000)
    }

    run() {
        console.log('run');
        this.setState({isRunning: true});
        setTimeout(() => this.setState({isRunning: false}), 2000)
    }

    render() {
        return (
            <div onClick={() => {
                this.bark(this);
                this.run(this)
            }}>
                DOG {this.state.isRunning ? "Running" : "Not Running"} {this.state.isBarking ? "Barking" : "Not Barking"}
            </div>
        )
    }
}

export default Dog;