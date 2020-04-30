import React, {Component} from 'react';
import Title from './Title';

class Header extends Component {

    render() {
        return (
            <div>
                <Title/>
                <h2>This is Header</h2>
            </div>
        )
    }
}

export default Header;