import React, {Component} from 'react'

class PercentageShower extends Component {
    render () {
        let number = this.props.number*100
        return (
            <div>
                {number.toFixed(2)+'%'}
            </div>
        )
    }
}

export default PercentageShower