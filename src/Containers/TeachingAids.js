import React, {Component} from 'react';
//import TeachingAidsComponent from '../Components/TeachingAids';
import NewTeachingAidButton from '../Components/NewTeachingAidButton';

class TeachingAids extends Component {

    // constructor(props) {
    //     super(props);
    //
    // }



    render() {
        return (
            <div className="container">
                <NewTeachingAidButton isLogedIn = {this.props.isLogedIn}/>
                <div className="row row-content">
                    <div className="col-xs-12">
                        <h2>
                            Teaching Aids
                        </h2>
                    </div>
                </div>
            </div>

        )
    }
}

export default TeachingAids;
