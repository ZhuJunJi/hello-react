import React, {Component} from 'react';

class Input extends Component {
    handleValueChange(event){
        if(this.props.changeValue){
            this.props.changeValue(event.target.value)
        }
    }
    render () {
        return (
            <div>
                <input type='number' onChange={this.handleValueChange.bind(this)}/>
            </div>
        )
    }
}

class PercentageShower extends Component {

    static defaultProps = {
        showValue: ''
    };

    render () {
        return (
            <div>
                {this.props.showValue}
            </div>
        )
    }
}

class PercentageApp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showValue: ''
        }
    }
    handleInputValueChange(value){
        this.setState({
            showValue: value ?  (value * 100).toFixed(2) + '%' : ''
        })
    }

    render () {
        return (
            <div>
                <Input changeValue={this.handleInputValueChange.bind(this)}/>
                <PercentageShower showValue={this.state.showValue}/>
            </div>
        )
    }
}

export default PercentageApp