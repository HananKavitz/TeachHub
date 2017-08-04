import React, {Component} from 'react';
import Sign from '../Components/Sign';

class SignContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            "isSetImage": false
        };
    }



    render() {
        return (
            <Sign isSetImage={this.state.isSetImage}/>
        )
    }
}

export default SignContainer;