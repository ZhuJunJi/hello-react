import React, {Component} from 'react'
import Input from './Input'
import PercentageShower from './PercentageShower'

class PercentageApp extends Component {

    constructor(){
        super()
        this.state = {
            number: 0
        }
    }
    
    handlerChangeNumber(number){
        this.setState({
            number: number
        })
    }
    
    render () {
        return (
            <div>
                <Input onChangeNumber={this.handlerChangeNumber.bind(this)} number={this.state.number}/>
                <PercentageShower number={this.state.number}/>
            </div>
        )
    }
}


export default PercentageApp