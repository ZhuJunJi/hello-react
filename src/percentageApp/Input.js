import React, {Component} from 'react'



class Input extends Component {

    handleChangeNumber(event){
        if(this.props.onChangeNumber){
            this.props.onChangeNumber(event.target.value)
        }
    }

    render () {
        return (
            <div>
                <input type="number" onChange={this.handleChangeNumber.bind(this)} value={this.props.number}/>
            </div>
        )
    }

}

export default Input
