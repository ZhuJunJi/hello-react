import React, {Component} from 'react';

class BlackBorderContainer extends Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                {this.props.children.map((children)=>{
                    return(
                        <div className='border'>
                            {children}
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default BlackBorderContainer